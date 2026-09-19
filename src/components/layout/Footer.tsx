import Image from 'next/image';
import { Mail, Globe } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.096 0 12 0 12s0 3.904.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.904 24 12 24 12s0-3.904-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#062f32] text-white py-12 md:py-16 pb-8">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          
          <div>
            <a href="#hero" className="inline-flex items-center gap-3 font-black tracking-tight text-white mb-5">
              <div className="relative w-11 h-11 bg-white rounded-[12px] overflow-hidden grid place-items-center p-1.5">
                <Image 
                  src="/logo.jpeg" 
                  alt="Enfibio Technologies Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <span className="leading-none">
                <strong className="block text-[1.1rem]">enfibio</strong>
                <small className="block text-[0.45rem] tracking-[0.24em] mt-1 text-[#9ebdb9]">TECHNOLOGIES</small>
              </span>
            </a>
            <p className="max-w-[310px] text-[#b4d0ce] text-[0.85rem] m-0 mb-6 leading-relaxed">
              Engineering intelligent systems for a more resilient future.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/enfibio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-[#b4d0ce] hover:bg-teal-700 hover:text-white transition-all hover:border-teal-500 hover:-translate-y-1">
                <LinkedinIcon size={15} />
              </a>
              <a href="https://twitter.com/enfibio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-[#b4d0ce] hover:bg-teal-700 hover:text-white transition-all hover:border-teal-500 hover:-translate-y-1">
                <TwitterIcon size={15} />
              </a>
              <a href="https://instagram.com/enfibio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-[#b4d0ce] hover:bg-teal-700 hover:text-white transition-all hover:border-teal-500 hover:-translate-y-1">
                <InstagramIcon size={15} />
              </a>
              <a href="https://youtube.com/@enfibio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-[#b4d0ce] hover:bg-teal-700 hover:text-white transition-all hover:border-teal-500 hover:-translate-y-1">
                <YoutubeIcon size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.95rem] tracking-tight mb-4 text-white font-bold">Explore</h3>
            <div className="grid gap-3">
              <a href="#about" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">About</a>
              <a href="#products" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Products</a>
              <a href="#research" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Research</a>
              <a href="#milestones" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors">Milestones</a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.95rem] tracking-tight mb-4 text-white font-bold">Connect</h3>
            <div className="grid gap-3">
              <a href="#contact" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors flex items-center gap-2">
                <Mail size={13} /> Contact Us
              </a>
              <a href="mailto:enfibiotechnologiespvtltd@gmail.com" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors flex items-center gap-2">
                <Mail size={13} /> enfibiotechnologiespvtltd@gmail.com
              </a>
              <a href="https://www.enfibio.me" target="_blank" rel="noopener" className="text-[#b4d0ce] text-[0.85rem] hover:text-white transition-colors flex items-center gap-2">
                <Globe size={13} /> www.enfibio.me
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-4 text-[#8fb3af] text-[0.75rem]">
          <span>© {new Date().getFullYear()} Enfibio Technologies Private Limited. All rights reserved.</span>
          <span>Built with curiosity, engineering, and iteration.</span>
        </div>
      </div>
    </footer>
  );
}
