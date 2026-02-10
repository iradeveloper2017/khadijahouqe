
import React from 'react';
import { Target, Quote, Sparkles, PenTool, Users, ShieldCheck, Zap, Heart } from 'lucide-react';
import { FAMILY_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="page-transition pb-24 relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-[0.03] dark:opacity-[0.07] pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.2" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Hero Section: The Personal Manifesto */}
      <section className="pt-20 pb-32">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              <span className="w-12 h-px bg-blue-600"></span>
              <span>IDENTITY // v2.5</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-black leading-[0.85] tracking-tighter uppercase">
              Student. <br />
              <span className="text-blue-600 italic">Dreamer.</span>
            </h1>

            <div className="pt-12 space-y-12">
              <p className="text-2xl md:text-4xl font-medium leading-tight text-zinc-900 dark:text-zinc-100 max-w-3xl">
                "I am Khadiza Houqe—a student of Mechanical Technology and a lifelong dreamer who believes in the precision of purpose."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  I believe that with proper planning and profound patience, it is possible to manage any complex machine—or indeed life itself—beautifully. Engineering to me is more than just gears; it is the art of organizing chaos into harmony.
                </p>
                <p>
                  Moving forward from an ordinary background, my aim is to achieve something extraordinary. I am currently committed to honing my skills in this exciting world of science, turning every challenge into a blueprint for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: The Mechanical Philosophy */}
      <section className="py-24 border-y border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">The Vision</h3>
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed font-medium">
              To establish myself as a pioneering Mechanical Specialist, bringing industrial innovation to life through technical excellence.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">The Dream</h3>
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed font-medium">
              To transcend boundaries and prove that with dedication, one can create an extraordinary legacy regardless of where they start.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <PenTool size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">The Belief</h3>
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed font-medium">
              Discipline, patience, and meticulous planning are the three gears that drive the engine of sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Family Section: The Human Support System */}
      <section className="py-32 space-y-24">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-4 text-blue-600">
            <Heart size={20} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">The Core Network</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black leading-none">Human <br/><span className="text-blue-600">Infrastructure</span></h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-xl">
            A family of seven—seven vital pillars that provide the emotional and structural integrity required for my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAMILY_DATA.map((member) => (
            <div 
              key={member.id} 
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 group ${
                member.role === 'Khadiza' 
                ? 'bg-blue-600 text-white border-blue-500 shadow-2xl shadow-blue-600/20' 
                : 'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${
                  member.role === 'Khadiza' ? 'bg-white text-blue-600' : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-400 group-hover:text-blue-600'
                }`}>
                  {member.id < 10 ? `0${member.id}` : member.id}
                </div>
                {member.role === 'Khadiza' && (
                  <div className="px-3 py-1 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-widest">
                    Pillar #06
                  </div>
                )}
              </div>
              <h4 className="text-2xl font-serif font-black mb-3">{member.role}</h4>
              <p className={`font-medium leading-relaxed ${
                member.role === 'Khadiza' ? 'text-white/80' : 'text-zinc-500 dark:text-zinc-400'
              }`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Statement */}
      <section className="relative p-12 md:p-24 rounded-[4rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid-large" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-large)" />
          </svg>
        </div>
        <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
          <Quote size={64} className="mx-auto text-blue-600 opacity-50" />
          <h3 className="text-3xl md:text-5xl font-serif font-black leading-tight italic">
            "An ordinary background is simply the starting point for an extraordinary destination."
          </h3>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-1 bg-blue-600"></div>
            <p className="text-sm font-black uppercase tracking-[0.4em] opacity-50">Architect of Progress</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
