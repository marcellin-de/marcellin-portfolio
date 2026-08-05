import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
}

const NAV_ITEMS = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Why Me', href: '#why-me' },
];

export default function Navbar({ onBookCall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      {scrolled && <div className="scroll-progress" style={{ width: `${progress}%` }} />}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top ${scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1120px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-14">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-prussian' : 'text-white'}`}
              >
                Marcellin<span className="text-[#995800]">.</span>
              </a>
              {scrolled && (
                <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                  Available
                </span>
              )}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className={`px-3 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${scrolled
                      ? 'text-prussian/55 hover:text-prussian hover:bg-prussian/[0.04]'
                      : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={onBookCall}
                className="ml-2.5 btn-primary px-5 py-2 text-prussian text-[13px] font-semibold rounded-full"
              >
                Contact
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors -mr-2 ${scrolled ? 'text-prussian hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-14 inset-x-0 bg-white/[0.98] backdrop-blur-2xl shadow-2xl animate-slideUp rounded-b-2xl overflow-hidden safe-bottom">
            <div className="px-4 py-2 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="w-full text-left px-4 py-3.5 text-[16px] font-medium text-prussian/75 hover:text-[#995800] active:bg-accent/[0.04] rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <button
                  onClick={() => { setMobileOpen(false); onBookCall(); }}
                  className="w-full py-3.5 btn-primary text-prussian text-[15px] font-semibold rounded-xl text-center"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
