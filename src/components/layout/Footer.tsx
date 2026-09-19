export default function Footer() {
  return (
    <footer className="bg-[#062f32] text-white py-[45px] pb-[25px]">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-[35px] border-b border-white/10">
          
          <div>
            <a href="#hero" className="inline-flex items-center gap-2.5 font-black tracking-tight text-white mb-4">
              <span className="w-[35px] h-[35px] border-2 border-white rounded-[12px_12px_12px_3px] grid place-items-center text-[1.1rem] -rotate-12">
                E
              </span>
              <span className="leading-none">
                <strong className="block text-[1.05rem]">enfibio</strong>
                <small className="block text-[0.43rem] tracking-[0.24em] mt-1 text-[#9ebdb9]">TECHNOLOGIES</small>
              </span>
            </a>
            <p className="max-w-[310px] text-[#b4d0ce] text-[0.85rem] m-0">
              Engineering intelligent systems for a more resilient future.
            </p>
          </div>

          <div>
            <h3 className="text-[0.9rem] tracking-normal mb-3 text-white font-bold">Explore</h3>
            <div className="grid gap-2">
              <a href="#about" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">About</a>
              <a href="#products" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Products</a>
              <a href="#research" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Research</a>
              <a href="#milestones" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Milestones</a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.9rem] tracking-normal mb-3 text-white font-bold">Connect</h3>
            <div className="grid gap-2">
              <a href="#contact" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Contact</a>
              <a href="mailto:enfibiotechnologiespvtltd@gmail.com" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Email us</a>
              <a href="https://www.enfibio.me" target="_blank" rel="noopener" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Website ↗</a>
            </div>
          </div>

        </div>

        <div className="pt-5 flex flex-col md:flex-row justify-between gap-4 text-[#8fb3af] text-[0.72rem]">
          <span>© {new Date().getFullYear()} Enfibio Technologies Private Limited. All rights reserved.</span>
          <span>Built with curiosity, engineering, and iteration.</span>
        </div>
      </div>
    </footer>
  );
}
