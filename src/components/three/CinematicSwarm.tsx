'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ──────────────────────────────────────────────────────────
   Constants
────────────────────────────────────────────────────────── */
const DRONE_COUNT = 36;
const PHASE_DURATION = 6; // seconds per formation phase

type Formation = 'grid' | 'vshape' | 'cluster' | 'orbit';
const PHASES: Formation[] = ['grid', 'vshape', 'orbit', 'cluster'];

/* ──────────────────────────────────────────────────────────
   Formation target calculators
────────────────────────────────────────────────────────── */
function gridTargets(n: number): THREE.Vector3[] {
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  return Array.from({ length: n }, (_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    return new THREE.Vector3(
      (c - cols / 2) * 2.4,
      (r - rows / 2) * 2.4,
      0,
    );
  });
}

function vshapeTargets(n: number): THREE.Vector3[] {
  return Array.from({ length: n }, (_, i) => {
    const half = n / 2;
    const side = i < half ? -1 : 1;
    const idx = i < half ? i : i - half;
    return new THREE.Vector3(side * idx * 1.8, -idx * 1.5, 0);
  });
}

function clusterTargets(n: number): THREE.Vector3[] {
  return Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2;
    const r = 3 + Math.sin(i * 2.1) * 3;
    const layer = Math.floor(i / 12);
    return new THREE.Vector3(
      Math.cos(angle) * r,
      (layer - 1) * 2.5 + Math.sin(i) * 0.8,
      Math.sin(angle) * r,
    );
  });
}

function orbitTargets(n: number): THREE.Vector3[] {
  return Array.from({ length: n }, (_, i) => {
    const rings = 3;
    const ring = i % rings;
    const perRing = Math.ceil(n / rings);
    const idx = Math.floor(i / rings);
    const angle = (idx / perRing) * Math.PI * 2;
    const radii = [5, 8.5, 12];
    const heights = [1.5, 0, -1.5];
    return new THREE.Vector3(
      Math.cos(angle) * radii[ring],
      heights[ring],
      Math.sin(angle) * radii[ring],
    );
  });
}

function getTargets(phase: Formation, n: number): THREE.Vector3[] {
  switch (phase) {
    case 'grid':    return gridTargets(n);
    case 'vshape':  return vshapeTargets(n);
    case 'cluster': return clusterTargets(n);
    case 'orbit':   return orbitTargets(n);
  }
}

/* ──────────────────────────────────────────────────────────
   Drone model with spinning propellers (SwarmBench style)
────────────────────────────────────────────────────────── */
function DroneModel({ color, isLeader }: { color: string; isLeader: boolean }) {
  const prop1Ref = useRef<THREE.Mesh>(null);
  const prop2Ref = useRef<THREE.Mesh>(null);
  const prop3Ref = useRef<THREE.Mesh>(null);
  const prop4Ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (prop1Ref.current) prop1Ref.current.rotation.y += 0.5;
    if (prop2Ref.current) prop2Ref.current.rotation.y += 0.5;
    if (prop3Ref.current) prop3Ref.current.rotation.y += 0.5;
    if (prop4Ref.current) prop4Ref.current.rotation.y += 0.5;
  });

  return (
    <group scale={0.25}>
      {/* Body Box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.5, 1.5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* 4 Arms */}
      {[
        { x: 0.7, z: 0.7 },
        { x: -0.7, z: 0.7 },
        { x: 0.7, z: -0.7 },
        { x: -0.7, z: -0.7 },
      ].map((pos, idx) => (
        <mesh key={idx} position={[pos.x, 0.15, pos.z]}>
          <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}

      {/* 4 Propellers */}
      <mesh ref={prop1Ref} position={[0.7, 0.3, 0.7]}>
        <boxGeometry args={[0.9, 0.02, 0.08]} />
        <meshStandardMaterial color={isLeader ? '#ffd700' : '#6ec6ff'} transparent opacity={0.8} />
      </mesh>
      <mesh ref={prop2Ref} position={[-0.7, 0.3, 0.7]}>
        <boxGeometry args={[0.9, 0.02, 0.08]} />
        <meshStandardMaterial color={isLeader ? '#ffd700' : '#6ec6ff'} transparent opacity={0.8} />
      </mesh>
      <mesh ref={prop3Ref} position={[0.7, 0.3, -0.7]}>
        <boxGeometry args={[0.9, 0.02, 0.08]} />
        <meshStandardMaterial color={isLeader ? '#ffd700' : '#6ec6ff'} transparent opacity={0.8} />
      </mesh>
      <mesh ref={prop4Ref} position={[-0.7, 0.3, -0.7]}>
        <boxGeometry args={[0.9, 0.02, 0.08]} />
        <meshStandardMaterial color={isLeader ? '#ffd700' : '#6ec6ff'} transparent opacity={0.8} />
      </mesh>

      {/* Status Light */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color={isLeader ? '#ef4444' : '#22c55e'} />
      </mesh>
    </group>
  );
}

function DroneInstance({
  index,
  positionsRef,
  targetDroneIdx,
}: {
  index: number;
  positionsRef: React.MutableRefObject<THREE.Vector3[]>;
  targetDroneIdx: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const isLeader = index === 0;
  const isTarget = index === targetDroneIdx;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const pos = positionsRef.current[index];
      if (pos) {
        // subtle bobbing matching propeller rotation
        const bob = Math.sin(clock.getElapsedTime() * 8 + index * 0.5) * 0.04;
        groupRef.current.position.set(pos.x, pos.y + bob, pos.z);
        groupRef.current.rotation.y = clock.getElapsedTime() * 0.4 + index * 0.3;
      }
    }
  });

  const color = isLeader ? '#f39c12' : isTarget ? '#ef4444' : '#3b82f6';

  return (
    <group ref={groupRef}>
      <DroneModel color={color} isLeader={isLeader} />
    </group>
  );
}

function TaskTargets() {
  const tasks = useMemo(() => [
    { x: -8, y: 2, z: -5 },
    { x: 10, y: -2, z: 8 },
    { x: -5, y: 5, z: 10 },
    { x: 6, y: -4, z: -8 },
  ], []);

  return (
    <>
      {tasks.map((t, idx) => (
        <mesh key={idx} position={[t.x, t.y, t.z]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshPhongMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Drone swarm controller
────────────────────────────────────────────────────────── */
function DroneSwarm({
  phaseRef,
  targetDroneRef,
}: {
  phaseRef: React.MutableRefObject<number>;
  targetDroneRef: React.MutableRefObject<number>;
}) {
  const lineMatRef = useRef<THREE.LineBasicMaterial>(null);
  const netLinesRef = useRef<THREE.LineSegments>(null);

  const positions = useRef(
    Array.from({ length: DRONE_COUNT }, () => new THREE.Vector3(
      (Math.random() - .5) * 30,
      (Math.random() - .5) * 30,
      (Math.random() - .5) * 30,
    ))
  );
  const velocities = useRef(
    Array.from({ length: DRONE_COUNT }, () => new THREE.Vector3(
      (Math.random() - .5) * 0.1,
      (Math.random() - .5) * 0.1,
      (Math.random() - .5) * 0.1,
    ))
  );

  // pre-calculate adjacency for network lines
  const edgePositions = useMemo(() => new Float32Array(DRONE_COUNT * 3 * 6), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const phaseIdx = Math.floor(t / PHASE_DURATION) % PHASES.length;
    phaseRef.current = phaseIdx;
    const targets = getTargets(PHASES[phaseIdx], DRONE_COUNT);

    // Update drone positions
    const pos = positions.current;
    const vel = velocities.current;
    for (let i = 0; i < DRONE_COUNT; i++) {
      const tgt = targets[i];
      const toTarget = tgt.clone().sub(pos[i]);
      const d = toTarget.length();
      const steer = toTarget.normalize().multiplyScalar(Math.min(d * 0.04, 0.18));
      vel[i].add(steer).clampLength(0, 0.22);
      pos[i].add(vel[i]);
    }

    // Build network mesh lines
    if (netLinesRef.current) {
      const geo = netLinesRef.current.geometry;
      const arr = edgePositions;
      let ptr = 0;
      for (let i = 0; i < DRONE_COUNT; i++) {
        let n1 = -1, n2 = -1, d1 = Infinity, d2 = Infinity;
        for (let j = 0; j < DRONE_COUNT; j++) {
          if (i === j) continue;
          const dd = pos[i].distanceTo(pos[j]);
          if (dd < d1) { d2 = d1; n2 = n1; d1 = dd; n1 = j; }
          else if (dd < d2) { d2 = dd; n2 = j; }
        }
        for (const nb of [n1, n2]) {
          if (nb < 0) continue;
          if (ptr + 5 < arr.length) {
            arr[ptr++] = pos[i].x; arr[ptr++] = pos[i].y; arr[ptr++] = pos[i].z;
            arr[ptr++] = pos[nb].x; arr[ptr++] = pos[nb].y; arr[ptr++] = pos[nb].z;
          }
        }
      }
      for (; ptr < arr.length; ptr++) arr[ptr] = 0;
      geo.setAttribute('position', new THREE.BufferAttribute(arr.slice(), 3));
    }

    if (lineMatRef.current) {
      lineMatRef.current.opacity = 0.15 + Math.sin(t * 1.5) * 0.05;
    }
  });

  return (
    <>
      {/* Detailed drones */}
      {Array.from({ length: DRONE_COUNT }).map((_, i) => (
        <DroneInstance
          key={i}
          index={i}
          positionsRef={positions}
          targetDroneIdx={targetDroneRef.current}
        />
      ))}

      {/* Network lines */}
      <lineSegments ref={netLinesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMatRef}
          color="#3b82f6"
          transparent
          opacity={0.18}
        />
      </lineSegments>

      {/* Target green spheres */}
      <TaskTargets />
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Data packets travelling along lines
────────────────────────────────────────────────────────── */
function DataPackets() {
  const COUNT = 20;
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(() =>
    Array.from({ length: COUNT }, () => ({
      from: Math.floor(Math.random() * DRONE_COUNT),
      to: Math.floor(Math.random() * DRONE_COUNT),
      speed: 0.4 + Math.random() * 0.6,
      phase: Math.random(),
    })), []);

  // simple shared positions array (we track drone positions externally via ref below)
  const dronePos = useRef(
    Array.from({ length: DRONE_COUNT }, (_, i) => new THREE.Vector3(
      (Math.random() - .5) * 20,
      (Math.random() - .5) * 20,
      (Math.random() - .5) * 20,
    ))
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    seeds.forEach((seed, i) => {
      const progress = ((t * seed.speed + seed.phase) % 1);
      const from = dronePos.current[seed.from % DRONE_COUNT];
      const to   = dronePos.current[seed.to   % DRONE_COUNT];
      dummy.position.lerpVectors(from, to, progress);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshBasicMaterial color="#44ffcc" />
    </instancedMesh>
  );
}

/* ──────────────────────────────────────────────────────────
   Ground grid
────────────────────────────────────────────────────────── */
function Ground() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) (ref.current.material as THREE.MeshBasicMaterial).opacity
      = 0.08 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02;
  });
  return (
    <gridHelper
      ref={ref as any}
      args={[80, 80, '#cbd5e1', '#e2e8f0']}
      position={[0, -10, 0]}
    />
  );
}

/* ──────────────────────────────────────────────────────────
   Cinematic camera controller
────────────────────────────────────────────────────────── */
function CinematicCamera({ phaseRef }: { phaseRef: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const camTarget = useRef(new THREE.Vector3());
  const camPos = useRef(new THREE.Vector3(0, 6, 28));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const phase = phaseRef.current;

    // Different camera modes for each phase
    let idealPos: THREE.Vector3;
    switch (phase) {
      case 0: // grid — wide establishing
        idealPos = new THREE.Vector3(
          Math.sin(t * 0.08) * 30,
          10 + Math.cos(t * 0.06) * 4,
          28,
        );
        break;
      case 1: // V-shape — side dolly
        idealPos = new THREE.Vector3(
          -20 + Math.sin(t * 0.1) * 8,
          5,
          20 + Math.cos(t * 0.08) * 5,
        );
        break;
      case 2: // orbit rings — top-down tactical
        idealPos = new THREE.Vector3(
          Math.sin(t * 0.12) * 15,
          22,
          Math.cos(t * 0.12) * 15,
        );
        break;
      case 3: // cluster — close-up tracking
        idealPos = new THREE.Vector3(
          Math.sin(t * 0.15) * 12,
          4 + Math.sin(t * 0.08) * 2,
          14,
        );
        break;
      default:
        idealPos = new THREE.Vector3(0, 6, 28);
    }

    camPos.current.lerp(idealPos, 0.012);
    camera.position.copy(camPos.current);
    camTarget.current.lerp(new THREE.Vector3(0, 0, 0), 0.04);
    camera.lookAt(camTarget.current);
  });

  return null;
}

/* ──────────────────────────────────────────────────────────
   Ambient particles (fog effect)
────────────────────────────────────────────────────────── */
function AmbientParticles() {
  const count = 300;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - .5) * 60;
    return arr;
  }, []);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.01;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#2563eb" size={0.08} transparent opacity={0.3} />
    </points>
  );
}

/* ──────────────────────────────────────────────────────────
   Scene
────────────────────────────────────────────────────────── */
function Scene({ phaseRef, targetDroneRef }: {
  phaseRef: React.MutableRefObject<number>;
  targetDroneRef: React.MutableRefObject<number>;
}) {
  return (
    <>
      <fog attach="fog" args={['#f8fafc', 30, 70]} />

      <ambientLight intensity={0.85} color="#ffffff" />
      <directionalLight position={[10, 20, 10]} intensity={1.8} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00d4ff" distance={40} />
      <pointLight position={[15, 5, -15]} intensity={2} color="#6644ff" distance={30} />
      <pointLight position={[-15, 5, 15]} intensity={2} color="#00ffaa" distance={30} />

      <CinematicCamera phaseRef={phaseRef} />

      <DroneSwarm phaseRef={phaseRef} targetDroneRef={targetDroneRef} />
      <DataPackets />
      <AmbientParticles />
      <Ground />
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   HUD Overlay (HTML layer on top of canvas)
────────────────────────────────────────────────────────── */
const PHASE_LABELS: Record<Formation, { label: string; desc: string; color: string }> = {
  grid:    { label: 'GRID ARRAY',       desc: 'Establishing formation baseline', color: '#00d4ff' },
  vshape:  { label: 'V-STRIKE VECTOR',  desc: 'Tactical assault configuration',  color: '#ff9900' },
  orbit:   { label: 'ORBITAL SENTINEL', desc: 'Persistent area surveillance',    color: '#aa44ff' },
  cluster: { label: 'ADAPTIVE CLUSTER', desc: 'Autonomous threat response',      color: '#00ff88' },
};

function HUDOverlay({
  phase,
  elapsed,
}: {
  phase: Formation;
  elapsed: number;
}) {
  const info = PHASE_LABELS[phase];
  const phaseProgress = ((elapsed % PHASE_DURATION) / PHASE_DURATION) * 100;

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      style={{ fontFamily: 'Share Tech Mono, monospace', zIndex: 10 }}
    >
      {/* TOP-LEFT — Signal links */}
      <div className="absolute top-4 left-4 text-[10px] opacity-90">
        <div style={{ color: info.color }} className="text-xs font-bold tracking-widest mb-1">
          ◈ SWARM CONTROL SYSTEM
        </div>
        <div className="text-[var(--text-muted)]">NODES ACTIVE: <span style={{ color: '#0ea5e9' }}>36 / 36</span></div>
        <div className="text-[var(--text-muted)]">MESH LINKS: <span style={{ color: '#0ea5e9' }}>72</span></div>
        <div className="text-[var(--text-muted)]">AI DECISIONS/s: <span style={{ color: 'var(--green)' }}>1,842</span></div>
        <div className="text-[var(--text-muted)]">LATENCY: <span style={{ color: 'var(--amber)' }}>4ms</span></div>
        <div className="text-[var(--text-muted)]">ENCRYPTION: <span style={{ color: 'var(--green)' }}>AES-256 ACTIVE</span></div>
      </div>

      {/* TOP-RIGHT — Formation info */}
      <div className="absolute top-4 right-4 text-right text-[10px]">
        <div style={{ color: info.color }} className="text-sm font-bold tracking-widest">
          {info.label}
        </div>
        <div className="text-[var(--text-muted)] mt-1">{info.desc}</div>
        <div className="mt-3 text-[var(--text-dim)] text-[9px] tracking-widest">TRANSITION IN</div>
        <div className="mt-1 w-40 h-[2px] bg-slate-200 ml-auto">
          <div
            className="h-full transition-none"
            style={{
              width: `${phaseProgress}%`,
              background: info.color,
              boxShadow: `0 0 6px ${info.color}`,
            }}
          />
        </div>
        <div className="mt-1" style={{ color: info.color }}>
          {(PHASE_DURATION - (elapsed % PHASE_DURATION)).toFixed(1)}s
        </div>
      </div>

      {/* CENTER — Target reticle on target drone simulation */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity={0.2}>
          <circle cx="40" cy="40" r="18" stroke="#ff6644" strokeWidth="0.8" strokeDasharray="4 3" />
          <line x1="40" y1="0" x2="40" y2="22" stroke="#ff6644" strokeWidth="0.6" />
          <line x1="40" y1="58" x2="40" y2="80" stroke="#ff6644" strokeWidth="0.6" />
          <line x1="0" y1="40" x2="22" y2="40" stroke="#ff6644" strokeWidth="0.6" />
          <line x1="58" y1="40" x2="80" y2="40" stroke="#ff6644" strokeWidth="0.6" />
          <circle cx="40" cy="40" r="2" fill="#ff6644" />
        </svg>
      </div>

      {/* BOTTOM-LEFT — Telemetry stream */}
      <div className="absolute bottom-4 left-4 text-[9px] opacity-70">
        <div className="text-[var(--text-dim)]">SYS_CLK {new Date().toLocaleTimeString()}</div>
        <div style={{ color: 'var(--primary)' }}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="text-[8px]">
              ▸ DRONE_{String(Math.floor(Math.random() * 36) + 1).padStart(3, '0')}&nbsp;
              TELEM_OK &nbsp;{(Math.random() * 100).toFixed(1)}% PWR
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM-RIGHT — Status */}
      <div className="absolute bottom-4 right-4 text-right text-[10px]">
        <div className="text-[var(--text-dim)]">PHASE {PHASES.indexOf(phase) + 1} / {PHASES.length}</div>
        <div className="text-[var(--text-dim)] mt-1">AUTO-TRANSITIONING</div>
        <div className="mt-1" style={{ color: 'var(--green)' }}>● NOMINAL</div>
      </div>

      {/* Corner brackets */}
      {[['top-3 left-3', 'border-t border-l'],
        ['top-3 right-3', 'border-t border-r'],
        ['bottom-3 left-3', 'border-b border-l'],
        ['bottom-3 right-3', 'border-b border-r']].map(([pos, borders], i) => (
        <div
          key={i}
          className={`absolute ${pos} w-6 h-6 ${borders}`}
          style={{ borderColor: info.color, opacity: 0.4 }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Exported component
────────────────────────────────────────────────────────── */
export default function CinematicSwarm() {
  const [mounted, setMounted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [phase, setPhase] = useState<Formation>('grid');
  const phaseRef = useRef(0);
  const targetDroneRef = useRef(7); // drone that "detects target"

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(() => {
      setElapsed(e => {
        const ne = e + 0.1;
        const idx = Math.floor(ne / PHASE_DURATION) % PHASES.length;
        setPhase(PHASES[idx]);
        // randomly change target drone on phase change
        const prevIdx = Math.floor(e / PHASE_DURATION) % PHASES.length;
        if (idx !== prevIdx) {
          targetDroneRef.current = Math.floor(Math.random() * DRONE_COUNT);
        }
        return ne;
      });
    }, 100);
    return () => clearInterval(id);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative w-full" style={{ height: '600px', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 6, 28], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Scene phaseRef={phaseRef} targetDroneRef={targetDroneRef} />
      </Canvas>

      {/* HTML HUD layer */}
      <HUDOverlay phase={phase} elapsed={elapsed} />
    </div>
  );
}
