import { motion } from 'motion/react';
import { MousePointer2, Sparkles, Star } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Blobs */}
      <div className="blob-sky top-20 -left-10 animate-pulse" />
      <div className="blob-yellow bottom-20 -right-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span>Ages 7—16 • Online Classes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Turn Your Child Into a <span className="decoration-wavy-yellow text-brand-sky">Young Creator</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              Fun online coding classes where children learn by building real projects. 
              From basic logic to advanced app development.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#register" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Book Free Trial
                </Button>
              </a>
              <a href="https://wa.me/20123456789" target="_blank" className="w-full sm:w-auto">
                <Button variant="whatsapp" size="lg" className="w-full gap-2">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 px-4 border-l border-slate-200">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-200"></div>
              </div>
              <div>
                <div className="flex items-center text-brand-yellow">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Joined by 2,000+ kids</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-100 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1593526492327-b071f3d5333e?auto=format&fit=crop&q=80&w=1200" 
                alt="Kid Coding" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl z-20 flex items-center gap-3"
            >
              <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                <MousePointer2 size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">New Achievement!</p>
                <p className="text-[10px] text-slate-500">First Python script</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl z-20 flex items-center gap-3"
            >
              <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Learn by creation</p>
                <p className="text-[10px] text-slate-500">Project-based learning</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
