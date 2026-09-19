'use client';

import { Thermometer, Box, Briefcase, Sprout } from 'lucide-react';

const METRICS = [
  {
    icon: Thermometer,
    value: '3°C',
    label: 'Achieved in prototype',
  },
  {
    icon: Box,
    value: '5 Liters',
    label: 'Prototype capacity',
  },
  {
    icon: Briefcase,
    value: 'Portable',
    label: 'Field-ready design',
  },
  {
    icon: Sprout,
    value: 'Multi-sector',
    label: 'Agriculture · Dairy · Medicines · Rural Supply',
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #DDE8E5',
        borderBottom: '1px solid #DDE8E5',
        padding: '36px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Heading + statement (5 cols) */}
          <div className="lg:col-span-4 flex flex-col pr-4 lg:border-r lg:border-[#DDE8E5]">
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                color: '#102F3D',
                letterSpacing: '-0.01em',
                lineHeight: 1.25,
                marginBottom: '6px',
              }}
            >
              FROM LAB IDEAS TO
              <br />
              LASTING IMPACT
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#647781',
                lineHeight: 1.55,
              }}
            >
              We work across disciplines to solve real-world challenges through technology, research and design.
            </p>
          </div>

          {/* Right: 4 Metrics (7 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {METRICS.map(({ icon: Icon, value, label }) => (
              <div key={value} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{ width: 32, height: 32, background: '#F0F6F4', color: '#075E5A' }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '17px',
                      color: '#102F3D',
                    }}
                  >
                    {value}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11.5px',
                    color: '#647781',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
