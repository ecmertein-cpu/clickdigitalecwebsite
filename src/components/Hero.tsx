import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>Next-Gen AI Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 gradient-text">
            Where <span className="text-brand-blue">High-Octane Marketing</span> Meets Autonomous AI.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            We generate high-quality leads through precision digital marketing and close them automatically using custom AI Voice & Chat Agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-sm text-slate-500">Lead Conversion</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-sm text-slate-500">Autonomous Ops</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">3.5x</span>
              <span className="text-sm text-slate-500">Average ROI</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-8 aspect-square flex flex-col justify-center items-center text-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-24 h-24 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 relative">
              <Zap size={48} className="text-brand-blue animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">AI Agent Active</h3>
            <div className="space-y-3 w-full">
              {[
                { label: 'Analyzing Lead Intent', status: 'Complete', icon: <ShieldCheck size={14} className="text-green-500" /> },
                { label: 'Voice Synthesis Ready', status: 'Active', icon: <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" /> },
                { label: 'Booking Appointment', status: 'Pending', icon: <div className="w-2 h-2 bg-slate-600 rounded-full" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-sm text-slate-300">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{item.status}</span>
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
