import { motion } from 'motion/react';
import { Utensils, Volume2, Play, CheckCircle2, ArrowRight, AlertTriangle, Brain, BarChart3, Users } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const RestaurantAI = () => {
  return (
    <div className="bg-brand-dark-slate text-white">
      <SEO 
        title="AI Voice Agent for Restaurants | Stop Missing Calls" 
        description="Solve your labor shortage. AI handles your phone orders 24/7 with flawless execution and 20+ languages."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-red-500/10 text-red-500 font-bold text-sm uppercase tracking-widest border border-red-500/20">
              <AlertTriangle size={18} />
              Stop Losing Money
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Staff Gets Tired, Hungry, and Distracted... <br />
              <span className="text-brand-blue">But AI Never Does!</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl mb-10">
              Stop Losing Money to Missed Calls, Order Errors, and Cold Food Costs Today.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-blue hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-3 mx-auto"
            >
              APPLY FOR A FREE DEMO & ZERO YOUR RISK <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Face the Reality Section */}
      <section className="py-20 bg-white/5 border-y border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-500">
                🛑 Face the Reality: <br />
                <span className="text-white text-3xl">Your Restaurant is Losing Money Every Day!</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Kitchen is slammed, the phone is ringing, and no one can pick up? Is your staff too tired to upsell that extra side or drink?
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-brand-blue/20 p-2 rounded-lg"><CheckCircle2 className="text-brand-blue" /></div>
                  <div>
                    <h4 className="font-bold text-xl">Tired Staff Can’t Upsell</h4>
                    <p className="text-slate-400">Humans get exhausted. AI offers the perfect add-on to every customer, increasing your average check by 20%.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-brand-blue/20 p-2 rounded-lg"><CheckCircle2 className="text-brand-blue" /></div>
                  <div>
                    <h4 className="font-bold text-xl">A Missed Call is a Missed Customer</h4>
                    <p className="text-slate-400">AI handles 100+ calls simultaneously. Your customers won't head to your competitors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-brand-blue/20 p-2 rounded-lg"><CheckCircle2 className="text-brand-blue" /></div>
                  <div>
                    <h4 className="font-bold text-xl">No More Language Barriers</h4>
                    <p className="text-slate-400">Our AI Agent speaks 20+ languages fluently. Never lose a tourist or international customer again.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://picsum.photos/seed/restaurant-chaos/800/600" 
                alt="Restaurant Chaos vs AI Efficiency" 
                className="rounded-3xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multimedia Proof Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">📽️ Watch the Future of Dining</h2>
            <p className="text-slate-400">Watch how our AI Agent manages a busy Friday night and boosts profits.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Placeholder */}
            <div className="lg:col-span-2 aspect-video glass-card rounded-3xl overflow-hidden relative">
               <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="AI Restaurant Demo"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Audio Samples */}
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-8">
                <Volume2 className="text-brand-blue" />
                <h3 className="font-bold uppercase tracking-wider">🎧 Believe Your Ears</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 font-medium italic">"Not a Robot, a Digital Employee!"</p>
              
              <div className="space-y-4">
                {[
                  { label: "Complex order / Noisy kitchen", src: "#" },
                  { label: "International customer", src: "#" },
                  { label: "Order with specific allergy", src: "#" }
                ].map((sample, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-sm font-bold mb-3">{sample.label}</p>
                    <audio controls className="w-full h-8 opacity-80">
                      <source src={sample.src} type="audio/mpeg" />
                    </audio>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brain Features Section */}
      <section className="py-24 bg-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Brain className="text-brand-blue" size={40} />
            <h2 className="text-4xl font-bold">More Than Just a Voice</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Flawless Confirmation', desc: 'AI reads the order back for final approval. Zero error margin.', icon: <CheckCircle2 /> },
              { title: 'Flexible Shifts', desc: 'Activate during peak hours, turn off during slow times. You are in control.', icon: <Users /> },
              { title: 'No Cold Food', desc: 'Schedule orders are held until 1 hour before delivery. Always fresh.', icon: <Utensils /> },
              { title: 'End Disputes', desc: 'Every call is recorded. Transparency for "He said / She said" moments.', icon: <Volume2 /> }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border-t-2 border-brand-blue/30">
                <div className="text-brand-blue mb-4">{feature.icon}</div>
                <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Control */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="glass-card p-10 rounded-3xl">
            <BarChart3 className="text-brand-blue mb-6" size={32} />
            <h3 className="text-3xl font-bold mb-4">Reporting & Retargeting</h3>
            <p className="text-slate-400 leading-relaxed">
              Stop guessing, start knowing. Identify customers who haven't ordered in 30 days and win them back with automated SMS/messaging campaigns.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <Users className="text-orange-500 mb-6" size={32} />
            <h3 className="text-3xl font-bold mb-4">Always in Control: Live Transfer</h3>
            <p className="text-slate-400 leading-relaxed">
              If a customer asks for a human or the AI encounters a complex request, the call is instantly transferred to your front desk.
            </p>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skeptical? Try to "Break" the System!</h2>
          <p className="text-xl text-slate-400 mb-12">
            Test it before you commit. We’ll upload your menu to our demo panel—give it your hardest orders and see the performance for yourself.
          </p>
          <div className="glass-card p-8 md:p-12 rounded-[40px] text-left">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantAI;
