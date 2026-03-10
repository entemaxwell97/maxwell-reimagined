import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import maxwellLogo from "@/assets/maxwell-logo.png";

const Footer = () => {
  return (
    <footer id="contatti" className="hero-gradient py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
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

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Corsi
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li><a href="#corsi" className="hover:text-primary-foreground transition-colors">Concorsi Pubblici</a></li>
              <li><a href="#corsi" className="hover:text-primary-foreground transition-colors">Operatore Informatico</a></li>
              <li><a href="#corsi" className="hover:text-primary-foreground transition-colors">BLSD</a></li>
              <li><a href="#corsi" className="hover:text-primary-foreground transition-colors">RSPP</a></li>
              <li><a href="#corsi" className="hover:text-primary-foreground transition-colors">Tecnico Web</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Servizi
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Formazione a Distanza</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Programma GOL</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Percorsi IeFP</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Corsi EIRSAF</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">SAFSS</a></li>
            </ul>
          </div>

          {/* Contacts */}
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
