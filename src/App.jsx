import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Container,
  Server,
  Zap,
  Star,
  ShieldCheck,
  Rocket,
  ArrowRight,
  User,
  Image as ImageIcon
} from 'lucide-react';

const colors = {
  yellow: "#FFE600",
  pink: "#FF007A",
  cyan: "#00E0FF",
  green: "#ADFF00",
  black: "#000000",
  white: "#FFFFFF",
  purple: "#9D00FF"
};

const NeobrutalCard = ({ children, color = colors.white, className = "", delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all bg-[${color}] p-8 ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </motion.div>
);

const Badge = ({ text, color = colors.pink }) => (
  <span className="inline-block px-4 py-2 border-4 border-black font-black uppercase text-sm mb-3 mr-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform" style={{ backgroundColor: color }}>
    {text}
  </span>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('exp');
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const projects = [
    {
      title: "Empire Marketplace",
      desc: "Optimisation massive d'une infrastructure Shopify. J'ai transformé une boutique standard en une machine de guerre e-commerce ultra-performante.",
      tech: ["Shopify", "Liquid", "JS"],
      color: colors.cyan
    },
    {
      title: "Système de Location Élite",
      desc: "Conception de l'architecture backend complète pour une flotte de véhicules. Une fiabilité absolue pour des performances brutes.",
      tech: ["PHP", "Laravel", "MySQL"],
      color: colors.yellow
    },
    {
      title: "API REST Suprême",
      desc: "Développement d'interfaces de communication ultra-rapides. Le pont parfait entre les données et une expérience utilisateur sans friction.",
      tech: ["Laravel", "Postgres", "Docker"],
      color: colors.pink
    }
  ];

  return (
    <div className="min-h-screen font-mono bg-[#F0F0F0] text-black overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Barre de progression massive */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-6 bg-black z-50 origin-left border-b-4 border-white"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Flottante */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-wrap justify-center gap-2 bg-white border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:w-auto w-[90%]">
        {['PROFIL', 'MAÎTRISE', 'PROJETS', 'PARCOURS', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 font-black hover:bg-black hover:text-white transition-all uppercase text-sm border-2 border-transparent hover:border-black">
            {item}
          </a>
        ))}
      </nav>

      {/* HERO SECTION - Narcissisme assumé */}
      <section id="profil" className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
                L'ÉLITE <br /> 
                <span className="text-white bg-black px-4 transform skew-x-12 inline-block">C'EST MOI.</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-4 w-20 bg-black"></span>
                <p className="text-3xl font-black uppercase italic text-pink-600">Ange Irie Bi • Architecte DevOps</p>
              </div>
            </motion.div>
            
            <NeobrutalCard color={colors.white} className="max-w-xl">
              <p className="text-2xl font-bold leading-tight">
                Certains codent, je bâtis des empires numériques. Je ne me contente pas de régler des bugs, je perfectionne l'infrastructure même de votre succès.
              </p>
            </NeobrutalCard>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ scale, rotate: rotateHero }}
              className="relative w-full aspect-square border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,122,1)] overflow-hidden bg-gray-200 group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-black font-black text-center p-8 z-10 group-hover:opacity-0 transition-opacity bg-white/50 backdrop-blur-sm">
                [ PHOTO LÉGENDAIRE D'ANGE ]
              </div>
              <img 
                src="public/djelo.jpg" 
                alt="Ange Irie Bi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center font-black animate-bounce text-center leading-none p-2 text-xs">
              L'EXCELLENCE EST MON STANDARD
            </div>
          </div>
        </div>
      </section>

      {/* SECTION MANIFESTE / NARCISSISME */}
      <section className="bg-black text-white py-32 overflow-hidden border-y-8 border-white">
        <div className="flex whitespace-nowrap">
          {[...Array(5)].map((_, i) => (
            <motion.h2 
              key={i}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="text-[12rem] font-black uppercase pr-20 flex items-center gap-10"
            >
              L'AVENIR DU DÉPLOIEMENT <Star size={100} fill={colors.green} /> ANGE IRIE BI <Zap size={100} fill={colors.cyan} />
            </motion.h2>
          ))}
        </div>
      </section>

      {/* SECTION MAÎTRISE (SKILLS) */}
      <section id="maîtrise" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-20 text-center">Ma Puissance <br/><span className="bg-green-400 px-4 border-4 border-black inline-block transform -rotate-2">Technique</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Container size={48} />, title: "Infrastructures", skills: ["Docker", "Linux", "Kubernetes"], color: colors.cyan },
            { icon: <Zap size={48} />, title: "Automatisation", skills: ["CI/CD", "GitHub Actions", "Ansible"], color: colors.pink },
            { icon: <Code2 size={48} />, title: "Développement", skills: ["PHP/Laravel", "JavaScript", "Python"], color: colors.yellow },
            { icon: <ShieldCheck size={48} />, title: "Sécurité", skills: ["Cloud Security", "Supervision", "Optimization"], color: colors.green }
          ].map((item, idx) => (
            <NeobrutalCard key={idx} color={item.color} delay={idx * 0.1}>
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map(s => <Badge key={s} text={s} color="white" />)}
              </div>
            </NeobrutalCard>
          ))}
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-32 bg-white border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-6xl font-black uppercase italic underline decoration-pink-500">Réalisations <br/>D'Exception</h2>
            <p className="max-w-sm text-left md:text-right font-bold text-xl opacity-60">Seuls les projets qui défient les limites de la performance sont ici. Bienvenue dans mon monde.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <div key={i} className="group relative">
                <NeobrutalCard color={p.color} className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-black mb-6 uppercase leading-none">{p.title}</h3>
                    <p className="text-lg font-bold mb-8 leading-snug">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tech.map(t => <span key={t} className="text-xs font-black uppercase bg-black text-white px-2 py-1">{t}</span>)}
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="mt-auto w-full py-4 bg-black text-white font-black uppercase flex items-center justify-center gap-2 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                  >
                    Explorer la puissance <ArrowRight />
                  </motion.button>
                </NeobrutalCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PHOTO / IMMERSION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-6xl font-black uppercase italic">Ange <span className="bg-purple-500 text-white px-2 not-italic">Irie Bi</span></h2>
              <p className="text-2xl font-bold leading-relaxed">
                Le DevOps est mon terrain de jeu. Là où d'autres voient de la complexité, je vois une symphonie à orchestrer. Ma présence garantit une fluidité sans faille.
              </p>
              <div className="p-8 border-l-[12px] border-black bg-yellow-300 font-black text-2xl italic shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                "La perfection n'est pas un but, c'est mon point de départ."
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="border-4 border-black bg-white aspect-[3/4] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 font-black">VISION</div>
                <img src="public/djelo.jpg" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="border-4 border-black bg-white aspect-[3/4] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] translate-y-8 relative group">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 font-black">FOCUS</div>
                 <img src="public/djelo.jpg" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="border-4 border-black bg-white aspect-[3/4] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-8 relative group">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 font-black">BRILLANCE</div>
                 <img src="public/djelo.jpg" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="border-4 border-black bg-white aspect-[3/4] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 font-black">ÉLITE</div>
                 <img src="public/djelo.jpg" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PARCOURS (TABS) */}
      <section id="parcours" className="py-32 bg-cyan-400 border-y-8 border-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('exp')}
              className={`flex-1 py-6 text-3xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${activeTab === 'exp' ? 'bg-black text-white -translate-y-2' : 'bg-white hover:-translate-y-1'}`}
            >
              Ma Carrière
            </button>
            <button 
              onClick={() => setActiveTab('edu')}
              className={`flex-1 py-6 text-3xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${activeTab === 'edu' ? 'bg-black text-white -translate-y-2' : 'bg-white hover:-translate-y-1'}`}
            >
              Mon Savoir
            </button>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'exp' ? (
                <motion.div 
                  key="exp"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-12"
                >
                  {[
                    { company: "SOFSYS CI", role: "Maître Laravel", period: "JAN 2025 - MARS 2025", desc: "Domination du backend et des architectures REST API. Maintenance de systèmes critiques." },
                    { company: "Masewa.co", role: "E-commerce Titan", period: "NOV 2024 - JAN 2025", desc: "Optimisation de flux de revenus via Shopify. Personnalisation extrême." },
                    { company: "JAFA ENTREPRISE", role: "Architecte Web", period: "2022 - 2023", desc: "Création de solutions métiers complexes pour la location de véhicules." }
                  ].map((job, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                      <div className="text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                      <div>
                        <h4 className="text-4xl font-black uppercase">{job.company}</h4>
                        <p className="text-xl font-black text-white bg-black px-2 inline-block mb-2">{job.role} // {job.period}</p>
                        <p className="text-xl font-bold">{job.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="edu"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                   <NeobrutalCard color="white">
                    <h3 className="text-3xl font-black mb-2 uppercase italic text-pink-500">Mastering DevOps</h3>
                    <p className="font-bold">ECOLE IT (Amiens) // En cours</p>
                    <p className="mt-4 opacity-70">Le sommet de l'automatisation et de la supervision.</p>
                  </NeobrutalCard>
                  <NeobrutalCard color="white">
                    <h3 className="text-3xl font-black mb-2 uppercase italic text-cyan-500">Licence Informatique</h3>
                    <p className="font-bold">AGITEL (Abidjan) // 2024</p>
                    <p className="mt-4 opacity-70">Fondations inébranlables en systèmes & réseaux.</p>
                  </NeobrutalCard>
                  <NeobrutalCard color="white" className="md:col-span-2">
                    <h3 className="text-3xl font-black mb-2 uppercase italic text-yellow-500">BTS Développement</h3>
                    <p className="font-bold">AGITEL (Abidjan) // 2023</p>
                    <p className="mt-4 opacity-70">L'art de forger des applications robustes et scalables.</p>
                  </NeobrutalCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-black text-white py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-12 inline-block p-4 border-8 border-white transform -rotate-2 bg-white text-black"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-none">DOMINONS <br/> LE <span className="text-pink-600">CLOUD</span> ENSEMBLE.</h2>
          </motion.div>

          <p className="text-3xl font-bold mb-20 max-w-2xl">
            Ne vous contentez pas du standard. Exigez la perfection infrastructurelle signée Ange Irie Bi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <a href="mailto:iriebiange01@gmail.com" className="bg-white text-black p-8 border-4 border-green-400 shadow-[10px_10px_0px_0px_rgba(173,255,0,1)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-4 text-2xl font-black uppercase">
              <Mail size={40} /> Envoyer un mail
            </a>
            <a href="tel:+33771454970" className="bg-white text-black p-8 border-4 border-cyan-400 shadow-[10px_10px_0px_0px_rgba(0,224,255,1)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-4 text-2xl font-black uppercase">
              <Phone size={40} /> Appel direct
            </a>
          </div>

          <div className="mt-32 flex flex-wrap justify-center gap-12">
            <a href="#" className="hover:text-pink-500 transition-colors uppercase font-black text-2xl underline decoration-4">LinkedIn</a>
            <a href="#" className="hover:text-cyan-500 transition-colors uppercase font-black text-2xl underline decoration-4">GitHub</a>
            <a href="#" className="hover:text-yellow-500 transition-colors uppercase font-black text-2xl underline decoration-4">Twitter</a>
          </div>
          
          <p className="mt-24 opacity-40 font-black uppercase tracking-[0.5em] text-xs">
            © 2025 Ange Irie Bi • Architecte Suprême • Conçu avec Force
          </p>
        </div>
      </footer>

      {/* Style additionnel pour les animations */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: #ADFF00;
          color: #000;
        }
      `}</style>
    </div>
  );
}