'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import maxwellLogo from "@/assets/maxwell-logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo/" },
  { label: "Corsi", href: "/corsi/" },
  { label: "Contatti", href: "/contatti/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
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

      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src={maxwellLogo} alt="Ente Maxwell" className="h-12 w-auto" width={48} height={48} />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                  pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md p-2 text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

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
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 transition-colors hover:bg-primary/5 hover:text-primary",
                      pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
