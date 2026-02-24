import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    {
      name: 'Services',
      dropdown: [
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'AI Agents', href: '/services/ai-agents' },
      ],
    },
    {
      name: 'Industries',
      dropdown: [
        { name: 'Restaurant', href: '/industries/restaurant-ai' },
        { name: 'Real Estate', href: '/industries/real-estate-ai' },
        { name: 'Dentist', href: '/industries/dentist-ai' },
      ],
    },
    { name: 'About', href: '/about' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark-slate/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="text-brand-blue">Clik</span>
          <span className="text-white">DigitalEC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-2">
                {link.name}
                {link.dropdown && <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </button>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-2 mt-1"
                    >
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => 
                            `block px-4 py-2 text-sm rounded-lg transition-all ${
                              isActive ? 'text-brand-blue bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <button 
            onClick={scrollToContact}
            className="btn-primary flex items-center gap-2"
          >
            <PhoneCall size={18} />
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{link.name}</div>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-3 pl-2">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => 
                            `text-lg ${isActive ? 'text-brand-blue' : 'text-slate-200'}`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  ) : (
                    <NavLink
                      to={link.href || ''}
                      className={({ isActive }) => 
                        `text-lg ${isActive ? 'text-brand-blue' : 'text-slate-200'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <button 
                onClick={scrollToContact}
                className="btn-primary w-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
