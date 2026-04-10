'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

const PageHero = ({ title, breadcrumb }: PageHeroProps) => {
  return (
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl">{title}</h1>
          <nav className="mt-3 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-primary-foreground">{breadcrumb}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
