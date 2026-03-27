'use client';

import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
];

const ExpandOnHover = () => {
  const [expandedImage, setExpandedImage] = useState(1);

  const getImageWidth = (index: number) =>
    index === expandedImage ? "24rem" : "5rem";

  return (
    <div className="w-full flex items-center justify-center py-12 transition-all duration-300 ease-in-out">
      <div className="w-full h-full overflow-hidden rounded-3xl">
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl px-5">
            <div className="flex w-full items-center justify-center gap-2">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out border border-white/10"
                  style={{
                    width: getImageWidth(idx),
                    height: "360px",
                  }}
                  onMouseEnter={() => setExpandedImage(idx)}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={`Team Member ${idx + 1}`}
                  />
                  {/* Founder overlay Info */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent ${expandedImage === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white font-bold font-display text-xl">Founder 0{idx + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandOnHover;
