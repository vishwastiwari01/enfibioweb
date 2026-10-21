"use client";

import React from "react";
import { CloudShader } from "@/components/ui/cloud-shader";

export default function CloudShaderDemo() {
  return (
    <div className="w-full h-screen relative">
      <CloudShader className="h-full w-full">
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            Atmospheric Cloud Shader
          </h2>
          <p className="mt-2 text-sm sm:text-lg text-white/90 drop-shadow">
            Real-time procedural billow noise & light scattering
          </p>
        </div>
      </CloudShader>
    </div>
  );
}
