import type { TelemetryEntry, TickerItem } from '@/types';

export const TELEMETRY: TelemetryEntry[] = [
  { type: 'ok',   node: 'ASTRA-04',    msg: 'Signal stable · Formation delta active' },
  { type: 'ok',   node: 'SIGINT-01',   msg: 'Spectrum sweep 2.4–5.8GHz complete' },
  { type: 'warn', node: 'EMITTER-02',  msg: 'Weak contact · CEP 18m · Refining' },
  { type: 'ok',   node: 'MEDGPT-SRV',  msg: 'Clinical DB sync · 99.7% uptime' },
  { type: 'ok',   node: 'OPENCLAW-A1', msg: 'Task complete · Memory persisted' },
  { type: 'warn', node: 'HONEYPOT-03', msg: 'Probe detected · Profiling initiated' },
  { type: 'ok',   node: 'CHIP-DEV',    msg: 'Power draw 4.2W · Within envelope' },
  { type: 'ok',   node: 'AIROS-01',    msg: 'Sensor fusion nominal · 6DOF locked' },
  { type: 'err',  node: 'C2-NODE-07',  msg: 'Link degraded · Rerouting via mesh' },
  { type: 'ok',   node: 'ISR-FUSE',    msg: '3 sources merged · Confidence 0.91' },
  { type: 'ok',   node: 'EDGE-NODE',   msg: 'GPU load 45% · Latency 12ms' },
  { type: 'warn', node: 'ASTRA-07',    msg: 'Formation drift 0.4m · Correcting' },
  { type: 'ok',   node: 'TWINSPACE',   msg: 'Sim epoch 2847 complete · Loss 0.003' },
  { type: 'ok',   node: 'HELI-GLIDE',  msg: 'Autorotation model calibrated' },
  { type: 'err',  node: 'FREEZER-02',  msg: 'Temp spike +1.2°C · Compensating' },
];

export const TICKER_ITEMS: TickerItem[] = [
  { cls: 'up',   text: 'ASTRA·SWARM NOMINAL ▲' },
  { cls: 'warn', text: 'SIGINT·CONTACT WEAK ⚠' },
  { cls: 'up',   text: 'MEDGPT·UPTIME 99.7% ▲' },
  { cls: 'up',   text: 'EDGE-NODE·12ms LATENCY ▲' },
  { cls: 'err',  text: 'C2-LINK·REROUTING ▼' },
  { cls: 'up',   text: 'CHIP-DEV·4.2W ▲' },
  { cls: 'up',   text: 'AIROS·6DOF LOCKED ▲' },
  { cls: 'warn', text: 'HONEYPOT·ACTIVE PROBE ◈' },
  { cls: 'up',   text: 'TWINSPACE·EPOCH 2847 ▲' },
  { cls: 'up',   text: 'ISR-FUSE·CONFIDENCE 0.91 ▲' },
  { cls: 'warn', text: 'FREEZER-02·TEMP SPIKE ⚠' },
  { cls: 'up',   text: 'OPENCLAW-A1·TASK DONE ▲' },
];
