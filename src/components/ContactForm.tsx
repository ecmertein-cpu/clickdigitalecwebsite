import { useState, FormEvent, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

const ContactForm = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const turnstileRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
    honeypot: '',
  });

  // Pre-select industry based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('restaurant')) setFormData(prev => ({ ...prev, industry: 'Restaurant' }));
    else if (path.includes('real-estate')) setFormData(prev => ({ ...prev, industry: 'Real Estate' }));
    else if (path.includes('dentist')) setFormData(prev => ({ ...prev, industry: 'Dentist' }));
    else if (path.includes('marketing')) setFormData(prev => ({ ...prev, industry: 'Marketing' }));
  }, [location.pathname]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;

    // Turnstile check
    const turnstileResponse = (e.target as any)['cf-turnstile-response']?.value;
    if (!turnstileResponse) {
      alert('Please complete the security check.');
      return;
    }

    setStatus('loading');

    try {
      // POST request to SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/17xp85ioy3fxm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.email,
              Phone: formData.phone,
              Industry: formData.industry,
              Message: formData.message,
              Timestamp: new Date().toLocaleString(),
              Source: window.location.pathname
            }
          ]
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      // Facebook Pixel Lead Event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      // GTM Event
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_submission',
          form_id: 'contact_form',
          industry: formData.industry
        });
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
        honeypot: '',
      });
      
      // Reset Turnstile
      if ((window as any).turnstile) {
        (window as any).turnstile.reset();
      }

    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
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
        <div className="text-center mb-12">
          {/* Brand Logo Banner */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="/banner.png" 
            alt="ClikDigitalEC Logo" 
            className="h-16 mx-auto mb-8 object-contain"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          
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
          className="glass-card p-8 md:p-12 border-t-4 border-brand-blue"
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
                  name="data[Name]"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Business Email</label>
                <input
                  required
                  name="data[Email]"
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
                  name="data[Phone]"
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
                  name="data[Industry]"
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
                required
                name="data[Message]"
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Cloudflare Turnstile */}
            <div className="flex flex-col gap-4">
              <div 
                ref={turnstileRef}
                className="cf-turnstile" 
                data-sitekey="0x4AAAAAACfq28yA43pA8QB7"
                data-theme="dark"
              ></div>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={14} className="text-brand-blue" />
                <span>Protected by Cloudflare Turnstile</span>
              </div>
            </div>

            <button
              disabled={status === 'loading'}
              type="submit"
              className="w-full py-4 text-lg font-bold rounded-xl flex items-center justify-center gap-2 transition-all bg-[#2563eb] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl flex flex-col items-center text-center gap-3 text-green-500"
                >
                  <CheckCircle2 size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Submission Successful!</h4>
                    <p className="text-sm opacity-90 text-slate-300">AI is processing your request... We will contact you within 24 hours.</p>
                  </div>
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
