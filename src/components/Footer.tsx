import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import maxwellLogo from "@/assets/maxwell-logo.png";

const Footer = () => {
  return (
    <footer className="hero-gradient py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={maxwellLogo} alt="Ente Maxwell" className="h-12 brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Ente di Formazione Professionale accreditato dalla Regione Campania.
              Dal 1990 formiamo professionisti qualificati.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Pagine
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-primary-foreground transition-colors">Chi Siamo</Link></li>
              <li><Link to="/corsi" className="hover:text-primary-foreground transition-colors">I Nostri Corsi</Link></li>
              <li><Link to="/news" className="hover:text-primary-foreground transition-colors">News</Link></li>
              <li><Link to="/contatti" className="hover:text-primary-foreground transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Servizi
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Formazione a Distanza</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Programma GOL</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Percorsi IeFP</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Corsi EIPASS</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">SAFSS</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contatti
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Via G. A. Campano, 105 – Napoli
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                081-5854334
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                320-8681476
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                info@entemaxwell.it
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Lun–Ven: 9:00–11:00, 17:00–19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Ente di Formazione Professionale Maxwell. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
