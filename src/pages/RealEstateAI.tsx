import { motion } from 'motion/react';
import { Building2, Volume2, Play, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const RealEstateAI = () => {
  return (
    <>
      <SEO 
        title="Real Estate AI Agents" 
        description="Never Miss a Lead Again: 24/7 Virtual Leasing Agents. Automated lead qualification, instant tour bookings, and follow-up."
      />
      
      <section className="pt-32 pb-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-yellow-500/10 text-yellow-500 font-bold text-sm uppercase tracking-widest">
              <Building2 size={18} />
              Real Estate Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Never Miss a Lead Again: <span className="text-brand-blue">24/7 Virtual Leasing Agents.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Automated lead qualification, instant tour bookings, and persistent follow-up to close more deals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="relative aspect-video glass-card overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/realestate/800/450" 
                  alt="Real Estate AI"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 size={18} className="text-brand-blue" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Audio Booking Sample</span>
                </div>
                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 gap-4">
                  <Play size={16} className="text-brand-blue fill-brand-blue" />
                  <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-brand-blue" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">0:45</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Instant <span className="text-brand-blue">Qualification.</span></h2>
              <div className="space-y-6 mb-10">
                {[
                  'Automated Lead Qualification',
                  'Instant Virtual Tour Bookings',
                  'Persistent Multi-channel Follow-up',
                  'Seamless CRM Integration'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500" size={20} />
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                Automate My Listings <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default RealEstateAI;
