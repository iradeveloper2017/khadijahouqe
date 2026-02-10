
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cpu, MousePointer2, ShieldCheck, Box, Hexagon, Component } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=600"
];

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Mechanical Technology Specialist";
  const [index, setIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-transition relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04] dark:opacity-[0.08] pointer-events-none -z-10"></div>
      
      {/* Technical Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 border border-blue-600/10 rounded-full -z-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-zinc-100 dark:border-zinc-900 rounded-full opacity-50 -z-30"></div>

      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Main Editorial Header */}
          <div className="lg:w-2/3 space-y-8 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">Project Alpha // 2024</span>
              </div>
              
              <h1 className="text-6xl md:text-[10rem] font-serif font-black leading-[0.75] tracking-tighter text-zinc-900 dark:text-zinc-50 uppercase relative">
                Khadiza<br />
                <span className="text-outline hover:text-blue-600 transition-colors duration-500">Houqe</span>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block opacity-10">
                   <Component size={120} className="animate-spin-slow" />
                </div>
              </h1>
            </div>

            <div className="max-w-xl space-y-6">
              <div className="inline-block px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg shadow-2xl">
                <p className="text-sm md:text-lg font-mono font-bold">
                  <span className="text-blue-500 mr-2">█</span> {displayText}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
              
              <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                Merging technical precision with architectural dreaming. Specializing in mechanical systems and industrial innovation with a focus on long-term sustainability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-blue-600 text-white px-10 py-5 rounded-full font-black text-sm transition-all hover:pr-14 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
              
              <div className="flex -space-x-3">
                {[Hexagon, Cpu, ShieldCheck].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-900 flex items-center justify-center text-zinc-400">
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Technical Viewport */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center relative">
            {/* The Circle Viewport - Small and Professional */}
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-white dark:border-zinc-900 shadow-2xl overflow-hidden relative z-20">
                {HERO_IMAGES.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt="Mechanical Focus" 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                
                {/* HUD Elements */}
                <div className="absolute inset-0 border-[2px] border-white/20 rounded-full m-4 pointer-events-none z-30"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-1/2 z-30"></div>
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/30 -translate-x-1/2 z-30"></div>
              </div>

              {/* Rotating Outer Ring */}
              <div className="absolute -inset-6 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-full animate-spin-slow -z-10"></div>
              
              {/* Technical Labels */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-[0.2em] shadow-lg z-40">
                Active_Scan
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 p-3 rounded-2xl shadow-xl z-40">
                <Box size={24} className="text-blue-600 animate-bounce" />
              </div>
            </div>

            {/* Spec Data Plate */}
            <div className="mt-12 w-full p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">Specifications</span>
                <span className="text-[10px] font-black text-blue-600 uppercase">Unit: ME-01</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[8px] font-black opacity-40 uppercase tracking-tighter">Department</p>
                  <p className="text-xs font-bold">Mechanical</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black opacity-40 uppercase tracking-tighter">Session</p>
                  <p className="text-xs font-bold">2021 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Corner */}
      <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-20 hidden md:block">
        <p>// CLASSIFIED MECHANICAL SYSTEMS</p>
        <p>// KHADIZA_HOUQE_ARCHIVE_004</p>
        <p>// LAT: 23.4616° N, LON: 91.1850° E</p>
      </div>
    </div>
  );
};

export default Home;
