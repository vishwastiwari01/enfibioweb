// Enfibio Technologies — Type Definitions

export type Category = 'defense' | 'intel' | 'hardware' | 'systems';
export type LogType = 'ok' | 'warn' | 'err';
export type TimelineStatus = 'completed' | 'in-progress' | 'pending';

export interface ProjectSpec {
  [key: string]: string;
}

export interface Project {
  id: string;
  cat: Category;
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  desc: string;
  specs: ProjectSpec;
  tags: string[];
}

export interface Founder {
  initials: string;
  name: string;
  role: string;
  layer: string;
  domain: string;
  ethos: string;
  specialty: string;
  color: string;
  avatar?: string;
  linkedin?: string;
}

export interface TelemetryEntry {
  type: LogType;
  node: string;
  msg: string;
}

export interface TickerItem {
  cls: 'up' | 'warn' | 'err';
  text: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: TimelineStatus;
  energy: number;
}

export interface Stat {
  num: string;
  label: string;
}

export interface ArchLayer {
  num: string;
  tag: string;
  title: string;
  accentColor: string;
  owner: string;
  desc: string;
  caps: string[];
}
