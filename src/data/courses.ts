import { BookOpen, Monitor, Heart, Shield, Cpu, Globe, Zap, PenTool, Award, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  tag: string;
  category: string;
  durata: string;
  stage: string;
  esamefinale: string;
  titoloDiStudio: string;
  description: string[];
  competenze?: string[];
  perche?: string[];
  destinatari?: string[];
  faq?: FAQ[];
}

export const courses: Course[] = [
  {
    slug: "masterclass-bim-specialist",
    icon: Box,
    title: "Masterclass BIM Specialist",
    shortDescription: "Il percorso per acquisire competenze BIM solide, certificabili e spendibili nei contesti professionali più evoluti.",
    tag: "Nuovo",
    category: "Informatica",
    durata: "Oltre 110 ore",
    stage: "No",
    esamefinale: "Sì – Attestato Autodesk Revit",
    titoloDiStudio: "Diploma",
    description: [
      "Un percorso pensato per chi vuole andare oltre l'uso base del software e sviluppare una competenza BIM strutturata, applicabile nella pratica professionale, nella produzione di elaborati, nella gestione dei dati e nella comprensione del quadro normativo.",
      "Il percorso per acquisire competenze BIM solide, certificabili e spendibili nei contesti professionali più evoluti.",
    ],
    competenze: [
      "Modellazione BIM con Revit e gestione dei flussi di lavoro",
      "Produzione di documentazione ed elaborati professionali",
      "Gestione di famiglie, output e dati informativi",
      "Normativa BIM nazionale e internazionale (CI, OGI, PGI)",
      "Rapporto con la Pubblica Amministrazione e contesti strutturati",
    ],
    perche: [
      "Approccio operativo – Non solo teoria, ma utilizzo reale di Revit e dei flussi di lavoro BIM.",
      "Profilo professionale più forte – Il corso aiuta a rendere il proprio CV e la propria posizione professionale più qualificata per incarichi, bandi e contesti strutturati.",
      "Percorso completo – Dall'ambiente BIM alla modellazione, fino a documentazione, famiglie, output e normativa.",
      "Spendibilità concreta – Competenze utili per studio professionale, collaborazione tecnica, concorsi, pubblica amministrazione e percorsi di certificazione.",
    ],
    destinatari: [
      "Architetti",
      "Ingegneri",
      "Geometri e tecnici",
      "Studenti e neolaureati",
      "Professionisti che vogliono aggiornarsi sul BIM",
    ],
    faq: [
      { question: "Serve già conoscere Revit?", answer: "Dipende dal livello richiesto, ma il percorso accompagna progressivamente verso una padronanza più strutturata dell'ambiente BIM." },
      { question: "Il corso è solo teorico?", answer: "No, il programma comprende aspetti operativi, modellazione, documentazione, famiglie, output e normativa." },
      { question: "Quante ore di formazione sono previste?", answer: "Sono previste oltre 110 ore di formazione." },
      { question: "È previsto un attestato?", answer: "Sì, il volantino indica Attestato Autodesk – Revit." },
      { question: "Sono previsti crediti formativi professionali?", answer: "Sì, sono previsti crediti formativi professionali." },
      { question: "Cosa significa selezione su candidatura?", answer: "L'accesso avviene previa candidatura e valutazione, anche in funzione dei posti disponibili." },
      { question: "Il piano didattico include anche normativa BIM?", answer: "Sì, una competenza specifica è dedicata alla normativa nazionale e internazionale, oltre a CI, OGI, PGI e rapporto con la Pubblica Amministrazione." },
      { question: "Come faccio a iscrivermi?", answer: "Compilando il modulo di iscrizione e inviandolo via mail all'ente (info@entemaxwell.it). Attendere la conferma dell'iscrizione e in caso positivo recarsi presso l'ente per completare l'iscrizione." },
    ],
  },
  {
    slug: "preparazione-concorso-pubblico",
    icon: BookOpen,
    title: "Preparazione Concorsi Pubblici",
    shortDescription: "Preparazione per concorsi pubblici con lezioni in presenza e da remoto tenute da docenti esperti. Bando Ripam per 3997 assistenti e altri concorsi attivi.",
    tag: "Concorsi",
    category: "Varie",
    durata: "28 ore",
    stage: "No",
    esamefinale: "No",
    titoloDiStudio: "Diploma",
    description: [
      "L'Ente di Formazione Maxwell sfruttando la sua pluriennale esperienza nella preparazione ai concorsi pubblici ha attivato un corso di preparazione per il profilo di Assistente Amministrativo.",
      "Bando Ripam per 3997 assistenti (pubblicato a dicembre 2025): Il concorso prevede come unica prova scritta un test a risposta multipla di 40 domande. Il bando prevede l'assunzione di 3997 assistenti con contratto a tempo indeterminato presso Prefetture, Ministero dell'interno, INPS, ispettorato del lavoro, Uffici scolastici, Ragionerie provinciali, ecc.",
      "Il corso prevede due moduli distinti:",
      "Modulo 1: Preparazione in presenza presso l'Ente Maxwell, con lezioni frontali dove ci sarà un docente esperto che vi formerà sulle materie previste dal bando. Saranno effettuate anche delle esercitazioni e quiz come simulazione concorsuale.",
      "Modulo 2: Preparazione in remoto sincrona, tramite webinar live, con lezioni in videoconferenza dove ci sarà sempre un docente esperto che vi formerà sulle materie previste dal bando.",
      "I moduli sono progettati per fornire ai partecipanti strumenti teorici e pratici per affrontare con sicurezza i quesiti dei test concorsuali. Ogni modulo prevede 14 lezioni di due ore ciascuna, per un totale di 28 ore.",
    ],
  },
  {
    slug: "operatore-informatico",
    icon: Monitor,
    title: "Operatore Informatico",
    shortDescription: "Qualifica professionale IeFP riconosciuta dalla Regione Campania e in ambito europeo. Corso gratuito triennale finanziato dal PR Campania FSE+ 2021-2027.",
    tag: "IeFP",
    category: "IeFP",
    durata: "2.970 ore (3 anni)",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Licenza media",
    description: [
      "Nell'ambito dei corsi IeFP (Istruzione e Formazione Professionale) il corso permette di acquisire la qualifica professionale di \"Operatore informatico\" rilasciata dalla Regione Campania e riconosciuta in ambito europeo.",
      "Il progetto è finanziato dal Programma Regionale PR Campania FSE+ 2021-2027 – Priorità Istruzione e Formazione.",
      "La durata complessiva dell'intervento formativo è di 2.970 ore, suddivise in 3 anni: I anno 990 ore, II anno 990 ore, III anno 990 ore.",
      "Al termine dei tre anni avrai conseguito la Qualifica professionale \"Operatore informatico\" acquisendo le competenze necessarie per la configurazione e utilizzo di supporti e dispositivi informatici hardware e software presenti nell'office automation e a supporto della comunicazione digitale.",
    ],
    competenze: [
      "Configurazione e utilizzo di dispositivi informatici",
      "Manutenzione ordinaria e straordinaria di sistemi e reti",
      "Elaborazione, manutenzione e trasmissione di dati",
      "Gestione di archivi digitali",
      "Office automation e comunicazione digitale",
    ],
  },
  {
    slug: "blsd",
    icon: Heart,
    title: "BLSD",
    shortDescription: "Acquisizione di strumenti conoscitivi e metodologici per prevenire il danno anossico cerebrale, riconoscere stati d'incoscienza e tecniche di primo soccorso.",
    tag: "Sanitario",
    category: "Sanità",
    durata: "Da definire",
    stage: "No",
    esamefinale: "No",
    titoloDiStudio: "Nessuno",
    description: [
      "Il corso BLSD ha l'obiettivo principale di far acquisire gli strumenti conoscitivi e metodologici e le capacità necessarie per prevenire il danno anossico cerebrale e riconoscere in un paziente adulto lo stato d'incoscienza, di arresto respiratorio e di assenza di polso in una condizione di assoluta sicurezza per se stesso, per la persona soccorsa e per gli astanti.",
      "Per evitare queste gravissime conseguenze occorre ottimizzare i tempi di intervento, uniformare ed ordinare le valutazioni da effettuare e le azioni da compiere nell'ambito della cosiddetta catena della sopravvivenza.",
    ],
    competenze: [
      "Acquisire e schematizzare le conoscenze relative al trattamento dell'arresto cardiocircolatorio con defibrillatore semiautomatico esterno secondo le linee guida ILCOR 2020-2025 e NRC",
      "Saper riconoscere l'arresto cardiocircolatorio",
      "Saper gestire un'equipe di soccorso in caso di arresto cardiocircolatorio",
      "Saper mettere in atto le manovre ed i protocolli per il trattamento con defibrillatore semiautomatico",
      "Acquisire capacità di autocontrollo in risposta a situazioni critiche",
      "Acquisire capacità di gestione dell'equipe di soccorso in emergenza per l'utilizzo precoce del defibrillatore semiautomatico",
    ],
  },
  {
    slug: "tecnico-web",
    icon: Globe,
    title: "Tecnico Web",
    shortDescription: "Ideazione, progettazione, sviluppo e aggiornamento di siti web pubblicati su Internet. Gestione di tutte le fasi dalla creazione alla manutenzione.",
    tag: "IT",
    category: "Informatica",
    durata: "Da definire",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Diploma",
    description: [
      "Si occupa dell'ideazione, della progettazione, dello sviluppo e dell'aggiornamento di siti Web pubblicati in Internet. A seconda del livello di esperienza maturato e della realtà lavorativa in cui opera, si può occupare di parte o tutte le fasi di ideazione e sviluppo di un sito Web.",
      "Le attività includono: definizione delle strategie di comunicazione, gestione e controllo dei contenuti, individuazione delle tecniche da adottare, promozione del sito, sviluppo e aggiornamento di pagine web e manutenzione.",
      "A sito ultimato, inoltre, questa figura rappresenta in genere il punto di riferimento per gli utenti, a cui presta supporto ed assistenza e di cui raccoglie osservazioni e commenti.",
      "L'azione didattica potrà avvalersi dell'utilizzo di tecnologie informatiche e multimediali. La metodologia formativa sarà incentrata su tecniche didattiche dirette a coniugare gli aspetti teorici e nozionistici degli argomenti trattati con quelli pratici ed operativi, attraverso lezioni frontali e laboratorio pratico.",
      "Il corso sarà erogato nell'ambito dell'offerta formativa regionale nel rispetto dei programmi previsti dalle qualificazioni professionali contenute nel repertorio della Regione Campania e riconosciute in ambito comunitario europeo.",
    ],
    competenze: [
      "Analisi dei requisiti",
      "Installazione sul server e pubblicazione del sito Web",
      "Sviluppo del sito Web",
      "Manutenzione del sito ed assistenza agli utenti",
      "Progettazione del sito Web",
    ],
  },
  {
    slug: "eipass",
    icon: Award,
    title: "EIPASS",
    shortDescription: "Certificazione informatica riconosciuta a livello europeo. Attesta l'acquisizione di competenze informatiche avanzate, alternativa alla ECDL/ICDL.",
    tag: "Certificazione",
    category: "Informatica",
    durata: "Corso online",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Nessuno",
    description: [
      "EIPASS (European Informatics Passport) è una certificazione informatica riconosciuta a livello internazionale, come un passaporto. Ciò significa che questo attestato costituisce un titolo utile nella ricerca di lavoro anche all'estero, soprattutto nel campo della didattica e dell'insegnamento.",
      "Ottenere una certificazione informatica è un ottimo modo per aggiornare le proprie competenze professionali e rimanere al passo con il mercato del lavoro. Secondo la Commissione Europea, 9 posti di lavoro su 10 richiedono la conoscenza del computer almeno basilare.",
      "Acquisire una certificazione EIPASS serve soprattutto a tutti quei professionisti che hanno bisogno di accrescere il proprio punteggio per scalare le graduatorie nei concorsi pubblici.",
      "L'European Informatics Passport è il corso adatto agli studenti, ai docenti che intendano potenziare le loro conoscenze, al personale ATA e a tutti coloro che vogliono certificare le proprie competenze informatiche.",
      "Iscrivendoti ad un corso EIPASS avrai a disposizione online: piattaforma e-learning disponibile 24h/24h, dispense scaricabili, prove di autovalutazione ripetibili e un sistema di tutoraggio automatico per monitorare i progressi.",
    ],
    competenze: [
      "EIPASS 7 Moduli User – 13 crediti formativi",
      "EIPASS Basic – 8 crediti formativi",
      "EIPASS Progressive – 8 crediti formativi",
    ],
  },
  {
    slug: "tecnico-hardware",
    icon: Cpu,
    title: "Tecnico Hardware",
    shortDescription: "Assemblaggio, installazione e manutenzione di componenti hardware e software di sistemi e reti informatiche. Configurazione e riparazioni.",
    tag: "IT",
    category: "Informatica",
    durata: "200 ore",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Diploma",
    description: [
      "Il tecnico hardware si occupa dell'assemblaggio, installazione e manutenzione di componenti hardware e software di sistemi e reti informatiche. Esegue la configurazione ed eventuali piccole riparazioni delle componenti hardware. Può svolgere, in alcuni casi, attività di informazione e assistenza post vendita alla clientela.",
      "L'azione didattica potrà avvalersi dell'utilizzo di tecnologie informatiche e multimediali. La metodologia formativa sarà incentrata su tecniche didattiche dirette a coniugare gli aspetti teorici e nozionistici degli argomenti trattati con quelli pratici ed operativi, attraverso lezioni frontali e laboratorio pratico.",
    ],
    competenze: [
      "Effettuare diagnosi di malfunzionamenti hardware e software",
      "Reperire pezzi di ricambi e sostituire componenti hardware",
      "Utilizzare programmi applicativi per effettuare l'intervento di back up",
      "Verificare e testare il funzionamento delle realizzazioni",
      "Curare l'aggiornamento software e la manutenzione ordinaria e straordinaria dell'hardware",
      "Manutenere e ottimizzare reti informatiche",
      "Fornire assistenza post vendita ai clienti",
      "Assemblare pezzi o componenti elettronici",
      "Installare e configurare computer, periferiche, reti e sistemi operativi",
    ],
  },
  {
    slug: "rspp",
    icon: Shield,
    title: "RSPP – Responsabile del Servizio di Prevenzione e Protezione",
    shortDescription: "Responsabile del Servizio Prevenzione e Protezione secondo il D.Lgs. 81/08. Figura aziendale obbligatoria per la sicurezza sul lavoro.",
    tag: "Sicurezza",
    category: "Sicurezza",
    durata: "Variabile secondo le tipologie",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Diploma",
    description: [
      "RSPP, acronimo di Responsabile del Servizio Prevenzione e Protezione, è una figura aziendale obbligatoria, secondo quanto previsto dal D.Lgs. 81/08 Testo Unico sulla Sicurezza e Salute sul lavoro. Tale figura sovraintende al Servizio di Prevenzione e Protezione e coordina tutte le attività inerenti alla sicurezza sul lavoro nell'ambito aziendale.",
      "I destinatari possono essere i datori di lavoro, che svolgono direttamente la funzione di RSPP (art.34 del D.Lgs. 81/2008), per cui i corsi sono modulati secondo le categorie di rischio associate all'attività (Basso, Medio, Alto).",
      "Se invece si vuole svolgere la funzione di RSPP come attività professionale (consulente aziendale), bisogna avere un diploma e seguire un modulo base comune a tutti i settori, più eventuali altri 4 moduli specialistici (Agricoltura, Edilizia, Sanità, Petrolchimico).",
      "L'azione didattica potrà avvalersi dell'utilizzo di tecnologie informatiche e multimediali. Per i moduli base è possibile anche la formazione a distanza (FAD); in ogni caso è prevista una valutazione finale mediante test o colloquio.",
    ],
  },
  {
    slug: "web-designer",
    icon: PenTool,
    title: "Web Designer",
    shortDescription: "Progettazione e creazione di pagine web: funzionamento tecnico, comunicazione, aspetto grafico e coinvolgimento degli utenti.",
    tag: "IT",
    category: "Informatica",
    durata: "200 ore",
    stage: "No",
    esamefinale: "Sì",
    titoloDiStudio: "Diploma",
    description: [
      "Il web designer è colui che progetta e crea le singole pagine web: in generale è il responsabile del funzionamento tecnico del sito, della comunicazione in esso presente, dell'aspetto grafico e del coinvolgimento degli utenti che visitano il sito (user experience).",
      "Il web designer è anche il responsabile finale della qualità di un sito web e garantisce che i siti siano accattivanti dal punto di vista grafico, abbiano un buon impatto visivo, siano semplici da navigare, compatibili con le esigenze dei visitatori e accessibili utilizzando browser e dispositivi diversi.",
      "Le competenze acquisite dal web designer riguardano soprattutto la realizzazione della parte grafica del sito utilizzando i principali programmi di grafica al computer disponibili sul mercato.",
      "Il web designer può essere un freelance competente in più campi, ma per lavori di alta complessità collabora spesso con un team di sviluppatori ed esperti nei singoli settori. Può lavorare in una web agency, in uno studio associato o all'interno dell'organico di una grande società.",
    ],
    competenze: [
      "Progettazione grafica di siti web",
      "User experience e usabilità",
      "Utilizzo dei principali software di grafica",
      "Sviluppo front-end",
      "Design responsive e accessibilità",
    ],
  },
  {
    slug: "progettista-impianti-fotovoltaici",
    icon: Zap,
    title: "Progettista Impianti Fotovoltaici",
    shortDescription: "Corso per progettista di impianti fotovoltaici, sfruttando l'energia solare per produrre energia elettrica pulita e rinnovabile.",
    tag: "Energia",
    category: "Green Economy",
    durata: "200 ore",
    stage: "Sì",
    esamefinale: "Sì",
    titoloDiStudio: "Diploma",
    description: [
      "Il fotovoltaico sfrutta l'energia solare per produrre energia elettrica e rappresenta una delle principali fonti di energia alternativa. Gli impianti fotovoltaici insieme a quelli eolici si stanno diffondendo sempre di più negli ultimi anni.",
      "Il Corso è rivolto a diplomati e per la partecipazione tramite le offerte regionali di \"Garanzia Giovani\" bisogna essere anche inoccupati, inattivi, disoccupati e disoccupati di lunga durata residenti in Campania, di età compresa tra i 18 ed i 29 anni.",
      "L'obiettivo del corso è quello di formare professionisti che abbiano conoscenza delle normative nazionali ed internazionali, delle fonti di energia rinnovabili, delle tecniche di costruzione e di gestione dell'energia e dei materiali al fine di ridurre il consumo energetico e le emissioni di gas climalteranti.",
      "Non solo impianti fotovoltaici, ma anche termici, eolico e tutte le tecniche che possono rientrare nell'ambito della green economy.",
    ],
    competenze: [
      "Conoscenza delle normative nazionali ed internazionali",
      "Fonti di energia rinnovabile",
      "Tecniche di costruzione e gestione dell'energia",
      "Progettazione impianti fotovoltaici",
      "Green economy e sostenibilità",
    ],
  },
];
