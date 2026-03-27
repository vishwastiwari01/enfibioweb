'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';

interface Vec3 { x: number; y: number; z: number }

function createBoids(count: number, range: number) {
  return Array.from({ length: count }, () => {
    return {
      pos: {
        x: (Math.random() - 0.5) * range,
        y: (Math.random() - 0.5) * range,
        z: (Math.random() - 0.5) * range,
      },
      vel: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: (Math.random() - 0.5) * 2,
      },
      acc: { x: 0, y: 0, z: 0 },
    };
  });
}

const MAX_SPEED = 0.15;
const MAX_STEER = 0.005;

function mag(v: Vec3) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
function norm(v: Vec3): Vec3 {
  const m = mag(v) || 1;
  return { x: v.x / m, y: v.y / m, z: v.z / m };
}
function scale(v: Vec3, s: number): Vec3 { return { x: v.x * s, y: v.y * s, z: v.z * s }; }
function add(...vecs: Vec3[]): Vec3 {
  return vecs.reduce((a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }), { x: 0, y: 0, z: 0 });
}
function sub(a: Vec3, b: Vec3): Vec3 { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
function dist(a: Vec3, b: Vec3) { return mag(sub(a, b)); }

function limit(v: Vec3, max: number): Vec3 {
  if (mag(v) > max) return scale(norm(v), max);
  return v;
}

function BoidsSimulation({ active }: { active: boolean }) {
  const count = 150;
  const boidsRef = useRef(createBoids(count, 30));
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const targetRef = useRef<Vec3>({ x: 0, y: 0, z: 0 });
  const { viewport, camera } = useThree();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // Very rough mapping of mouse to 3D space in front of camera
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRef.current = { x: x * 20, y: y * 10, z: 0 };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current || !active) return;
    const boids = boidsRef.current;
    
    // Physics 
    for (let i = 0; i < count; i++) {
      const boid = boids[i];
      let sep = { x: 0, y: 0, z: 0 };
      let ali = { x: 0, y: 0, z: 0 };
      let coh = { x: 0, y: 0, z: 0 };
      
      let sepCount = 0;
      let aliCount = 0;
      
      for (let j = 0; j < count; j++) {
        if (i === j) continue;
        const other = boids[j];
        const d = dist(boid.pos, other.pos);
        
        // Separation (Radius 2)
        if (d > 0 && d < 2) {
          const diff = norm(sub(boid.pos, other.pos));
          sep = add(sep, scale(diff, 1 / d));
          sepCount++;
        }
        
        // Alignment & Cohesion (Radius 6)
        if (d > 0 && d < 6) {
          ali = add(ali, other.vel);
          coh = add(coh, other.pos);
          aliCount++;
        }
      }
      
      if (sepCount > 0) {
        sep = scale(sep, 1 / sepCount);
        sep = scale(norm(sep), MAX_SPEED);
        sep = sub(sep, boid.vel);
        sep = limit(sep, MAX_STEER * 2);
      }
      
      if (aliCount > 0) {
        ali = scale(ali, 1 / aliCount);
        ali = scale(norm(ali), MAX_SPEED);
        ali = sub(ali, boid.vel);
        ali = limit(ali, MAX_STEER);
        
        coh = scale(coh, 1 / aliCount);
        coh = sub(coh, boid.pos);
        coh = scale(norm(coh), MAX_SPEED);
        coh = sub(coh, boid.vel);
        coh = limit(coh, MAX_STEER);
      }
      
      // Seek target
      const seekDelta = sub(targetRef.current, boid.pos);
      let seek = { x: 0, y: 0, z: 0 };
      if (mag(seekDelta) > 0) {
        seek = scale(norm(seekDelta), MAX_SPEED);
        seek = sub(seek, boid.vel);
        seek = limit(seek, MAX_STEER * 0.5);
      }

      // Combine
      boid.acc = add(scale(sep, 1.5), scale(ali, 1.0), scale(coh, 1.0), seek);
      boid.vel = limit(add(boid.vel, boid.acc), MAX_SPEED);
      boid.pos = add(boid.pos, boid.vel);
      
      // Boundaries wrap
      const B = 20;
      if (boid.pos.x < -B) boid.pos.x = B;
      if (boid.pos.x > B) boid.pos.x = -B;
      if (boid.pos.y < -B) boid.pos.y = B;
      if (boid.pos.y > B) boid.pos.y = -B;
      if (boid.pos.z < -B) boid.pos.z = B;
      if (boid.pos.z > B) boid.pos.z = -B;

      // Update Dummy Transform
      dummy.position.set(boid.pos.x, boid.pos.y, boid.pos.z);
      
      // Arrow points along Z in threejs. We want to align the cone with the velocity.
      const targetPos = new THREE.Vector3(boid.pos.x + boid.vel.x, boid.pos.y + boid.vel.y, boid.pos.z + boid.vel.z);
      dummy.lookAt(targetPos);
      
      // Rotate 90 degrees on X because ConeGeometry points up on Y by default
      dummy.rotateX(Math.PI / 2);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <Instances ref={meshRef} limit={count} range={count}>
      {/* Subtle data-point particles */}
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.4} />
      {Array.from({ length: count }).map((_, i) => (
        <Instance key={i} />
      ))}
    </Instances>
  );
}

export default function SwarmCanvas({ active }: { active: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
      style={{ zIndex: 0, opacity: active ? 0.12 : 0 }}
    >
      <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={1} color="#4facfe" />
        <BoidsSimulation active={active} />
      </Canvas>
    </div>
  );
}
