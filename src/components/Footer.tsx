import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <span className="text-brand-blue">Click</span>
              <span className="text-white">DigitalEC</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Bridging the gap between High-Performance Digital Marketing and AI Automation for the modern US business market.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#digital-marketing" className="hover:text-brand-blue transition-colors">Digital Marketing</a></li>
              <li><a href="#ai-agents" className="hover:text-brand-blue transition-colors">AI Agent Systems</a></li>
              <li><a href="#industry-solutions" className="hover:text-brand-blue transition-colors">Industry Solutions</a></li>
              <li><a href="#reporting" className="hover:text-brand-blue transition-colors">Reporting & ROI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-brand-blue transition-colors">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-brand-blue transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="flex gap-3 text-sm text-slate-500">
              <Mail size={18} className="text-brand-blue shrink-0" />
              <span>hello@clikdigitalec.com</span>
            </div>
            <div className="flex gap-3 text-sm text-slate-500">
              <MapPin size={18} className="text-brand-blue shrink-0" />
              <span>Miami, FL & New York, NY</span>
            </div>
            <div className="p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/10">
              <p className="text-xs text-slate-400 italic">
                "The future of business is autonomous. Are you ready?"
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} ClikDigitalEC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
