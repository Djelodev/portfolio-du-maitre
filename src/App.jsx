import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Container,
  Zap,
  Star,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Cloud
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
    className={`border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all p-8 ${className}`}
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
  const djeloImage = `${import.meta.env.BASE_URL}djelo.jpg`;

  const projects = [
    {
      title: "locadjelo-infra",
      desc: "Infrastructure as Code complète sur Scaleway : provisionnement automatisé via Terraform, configuration orchestrée par Ansible, durcissement SSH, pare-feu UFW et fail2ban. Configuration reproductible en moins de 5 minutes.",
      tech: ["Terraform", "Ansible", "Linux", "Bash"],
      color: colors.cyan,
      link: "https://github.com/Djelodev/locadjelo-infra"
    },
    {
      title: "locadjelo-app",
      desc: "Application Laravel conteneurisée avec multi-stage build Docker, pipeline CI/CD GitHub Actions et orchestration Kubernetes K3s. Scaling horizontal, rollback automatique et déploiement en environ 2 minutes.",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "Laravel"],
      color: colors.yellow,
      link: "https://github.com/Djelodev/locadjelo-app"
    },
    {
      title: "Projet-Docker-",
      desc: "Architecture microservices conteneurisée : API Flask Python et frontend PHP orchestrés via Docker Compose avec réseau interne dédié. Projet collaboratif à 5 contributeurs avec intégration continue.",
      tech: ["Python", "Flask", "Docker Compose", "PHP"],
      color: colors.pink,
      link: "https://github.com/Djelodev/Projet-Docker-"
    },
    {
      title: "zambol",
      desc: "Plateforme e-commerce complète développée avec Next.js et Supabase. Intégration TikTok Pixel pour le tracking marketing, déploiement automatisé sur Vercel et gestion des données en temps réel.",
      tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
      color: colors.green,
      link: "https://github.com/Djelodev/zambol"
    }
  ];

  return (
    <div className="min-h-screen font-mono bg-[#F0F0F0] text-black overflow-x-hidden selection:bg-black selection:text-white">

      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-6 bg-black z-50 origin-left border-b-4 border-white"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Flottante */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-wrap justify-center gap-2 bg-white border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:w-auto w-[90%]">
        {['PROFIL', 'EXPERTISE', 'PROJETS', 'PARCOURS', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 font-black hover:bg-black hover:text-white transition-all uppercase text-sm border-2 border-transparent hover:border-black">
            {item}
          </a>
        ))}
      </nav>

      {/* HERO SECTION */}
      <section id="profil" className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
                DEVOPS <br />
                <span className="text-white bg-black px-4 transform skew-x-12 inline-block">& CLOUD.</span>
              </h1>
              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <span className="h-4 w-20 bg-black"></span>
                <p className="text-2xl md:text-3xl font-black uppercase italic text-pink-600">Ange Irie Bi</p>
              </div>
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <Badge text="Master 1 Cloud" color={colors.cyan} />
                <Badge text="ESGI Toulouse" color={colors.green} />
              </div>
            </motion.div>

            <NeobrutalCard color={colors.white} className="max-w-xl">
              <p className="text-xl md:text-2xl font-bold leading-tight">
                Étudiant en Master 1 Systèmes, Réseaux et Cloud Computing. Je conçois,
                automatise et déploie des infrastructures fiables. De l'Infrastructure
                as Code aux pipelines CI/CD, je construis des systèmes qui tiennent
                la charge.
              </p>
            </NeobrutalCard>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ scale, rotate: rotateHero }}
              className="relative w-full aspect-square border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,122,1)] overflow-hidden bg-gray-200 group"
            >
              <img
                src={djeloImage}
                alt="Ange Irie Bi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center font-black animate-bounce text-center leading-none p-2 text-xs">
              DISPO SEPT. 2026
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU DÉFILANT */}
      <section className="bg-black text-white py-24 overflow-hidden border-y-8 border-white">
        <div className="flex whitespace-nowrap">
          {[...Array(5)].map((_, i) => (
            <motion.h2
              key={i}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="text-[8rem] font-black uppercase pr-20 flex items-center gap-10"
            >
              DOCKER <Star size={80} fill={colors.green} /> KUBERNETES <Zap size={80} fill={colors.cyan} /> TERRAFORM <Cloud size={80} fill={colors.pink} /> ANSIBLE
            </motion.h2>
          ))}
        </div>
      </section>

      {/* SECTION EXPERTISE */}
      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-20 text-center">Mon <br/><span className="bg-green-400 px-4 border-4 border-black inline-block transform -rotate-2">Expertise</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Container size={48} />, title: "Conteneurs", skills: ["Docker", "Kubernetes", "K3s"], color: colors.cyan },
            { icon: <Zap size={48} />, title: "Automatisation", skills: ["CI/CD", "GitHub Actions", "Ansible"], color: colors.pink },
            { icon: <Cloud size={48} />, title: "Cloud & IaC", skills: ["AWS", "Terraform", "Scaleway"], color: colors.yellow },
            { icon: <Code2 size={48} />, title: "Développement", skills: ["Python", "PHP/Laravel", "Next.js"], color: colors.green }
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
            <h2 className="text-6xl font-black uppercase italic underline decoration-pink-500">Mes <br/>Projets</h2>
            <p className="max-w-sm text-left md:text-right font-bold text-xl opacity-60">Des projets réels, en production, consultables sur mon GitHub. Cliquez pour explorer le code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p, i) => (
              <div key={i} className="group relative">
                <NeobrutalCard color={p.color} className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase leading-none break-words">{p.title}</h3>
                    <p className="text-lg font-bold mb-8 leading-snug">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tech.map(t => <span key={t} className="text-xs font-black uppercase bg-black text-white px-2 py-1">{t}</span>)}
                    </div>
                  </div>
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="mt-auto w-full py-4 bg-black text-white font-black uppercase flex items-center justify-center gap-2 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                  >
                    Voir sur GitHub <Github size={20} />
                  </motion.a>
                </NeobrutalCard>
              </div>
            ))}
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
              Expérience
            </button>
            <button
              onClick={() => setActiveTab('edu')}
              className={`flex-1 py-6 text-3xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${activeTab === 'edu' ? 'bg-black text-white -translate-y-2' : 'bg-white hover:-translate-y-1'}`}
            >
              Formation
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
                    { company: "SOFSYS CI", role: "Développeur Back-end & DevOps", period: "JAN 2025 - MARS 2025", desc: "Développement d'API REST sécurisées en Laravel, scripts Python et Bash d'automatisation, mise en place de pipelines CI/CD en méthode agile." },
                    { company: "MASEWA CI", role: "Développeur Web", period: "NOV 2024 - DÉC 2024", desc: "Maintenance et évolution d'une plateforme e-commerce à fort trafic. Optimisation des performances et accompagnement des utilisateurs." },
                    { company: "Marvinet Connexion", role: "Admin Système & Réseau", period: "2021 - 2022", desc: "Administration d'un parc de 20 postes Linux et Windows, configuration réseau TCP/IP, DNS, DHCP. Diagnostic d'incidents et continuité de service." }
                  ].map((job, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                      <div className="text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                      <div>
                        <h4 className="text-3xl md:text-4xl font-black uppercase">{job.company}</h4>
                        <p className="text-lg md:text-xl font-black text-white bg-black px-2 inline-block mb-2">{job.role} // {job.period}</p>
                        <p className="text-lg md:text-xl font-bold">{job.desc}</p>
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
                  <NeobrutalCard color="white" className="md:col-span-2">
                    <h3 className="text-3xl font-black mb-2 uppercase italic text-pink-500">Master 1 Systèmes, Réseaux & Cloud Computing</h3>
                    <p className="font-bold">ESGI TOULOUSE // 2026 - 2028</p>
                    <p className="mt-4 opacity-70">Titre RNCP niveau 7. Architectures systèmes et réseaux, Cloud computing, virtualisation, DevOps.</p>
                  </NeobrutalCard>
                  <NeobrutalCard color="white">
                    <h3 className="text-2xl font-black mb-2 uppercase italic text-cyan-500">Bachelor DevOps</h3>
                    <p className="font-bold">ÉCOLE IT, Amiens // 2025 - 2026</p>
                    <p className="mt-4 opacity-70">Administration système, Cloud, automatisation, CI/CD.</p>
                  </NeobrutalCard>
                  <NeobrutalCard color="white">
                    <h3 className="text-2xl font-black mb-2 uppercase italic text-yellow-500">Licence Informatique</h3>
                    <p className="font-bold">AGITEL, Abidjan // 2023 - 2024</p>
                    <p className="mt-4 opacity-70">Systèmes, réseaux, virtualisation, administration.</p>
                  </NeobrutalCard>
                  <NeobrutalCard color="white" className="md:col-span-2">
                    <h3 className="text-2xl font-black mb-2 uppercase italic text-purple-500">BTS Informatique, Développeur d'applications</h3>
                    <p className="font-bold">AGITEL, Abidjan // 2021 - 2023</p>
                    <p className="mt-4 opacity-70">Développement d'applications, bases de données, support technique.</p>
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
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-none">CONSTRUISONS <br/> LE <span className="text-pink-600">CLOUD</span> ENSEMBLE.</h2>
          </motion.div>

          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl">
            À la recherche d'une alternance DevOps / Cloud dès septembre 2026.
            Discutons de votre infrastructure.
          </p>

          <div className="flex items-center gap-3 mb-16 text-lg font-black uppercase">
            <MapPin size={24} /> Amiens · Mobilité France entière
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <a href="mailto:iriebiange01@gmail.com" className="bg-white text-black p-8 border-4 border-green-400 shadow-[10px_10px_0px_0px_rgba(173,255,0,1)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-4 text-xl md:text-2xl font-black uppercase">
              <Mail size={40} /> Envoyer un mail
            </a>
            <a href="tel:+33771454970" className="bg-white text-black p-8 border-4 border-cyan-400 shadow-[10px_10px_0px_0px_rgba(0,224,255,1)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-4 text-xl md:text-2xl font-black uppercase">
              <Phone size={40} /> Appel direct
            </a>
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-12">
            <a href="https://www.linkedin.com/in/angeiriebi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors uppercase font-black text-2xl underline decoration-4 flex items-center gap-2">
              <Linkedin size={28} /> LinkedIn
            </a>
            <a href="https://github.com/Djelodev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors uppercase font-black text-2xl underline decoration-4 flex items-center gap-2">
              <Github size={28} /> GitHub
            </a>
          </div>

          <p className="mt-24 opacity-40 font-black uppercase tracking-[0.5em] text-xs">
            © 2026 Ange Irie Bi • DevOps & Cloud Engineer
          </p>
        </div>
      </footer>

      <style>{`
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
