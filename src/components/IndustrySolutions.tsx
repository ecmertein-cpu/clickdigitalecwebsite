import { motion } from 'motion/react';
import { Utensils, Building2, Stethoscope, Play, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';

const IndustrySolutions = () => {
  const industries = [
    {
      id: 'restaurants',
      title: 'Restaurant AI Agent',
      accent: '#f97316', // Orange
      tagline: 'Staff Shortage vs. AI Efficiency.',
      description: 'Never miss an order again. Our AI handles 24/7 phone orders, reservations, and complex requests with human-like precision.',
      icon: <Utensils size={32} />,
      features: ['24/7 Phone Ordering', 'Automated Reservations', 'Staff Shortage Solution', 'Order Confirmation Logic'],
      samples: [
        { label: 'Noisy Kitchen Environment', duration: '0:45' },
        { label: 'Foreign Language Handling', duration: '1:12' },
        { label: 'Complex Allergy Request', duration: '0:58' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Real Estate AI Agent',
      accent: '#eab308', // Gold
      tagline: '24/7 Lead Qualification & Instant Bookings.',
      description: 'Qualify every lead instantly. Our AI asks the right questions, integrates with virtual tours, and books property viewings directly.',
      icon: <Building2 size={32} />,
      features: ['Instant Lead Response', 'Virtual Tour Integration', 'Viewing Scheduling', 'CRM Sync'],
      samples: [
        { label: 'Initial Inquiry Call', duration: '2:15' },
        { label: 'Qualification Script', duration: '1:45' },
        { label: 'Booking Confirmation', duration: '0:30' }
      ]
    },
    {
      id: 'dental',
      title: 'Dental AI Agent',
      accent: '#14b8a6', // Teal
      tagline: 'Patient Follow-up & Automated Scheduling.',
      description: 'Clean, medical-tech focused automation. Automate appointment reminders and reactivate dormant patients without burdening your staff.',
      icon: <Stethoscope size={32} />,
      features: ['Appointment Reminders', 'Patient Reactivation', 'Insurance Verification', 'Emergency Triaging'],
      samples: [
        { label: 'Reminder Call', duration: '0:40' },
        { label: 'Reactivation Outreach', duration: '1:20' },
        { label: 'Emergency Inquiry', duration: '1:10' }
      ]
    }
  ];

  return (
    <section id="industry-solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Industry <span className="text-brand-blue">Solutions</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tailored AI systems designed to solve the specific challenges of your industry.
          </p>
        </div>

        <div className="space-y-32">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              id={industry.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 font-bold text-sm uppercase tracking-widest"
                  style={{ backgroundColor: `${industry.accent}20`, color: industry.accent }}
                >
                  {industry.icon}
                  {industry.title}
                </div>
                
                <h3 className="text-4xl font-bold mb-6 text-white leading-tight">{industry.tagline}</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{industry.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {industry.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 size={18} style={{ color: industry.accent }} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary flex items-center gap-2"
                >
                  Get Started with {industry.title.split(' ')[0]} <ArrowRight size={18} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                {/* Video Placeholder */}
                <div className="relative aspect-video glass-card overflow-hidden group cursor-pointer">
                  <img 
                    src={`https://picsum.photos/seed/${industry.id}/800/450`} 
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Video Introduction</span>
                    <span className="text-xs font-bold text-white/60">02:45</span>
                  </div>
                </div>

                {/* Audio Samples */}
                <div className="glass-card p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 size={18} className="text-brand-blue" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Live Call Samples</span>
                  </div>
                  {industry.samples.map((sample, sIndex) => (
                    <div key={sIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                          <Play size={12} className="text-brand-blue group-hover:text-white" />
                        </div>
                        <span className="text-sm text-slate-300">{sample.label}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{sample.duration}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
