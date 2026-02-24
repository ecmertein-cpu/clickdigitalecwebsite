import { motion } from 'motion/react';
import { LineChart, PieChart, TrendingUp, RefreshCcw, Database, Search } from 'lucide-react';

const Reporting = () => {
  const features = [
    {
      title: 'Smart Reporting',
      desc: 'Real-time dashboards that track every AI interaction and marketing dollar spent.',
      icon: <LineChart size={24} />
    },
    {
      title: 'AI Data Enrichment',
      desc: 'Our agents collect deep customer insights during calls to refine your marketing personas.',
      icon: <Database size={24} />
    },
    {
      title: 'Dynamic Retargeting',
      desc: 'Automatically retarget leads based on the specific intent captured by our AI agents.',
      icon: <RefreshCcw size={24} />
    },
    {
      title: 'ROI Attribution',
      desc: 'Clear visibility into which ads are driving the highest quality AI-closed deals.',
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Reporting & <span className="text-brand-blue">Retargeting</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Data is the fuel for growth. Our systems don't just automate tasks; they capture invaluable market intelligence that we feed back into your marketing campaigns.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                    <PieChart size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Campaign Performance</h5>
                    <p className="text-xs text-slate-500">Live AI Attribution</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-xs font-bold rounded-full">
                  +24% ROI
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'AI Qualified Leads', value: 84, color: 'bg-brand-blue' },
                  { label: 'Marketing ROI', value: 72, color: 'bg-blue-400' },
                  { label: 'Agent Close Rate', value: 91, color: 'bg-indigo-500' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{stat.label}</span>
                      <span className="text-white font-bold">{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <Search size={16} className="text-slate-500" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Intent Analysis</span>
                </div>
                <p className="text-sm text-slate-300 italic">
                  "Lead expressed high urgency for property viewing in North Miami. Retargeting sequence triggered for similar listings."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-blue/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-900/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
