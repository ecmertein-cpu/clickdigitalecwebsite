import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about ClikDigitalEC, the leading AI and digital marketing agency for the US market."
      />
      
      <section className="pt-32 pb-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Future of <span className="text-brand-blue">Business Growth.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              We bridge the gap between high-performance marketing and autonomous operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="glass-card p-10">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                ClikDigitalEC was founded on the principle that businesses shouldn't be limited by human capacity. In the modern US market, speed and availability are the ultimate competitive advantages.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We combine elite advertising strategies with cutting-edge AI automation to build self-sustaining growth engines for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Founded', value: '2023' },
                { label: 'Market', value: 'USA' },
                { label: 'AI Agents', value: '500+' },
                { label: 'ROI Avg', value: '3.5x' },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default About;
