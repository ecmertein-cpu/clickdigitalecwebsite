import { motion } from 'motion/react';
import { Megaphone, Bot, BarChart3, Target, MessageSquare, Phone, Calendar, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'High-performance ad management and funnel optimization designed for the US market.',
      icon: <Megaphone className="text-brand-blue" size={32} />,
      features: [
        { title: 'Elite Ad Management', desc: 'Meta, Google, and LinkedIn ads optimized for high-intent leads.', icon: <Target size={20} /> },
        { title: 'Funnel Optimization', desc: 'Conversion-focused landing pages that turn clicks into customers.', icon: <BarChart3 size={20} /> },
        { title: 'Lead Generation', desc: 'Scalable systems to keep your sales pipeline consistently full.', icon: <Zap size={20} /> },
      ],
      color: 'blue'
    },
    {
      id: 'ai-agents',
      title: 'AI Agent Systems',
      description: 'Autonomous voice and chat systems that work 24/7 to qualify and close your leads.',
      icon: <Bot className="text-brand-blue" size={32} />,
      features: [
        { title: 'Autonomous Voice Agents', desc: 'Human-like AI that handles inbound and outbound calls.', icon: <Phone size={20} /> },
        { title: 'Smart Chat Systems', desc: 'Multi-channel chat agents for instant lead qualification.', icon: <MessageSquare size={20} /> },
        { title: 'Automated Booking', desc: 'Seamlessly sync with your calendar to book appointments.', icon: <Calendar size={20} /> },
      ],
      color: 'blue'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-slate relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Core <span className="text-brand-blue">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We combine the creative power of marketing with the efficiency of AI to create an unstoppable growth engine for your business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 flex flex-col h-full group hover:border-brand-blue/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">{service.description}</p>
              
              <div className="space-y-6 mb-12 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex gap-4">
                    <div className="mt-1 text-brand-blue">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.querySelector(`#${service.id}-detail`)?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
