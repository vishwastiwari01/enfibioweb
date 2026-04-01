'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isScanning, setIsScanning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [statusText, setStatusText] = useState('SYSTEM IDLE');

  // Logic to handle scan progress
  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(() => {
                setVisible(false);
                setTimeout(onComplete, 800);
              }, 1500);
            }, 500);
            return 100;
          }
          return prev + Math.random() * 2 + 0.5;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isScanning, progress, onComplete]);

  useEffect(() => {
    if (isScanning) {
      if (progress < 30) setStatusText('BIOMETRIC VALIDATION...');
      else if (progress < 70) setStatusText('AUTHORIZING SECURE UPLINK...');
      else if (progress < 100) setStatusText('SYNCING NEURAL INTERFACE...');
      else setStatusText('ACCESS GRANTED');
    }
  }, [isScanning, progress]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#010208' }}
    >
      {/* Background Text "ENFIBIO TECHNOLOGIES" - revealed during scan */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isScanning ? 0.05 : 0,
            scale: isScanning ? 1.1 : 1,
          }}
          className="text-center"
        >
          <h1 className="text-[12vw] font-black tracking-[-0.05em] leading-none mb-0 text-white">
            ENFIBIO
          </h1>
          <h2 className="text-[2vw] font-bold tracking-[1.5em] text-white/40 -mt-2 ml-[1.5em]">
            TECHNOLOGIES
          </h2>
        </motion.div>
      </div>

      {/* Floating Car / Drone Animation - behind the scanner but in front of background text */}
      <AnimatePresence>
        {isScanning && !isComplete && (
          <motion.div
            initial={{ y: 100, x: -100, opacity: 0, rotate: -15, scale: 0.5 }}
            animate={{
              y: [20, -20, 20],
              x: 0,
              opacity: 0.3,
              rotate: 0,
              scale: 1,
            }}
            exit={{ x: 200, opacity: 0, transition: { duration: 0.8 } }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              opacity: { duration: 1 },
              rotate: { duration: 1.5 },
              scale: { duration: 1 },
            }}
            className="absolute z-10 w-[600px] h-auto pointer-events-none"
          >
            <img
              src="/astra_carrier.png"
              alt="Floating Drone"
              className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(37,99,235,0.4)]"
              style={{ filter: 'brightness(1.5) contrast(1.2)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main UI Overlay */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-sm px-8">
        {/* Progress Bar (Glow style) */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-12">
          {isScanning && (
            <motion.div
              layoutId="loader-progress"
              className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_10px_#2563eb]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          )}
        </div>

        {/* Brand revealed after scan completion */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '28px',
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}
              >
                ENFIBIO
              </div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: 'rgba(0,255,255,0.6)',
                  marginTop: '6px',
                }}
              >
                TECHNOLOGIES
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scan Interaction */}
        {!isComplete && (
          <div className="flex flex-col items-center">
            <StyledWrapper onClick={() => !isScanning && setIsScanning(true)}>
              <div className={`fingerprint-container ${isScanning ? 'is-scanning' : ''}`}>
                <svg
                  viewBox="0 0 24 24"
                  className="fingerprint-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.987 4.571q2.636 0 4.973 1.138q2.338 1.137 3.894 3.268q.136.167.083.314q-.053.145-.183.232t-.282.076t-.264-.176q-1.414-1.989-3.595-3.036T11.986 5.34q-2.425 0-4.569 1.067T3.854 9.423q-.131.187-.292.193q-.162.005-.293-.1q-.108-.087-.13-.217t.069-.272q1.569-2.086 3.87-3.271q2.3-1.185 4.909-1.185m0 2.35q3.336 0 5.732 2.223t2.396 5.506q0 1.209-.853 2.019q-.854.81-2.081.81q-1.217 0-2.101-.81t-.884-2.019q0-.863-.64-1.465q-.641-.6-1.531-.6q-.905 0-1.557.596q-.652.595-.652 1.469q0 2.483 1.475 4.146q1.476 1.664 3.751 2.314q.178.057.248.19t.02.284q-.05.133-.162.239t-.317.056q-2.523-.65-4.154-2.56t-1.63-4.669q0-1.211.88-2.023t2.1-.812t2.078.812t.86 2.023q0 .874.658 1.47t1.552.596t1.533-.601t.638-1.465q0-2.949-2.17-4.957q-2.168-2.009-5.18-2.009T6.831 9.7t-2.154 4.945q0 .61.141 1.524t.548 2.115q.055.167-.003.294q-.06.127-.22.202t-.302.005q-.139-.07-.195-.228q-.394-1.033-.566-1.976t-.172-1.93q0-3.284 2.384-5.506t5.696-2.223m.037-4.8q1.575 0 3.076.388q1.5.387 2.903 1.112q.205.106.233.252t-.027.283t-.202.198q-.146.062-.3-.025q-1.306-.733-2.747-1.086q-1.44-.352-2.945-.352q-1.48 0-2.899.375q-1.419.376-2.752 1.063q-.103.067-.255.024t-.214-.186t-.04-.276q.021-.133.163-.22q1.381-.769 2.906-1.16t3.1-.39m.001 7.245q2.286 0 3.913 1.524t1.627 3.76q0 .173-.106.279t-.280.106q-.141 0-.263-.106q-.12-.106-.12-.279q0-1.914-1.417-3.215t-3.355-1.3t-3.349 1.3t-1.41 3.213q0 2.066.719 3.488t2.069 2.882q.15.153.121.305t-.121.244q-.112.112-.263.122t-.283-.122q-1.417-1.511-2.215-3.133t-.797-3.785q0-2.235 1.622-3.760t3.908-1.523m-.05 4.9q.172 0 .28.115q.11.115.11.269q0 1.934 1.378 3.172t3.237 1.238q.246 0 .521-.025t.556-.075q.148-.031.253.043t.155.245q.050.153-.056.267t-.268.164q-.276.067-.595.109q-.318.04-.566.04q-2.168 0-3.776-1.472q-1.609-1.472-1.609-3.706q0-.154.105-.27q.105-.114.276-.114"
                    className="fingerprint-path"
                  />
                </svg>
                <div className="scan-line" />
                <div className="ripple" />
                <div className="glow" />
                <div className="status">{statusText}</div>
              </div>
            </StyledWrapper>
          </div>
        )}
      </div>

      {/* Decorative corner borders */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20" />
    </motion.div>
  );
}

const StyledWrapper = styled.div`
  .fingerprint-container {
    position: relative;
    width: 140px;
    height: 140px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .fingerprint-container:hover {
    transform: scale(1.05);
  }

  .fingerprint-svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
    opacity: 0.2;
    transition: all 0.5s ease;
  }

  .fingerprint-path {
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 0.2px;
  }

  .is-scanning .fingerprint-svg {
    opacity: 0.9;
    fill: #2563eb;
    filter: drop-shadow(0 0 15px rgba(37, 99, 235, 0.8));
    animation: pulse 1s infinite alternate;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #0088ff;
    box-shadow: 0 0 15px #0088ff;
    opacity: 0;
    pointer-events: none;
  }

  .is-scanning .scan-line {
    opacity: 1;
    animation: scan 2s infinite linear;
  }

  .ripple {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid #2563eb;
    opacity: 0;
    pointer-events: none;
  }

  .is-scanning .ripple {
    animation: ripple-effect 2s infinite ease-out;
  }

  .status {
    position: absolute;
    bottom: -40px;
    width: 100%;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  .is-scanning .status {
    color: #2563eb;
    text-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
  }

  @keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(140px); }
  }

  @keyframes pulse {
    0% { filter: drop-shadow(0 0 10px rgba(37, 99, 235, 0.6)); }
    100% { filter: drop-shadow(0 0 25px rgba(37, 99, 235, 1)); }
  }

  @keyframes ripple-effect {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(2); opacity: 0; }
  }
`;

