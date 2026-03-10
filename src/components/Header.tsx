import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import maxwellLogo from "@/assets/maxwell-logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Corsi", href: "#corsi" },
  { label: "News", href: "#news" },
  { label: "Contatti", href: "#contatti" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="hero-gradient">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm text-primary-foreground/90">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Via G. A. Campano, 105 Napoli
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              081-5854334
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              info@entemaxwell.it
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={maxwellLogo} alt="Ente Maxwell" className="h-12" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-primary/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="ml-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Iscriviti Ora
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md p-2 text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden border-t border-border bg-card"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-4 py-3 text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contatti"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
                >
                  Iscriviti Ora
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
