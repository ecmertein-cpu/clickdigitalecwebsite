import { motion } from 'motion/react';
import { Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const DentistAI = () => {
  return (
    <>
      <SEO 
        title="Dental AI Agents" 
        description="Fill Your Calendar Without Touching the Phone. Automated appointment reminders, patient rescheduling, and emergency call handling."
      />
      
      <section className="pt-32 pb-24 bg-brand-dark-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-teal-500/10 text-teal-500 font-bold text-sm uppercase tracking-widest">
              <Stethoscope size={18} />
              Dental Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fill Your Calendar Without <span className="text-brand-blue">Touching the Phone.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Automated appointment reminders, patient rescheduling, and emergency call handling for modern dental practices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Patient-First <span className="text-brand-blue">Automation.</span></h2>
              <div className="space-y-6 mb-10">
                {[
                  'Automated Appointment Reminders',
                  'Smart Patient Rescheduling',
                  '24/7 Emergency Call Handling',
                  'Insurance Verification Support'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500" size={20} />
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                Request Dental AI Demo <ArrowRight size={20} />
              </button>
            </motion.div>
            
            <div className="relative aspect-square glass-card flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-teal-500/5" />
              <Stethoscope size={160} className="text-teal-500/20 absolute -bottom-10 -right-10 rotate-12" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope size={40} className="text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Medical-Grade AI</h3>
                <p className="text-slate-400 text-sm">HIPAA-compliant communication systems designed for patient privacy and trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default DentistAI;
