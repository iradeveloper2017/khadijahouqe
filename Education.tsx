
import React from 'react';
// Added Link import from react-router-dom
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Book } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="page-transition space-y-20 max-w-5xl mx-auto py-10">
      <div className="relative text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tight">Education</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">The foundation of my mechanical journey.</p>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/5 blur-[80px] -z-10 rounded-full"></div>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
        
        <div className="relative group">
          <div className="md:flex items-center justify-between gap-12 mb-20">
            {/* Institution Details */}
            <div className="md:w-[48%] mb-8 md:mb-0">
              <div className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none hover:translate-y-[-5px] transition-transform">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Current Status</span>
                    <div className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-tighter">
                      {EDUCATION_DATA.status}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-black mb-6 leading-tight">
                  {EDUCATION_DATA.institution}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <Book className="text-blue-600" size={20} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Department</p>
                      <p className="font-bold">{EDUCATION_DATA.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <Calendar className="text-blue-600" size={20} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Academic Term</p>
                      <p className="font-bold">{EDUCATION_DATA.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <MapPin className="text-blue-600" size={20} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                      <p className="font-bold">Comilla, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Node */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 ring-8 ring-blue-600/10 z-10"></div>

            {/* Context Content */}
            <div className="md:w-[48%] pl-4 md:pl-0">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  <CheckCircle2 size={16} />
                  <span>Technical Excellence</span>
                </div>
                <h4 className="text-3xl font-serif font-black">Mechanical Engineering Specialist</h4>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  My studies at Comilla Polytechnic Institute are focused on providing a comprehensive 
                  understanding of machine design, thermal engineering, and production processes.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Engineering Mechanics', desc: 'Analyzing force and motion in systems.' },
                    { label: 'Thermodynamics', desc: 'Understanding energy transfer and heat.' },
                    { label: 'Workshop Practice', desc: 'Hands-on experience with industrial tools.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-bold text-zinc-900 dark:text-zinc-100">{item.label}</h5>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 rounded-[3rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h3 className="text-4xl font-serif font-black">Ready for new challenges?</h3>
            <p className="text-zinc-400 dark:text-zinc-500 text-lg font-medium">I'm continuously looking for internships and collaborative opportunities.</p>
          </div>
          <Link 
            to="/contact" 
            className="whitespace-nowrap px-10 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
