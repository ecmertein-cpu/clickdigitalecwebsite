import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket, AlertTriangle } from 'lucide-react';

const EngagementManager = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Don't Forget Us Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        currentTitle = document.title;
        let isToggled = false;
        interval = setInterval(() => {
          document.title = isToggled ? currentTitle : "Don't forget us! 🚀";
          isToggled = !isToggled;
        }, 1000);
      } else {
        clearInterval(interval);
        document.title = currentTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  // Exit Intent Logic
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('exit_popup_shown')) {
        setShowExitPopup(true);
        localStorage.setItem('exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {showExitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-lg w-full bg-slate-900 border border-brand-blue/30 rounded-[32px] p-8 md:p-12 shadow-2xl shadow-brand-blue/20"
          >
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue mb-6">
                <Rocket size={32} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Wait! Don't Fall Behind 🚀</h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Your competitors are already optimizing their digital workflow. Don't let them stay ahead.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setShowExitPopup(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Your Free Strategy Call
                </button>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
                >
                  No thanks, I'll take my chances
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-orange-500/80 font-medium uppercase tracking-wider">
                <AlertTriangle size={14} />
                Limited Slots Available for March
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EngagementManager;
