import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
    honeypot: '', // Hidden field for bot prevention
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;

    setStatus('loading');

    try {
      // POST request to n8n webhook
      const response = await fetch('https://your-n8n-webhook-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.pathname
        }),
      });

      // Facebook Pixel Lead Event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Contact Form Submission',
          content_category: formData.industry
        });
      }

      // Simulation for demo
      setTimeout(() => {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          industry: '',
          message: '',
          honeypot: '',
        });
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        setStatus('error');
      }, 1500);
    }
  };

  const industries = [
    'Restaurant',
    'Real Estate',
    'Dentist',
    'Marketing',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 bg-brand-dark-slate relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to <span className="text-brand-blue">Scale?</span>
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Book your free strategy call today and discover how AI can transform your business.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input 
              type="text" 
              name="honeypot" 
              className="hidden" 
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Business Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Industry</label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="" disabled className="bg-slate-900">Select your industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind} className="bg-slate-900">{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Cloudflare Turnstile Placeholder */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
              <ShieldCheck size={14} className="text-brand-blue" />
              <span>Protected by Cloudflare Turnstile</span>
            </div>

            <button
              disabled={status === 'loading'}
              type="submit"
              className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  AI is processing your request...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Request Free Demo
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-500"
                >
                  <CheckCircle2 size={20} />
                  <span>AI is processing your request... We will contact you within 24 hours.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or email us directly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
