
import React from 'react';
// Added CheckCircle2 to the imports
import { Send, Mail, MapPin, ExternalLink, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('@khadiza_houqe');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-transition max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Available for work</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-[0.9]">
              Let's build something <span className="text-blue-600">Great</span> together.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
              Whether it's a technical query, a potential collaboration, or just a friendly introduction, I'm just a message away.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</p>
                <p className="text-lg font-bold">khadiza.houqe@example.com</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <Send size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Telegram ID</p>
                <p className="text-lg font-bold">@khadiza_houqe</p>
              </div>
            </div>

            <div className="group flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Located in</p>
                <p className="text-lg font-bold">Comilla, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Telegram Card */}
        <div className="lg:col-span-7">
          <div className="p-1 rounded-[3.5rem] bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
            <div className="p-10 md:p-14 rounded-[3.2rem] bg-white dark:bg-zinc-950 flex flex-col items-center text-center space-y-10">
              <div className="relative">
                <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle size={64} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full border-4 border-white dark:border-zinc-950 flex items-center justify-center text-white">
                  <CheckCircle2 size={16} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl font-serif font-black tracking-tight">Direct Message</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-sm mx-auto">
                  Telegram is my primary communication channel. I usually respond within a few hours.
                </p>
              </div>

              <div className="w-full space-y-4">
                <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="font-bold text-lg">@khadiza_houqe</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors relative group"
                  >
                    <Copy size={20} className={copied ? 'text-emerald-500' : 'text-zinc-400'} />
                    {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] py-1 px-2 rounded-md font-bold uppercase">Copied!</span>}
                  </button>
                </div>

                <a 
                  href="https://t.me/khadiza_houqe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-4 w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Message on Telegram</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
