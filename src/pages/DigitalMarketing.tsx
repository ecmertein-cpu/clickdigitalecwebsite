import { motion } from 'motion/react';
import { Target, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const DigitalMarketing = () => {
  return (
    <>
      <SEO 
        title="Digital Marketing Services" 
        description="US Market Ad Management & Lead Generation. We optimize your Meta, Google, and LinkedIn ads for maximum ROI."
      />
      
      <section className="pt-32 pb-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              US Market Ad Management & <span className="text-brand-blue">Lead Generation.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Precision-targeted advertising that drives high-quality leads directly into your sales pipeline.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: 'Meta Ads', icon: <Target className="text-brand-blue" />, desc: 'Hyper-targeted Facebook and Instagram campaigns.' },
              { title: 'Google Search', icon: <BarChart3 className="text-brand-blue" />, desc: 'Capture high-intent traffic when they search for you.' },
              { title: 'LinkedIn Ads', icon: <Zap className="text-brand-blue" />, desc: 'B2B lead generation for professional services.' },
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Our Strategy for <span className="text-brand-blue">Growth.</span></h2>
              <div className="space-y-6">
                {[
                  'Deep Market Research & Persona Mapping',
                  'High-Converting Funnel Architecture',
                  'A/B Testing & Creative Optimization',
                  'Real-time ROI Tracking & Attribution'
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
                Get Started <ArrowRight size={20} />
              </button>
            </motion.div>
            <div className="relative aspect-video glass-card overflow-hidden">
              <img 
                src="https://picsum.photos/seed/marketing/800/450" 
                alt="Marketing Strategy"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default DigitalMarketing;
