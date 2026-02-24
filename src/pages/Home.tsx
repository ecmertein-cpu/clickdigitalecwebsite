import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Bot, Megaphone, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Automate your growth with custom AI Agents. We build intelligent autonomous systems that scale your marketing, sales, and operations 24/7."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
              Automate Your Growth with <span className="text-brand-blue">Custom AI Agents.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              We build intelligent autonomous systems that scale your marketing, sales, and operations 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <Link 
                to="/services/ai-agents"
                className="btn-secondary text-lg px-8 py-4 text-center"
              >
                Explore AI Agents
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-8 aspect-square flex flex-col justify-center items-center text-center">
              <Bot size={80} className="text-brand-blue mb-6 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">AI Agent Active</h3>
              <p className="text-slate-400 text-sm">Processing leads in real-time...</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Sections */}
      <section className="py-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Digital Marketing Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 hover:border-brand-blue/30"
            >
              <Megaphone size={40} className="text-brand-blue mb-6" />
              <h3 className="text-3xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-slate-400 mb-8">
                High-performance ad management and lead generation strategies tailored for the US market. We don't just buy clicks; we acquire customers.
              </p>
              <Link to="/services/digital-marketing" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* AI Agent Systems Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 hover:border-brand-blue/30"
            >
              <Bot size={40} className="text-brand-blue mb-6" />
              <h3 className="text-3xl font-bold mb-4">AI Agent Systems</h3>
              <p className="text-slate-400 mb-8">
                Autonomous voice and chat agents that handle sales, support, and operations. 24/7 availability with human-like intelligence.
              </p>
              <Link to="/services/ai-agents" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Home;
