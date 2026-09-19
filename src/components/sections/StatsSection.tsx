export default function StatsSection() {
  return (
    <section 
      className="bg-teal-950 text-white py-6"
      aria-label="Prototype information"
    >
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        
        <div className="border-l border-white/20 pl-3 lg:pl-5">
          <strong className="block text-2xl lg:text-3xl font-bold tracking-tight mb-1">~3°C</strong>
          <span className="text-[#b4d0ce] text-xs">Observed prototype temperature</span>
        </div>
        
        <div className="border-l border-white/20 pl-3 lg:pl-5">
          <strong className="block text-2xl lg:text-3xl font-bold tracking-tight mb-1">5 L</strong>
          <span className="text-[#b4d0ce] text-xs">Approximate prototype capacity</span>
        </div>
        
        <div className="border-l border-white/20 pl-3 lg:pl-5">
          <strong className="block text-2xl lg:text-3xl font-bold tracking-tight mb-1">Peltier</strong>
          <span className="text-[#b4d0ce] text-xs">Cooling approach</span>
        </div>
        
        <div className="border-l border-white/20 pl-3 lg:pl-5">
          <strong className="block text-2xl lg:text-3xl font-bold tracking-tight mb-1">R&D</strong>
          <span className="text-[#b4d0ce] text-xs">Prototype-stage development</span>
        </div>
        
      </div>
    </section>
  );
}
