'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Battery,
  Sliders,
  ChevronRight,
  Zap,
  Bluetooth,
  Wifi,
  Music,
  LucideIcon,
} from 'lucide-react';

export type ProductId = 'left' | 'right';

export interface FeatureMetric {
  label: string;
  value: number; // 0-100
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
  stats: {
    connectionStatus: string;
    batteryLevel: number;
  };
  features: FeatureMetric[];
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: 'left',
    label: 'Platform',
    title: 'Astra Carrier',
    description: 'The primary launch and recovery vehicle. Designed for high-speed insertion and long-loiter observation missions in contested airspace.',
    image: '/astra_carrier.png',
    colors: {
      gradient: 'from-blue-600/40 to-indigo-900/40',
      glow: 'bg-blue-500',
      ring: 'border-l-blue-500/50',
    },
    stats: { connectionStatus: 'Connected', batteryLevel: 82 },
    features: [
      { label: 'Stealth', value: 94, icon: Zap },
      { label: 'Payload', value: 85, icon: Wifi },
    ],
  },
  right: {
    id: 'right',
    label: 'Payload',
    title: 'Astra Drone',
    description: 'Fully autonomous kinetic interceptor. Capable of multi-agent swarm operations with decentralized AI coordination.',
    image: '/astra_drone.png',
    colors: {
      gradient: 'from-emerald-600/40 to-teal-900/40',
      glow: 'bg-emerald-500',
      ring: 'border-r-emerald-500/50',
    },
    stats: { connectionStatus: 'Connected', batteryLevel: 98 },
    features: [
      { label: 'Agility', value: 98, icon: Bluetooth },
      { label: 'Lethality', value: 92, icon: Music },
    ],
  },
};

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10 },
  },
  image: (isLeft: boolean) => ({
    initial: { opacity: 0, scale: 1.2, rotate: isLeft ? -10 : 10, x: isLeft ? -40 : 40 },
    animate: { opacity: 1, scale: 1, rotate: 0, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.25 } },
  }),
};

const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
    <motion.div
      animate={{
        background: isLeft
          ? 'radial-gradient(circle at 0% 50%, rgba(37, 99, 235, 0.1), transparent 60%)'
          : 'radial-gradient(circle at 100% 50%, rgba(16, 185, 129, 0.1), transparent 60%)',
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
  </div>
);

const ProductVisual = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => (
  <motion.div layout="position" className="relative group shrink-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-10%] rounded-full border border-dashed border-white/5 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-30`}
    />

    <div className="relative h-64 w-64 md:h-[400px] md:w-[400px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-md">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={data.title}
            variants={ANIMATIONS.image(isLeft)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[120%] h-[120%] object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-90"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    <motion.div layout="position" className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--text-muted)] bg-[var(--surface-2)] px-4 py-1.5 rounded-full border border-white/5">
        <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.connectionStatus}
      </div>
    </motion.div>
  </motion.div>
);

const ProductDetails = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => {
  const alignClass = isLeft ? 'items-start text-left' : 'items-end text-right';
  const flexDirClass = isLeft ? 'flex-row' : 'flex-row-reverse';
  const barColorClass = isLeft ? 'left-0 bg-blue-500' : 'right-0 bg-emerald-500';

  return (
    <motion.div variants={ANIMATIONS.container} initial="hidden" animate="visible" exit="exit" className={`flex flex-col ${alignClass}`}>
      <motion.h2 variants={ANIMATIONS.item} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
        {data.label} System
      </motion.h2>
      <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display text-white">
        {data.title}
      </motion.h1>
      <motion.p variants={ANIMATIONS.item} className={`text-[var(--text-dim)] mb-8 max-w-sm leading-relaxed text-sm ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
        {data.description}
      </motion.p>

      <motion.div variants={ANIMATIONS.item} className="w-full space-y-5 bg-white/[0.02] p-6 rounded-2xl border border-white/5 backdrop-blur-md">
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className={`flex items-center justify-between mb-2 text-xs ${flexDirClass}`}>
              <div className="flex items-center gap-2 text-white/70">
                <feature.icon size={14} /> <span>{feature.label}</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{feature.value}%</span>
            </div>
            <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                className={`absolute top-0 bottom-0 ${barColorClass} opacity-80`}
              />
            </div>
          </div>
        ))}

        <div className={`pt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <button type="button" className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] hover:text-white transition-colors group">
            <Sliders size={12} /> View Specs
            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div variants={ANIMATIONS.item} className={`mt-6 flex items-center gap-2 text-[var(--text-muted)] ${flexDirClass}`}>
        <Battery size={14} />
        <span className="text-xs font-medium tracking-wide">{data.stats.batteryLevel}% Readiness</span>
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({ activeId, onToggle }: { activeId: ProductId; onToggle: (id: ProductId) => void }) => {
  const options = Object.values(PRODUCT_DATA).map(p => ({ id: p.id, label: p.label }));

  return (
    <div className="absolute bottom-8 inset-x-0 flex justify-center z-50">
      <motion.div layout className="flex items-center gap-1 p-1 rounded-full bg-[var(--surface-2)] border border-white/10 shadow-2xl">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-28 h-10 rounded-full flex items-center justify-center text-xs font-semibold uppercase tracking-wider focus:outline-none"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="showcase-active-tab"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? 'text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-dim)]'}`}>
              {opt.label}
            </span>
            {activeId === opt.id && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 h-[2px] w-8 rounded-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default function EarbudShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>('left');
  
  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === 'left';

  return (
    <div className="relative w-full rounded-3xl bg-[var(--surface)] text-[var(--text)] overflow-hidden flex flex-col items-center justify-center py-20 min-h-[800px] border border-white/5 flex-shrink-0">
      <BackgroundGradient isLeft={isLeft} />

      <div className="relative z-10 w-full px-8 flex flex-col justify-center max-w-6xl mx-auto flex-1">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 w-full ${
            isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <ProductVisual data={currentData} isLeft={isLeft} />
          
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProductDetails key={activeSide} data={currentData} isLeft={isLeft} />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <Switcher activeId={activeSide} onToggle={setActiveSide} />
    </div>
  );
}
