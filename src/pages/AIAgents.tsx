import { motion } from 'motion/react';
import { Bot, Phone, MessageSquare, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const AIAgents = () => {
  return (
    <>
      <SEO 
        title="AI Agent Systems" 
        description="Autonomous Sales & Support Agents. We build intelligent voice and chat systems that work 24/7 to scale your operations."
      />
      
      <section className="pt-32 pb-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Autonomous Sales & <span className="text-brand-blue">Support Agents.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Intelligent systems that handle your most repetitive tasks with human-like precision, 24/7.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: 'Voice AI', icon: <Phone className="text-brand-blue" />, desc: 'Human-like voice agents for inbound and outbound calls.' },
              { title: 'Chat Automation', icon: <MessageSquare className="text-brand-blue" />, desc: 'Qualify leads and answer support tickets instantly.' },
              { title: 'Smart Booking', icon: <Calendar className="text-brand-blue" />, desc: 'Automated appointment scheduling synced with your CRM.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square glass-card flex items-center justify-center">
              <Bot size={120} className="text-brand-blue animate-pulse" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Scale Without <span className="text-brand-blue">Limits.</span></h2>
              <div className="space-y-6">
                {[
                  '24/7 Availability with Zero Downtime',
                  'Multi-lingual Support (20+ Languages)',
                  'Seamless CRM & API Integrations',
                  'Real-time Analytics & Call Transcripts'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-blue" size={20} />
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary mt-10 flex items-center gap-2"
              >
                Request AI Demo <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default AIAgents;
