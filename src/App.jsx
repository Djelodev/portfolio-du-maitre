import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Cloud, Code2, Github, Linkedin, Mail, MapPin, Menu, Network, Server, ShieldCheck, Workflow, X } from 'lucide-react';

const projects = [
  { number: '01', title: 'LocaDjelo · Infrastructure', category: 'Cloud · Infrastructure as Code', description: 'Provisionnement et configuration d’une infrastructure Scaleway reproductible. Terraform crée les ressources, Ansible configure le serveur et applique les mesures de durcissement.', outcome: 'Du cloud vierge à un serveur configuré en une commande', stack: ['Scaleway', 'Terraform', 'Ansible', 'Linux', 'Bash'], href: 'https://github.com/Djelodev/locadjelo-infra', featured: true },
  { number: '02', title: 'LocaDjelo · Delivery platform', category: 'DevOps · Conteneurs · CI/CD', description: 'Déploiement d’une application Laravel conteneurisée avec Docker et Kubernetes K3s. Le pipeline GitHub Actions automatise le build, les tests, la publication de l’image et la livraison.', outcome: 'Un flux de livraison versionné et automatisé', stack: ['Docker', 'Kubernetes K3s', 'GitHub Actions', 'Nginx', 'Laravel'], href: 'https://github.com/Djelodev/locadjelo-app', featured: true },
  { number: '03', title: 'Projet Docker', category: 'Conteneurisation · Développement', description: 'Projet collaboratif autour d’une architecture conteneurisée associant une API Python/Flask et une interface PHP, orchestrées avec Docker Compose.', outcome: 'Services isolés et réseau applicatif dédié', stack: ['Docker Compose', 'Python', 'Flask', 'PHP'], href: 'https://github.com/Djelodev/Projet-Docker-' },
  { number: '04', title: 'Football AI Predictor', category: 'API · IA appliquée · Données', description: 'Application de prédiction de matchs de football combinant des données de rencontres, une API REST, une base SQLite pilotée par Prisma et un service de génération de prédictions IA.', outcome: 'API de matchs et de prédictions avec mise en cache', stack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'API REST', 'IA'], href: 'https://github.com/Djelodev/djelo-ai-prediction-foot' },
];

const expertise = [
  { icon: Server, number: '01', title: 'Systèmes & réseaux', description: 'Administration Linux et Windows, diagnostic, réseau local et maintien en conditions opérationnelles.', skills: ['Linux', 'Windows Server', 'TCP/IP', 'DNS / DHCP', 'Support N1/N2'] },
  { icon: Cloud, number: '02', title: 'Cloud & infrastructure', description: 'Infrastructure as Code, configuration reproductible et exploitation d’environnements cloud.', skills: ['Scaleway', 'Terraform', 'Ansible', 'Virtualisation'] },
  { icon: Workflow, number: '03', title: 'DevOps & delivery', description: 'Industrialisation des déploiements, conteneurisation et automatisation des tâches répétitives.', skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Bash'] },
  { icon: ShieldCheck, number: '04', title: 'Sécurité & supervision', description: 'Durcissement des systèmes, contrôle des accès, observabilité et alertes techniques.', skills: ['SSH', 'UFW', 'Fail2ban', 'Prometheus', 'Grafana'] },
];

const experience = [
  { date: 'JAN. — MAR. 2025', role: 'Développeur Laravel & DevOps', company: 'SOFSYS CI', location: 'Abidjan, Côte d’Ivoire', details: ['Développement d’API REST avec Laravel et participation à la conception de solutions applicatives.', 'Automatisation de tâches récurrentes avec Python et Bash.', 'Mise en place de pipelines CI/CD et utilisation de Git pour le versionnement.'] },
  { date: '2022 — 2024', role: 'Développeur web freelance', company: 'Clients professionnels', location: 'Abidjan, Côte d’Ivoire', details: ['Réalisation de projets web, du recueil du besoin à la mise en ligne et à la maintenance.', 'Développement PHP/Laravel et contribution à l’automatisation de déploiements.'] },
  { date: 'JAN. — JUIN 2023', role: 'Stagiaire administrateur systèmes & réseaux', company: 'Marvinet Connexion', location: 'Abidjan, Côte d’Ivoire', details: ['Administration quotidienne d’un parc de postes Windows et support informatique N1/N2.', 'Configuration du réseau local : TCP/IP, DNS, DHCP et câblage.', 'Installation de postes et gestion des droits d’accès utilisateurs.'] },
];

const education = [
  { date: '2026 — 2028', title: 'Master Systèmes, Réseaux & Cloud Computing', school: 'ESGI · Toulouse', detail: 'Formation orientée infrastructures, systèmes, réseaux, cloud et automatisation.' },
  { date: '2025 — 2026', title: 'Bachelor 3 Administrateur Système DevOps', school: 'École-IT · Amiens', detail: 'Spécialisation DevOps, conteneurisation, cloud et automatisation.' },
  { date: '2023 — 2024', title: 'Licence en informatique', school: 'Agitel Formation · Abidjan', detail: 'Fondamentaux de l’informatique, systèmes, réseaux et développement.' },
  { date: '2021 — 2023', title: 'BTS informatique · Développeur d’applications', school: 'Agitel Formation · Abidjan', detail: 'Programmation, conception d’applications et bases de données.' },
];

function SectionHeading({ eyebrow, title, text, number }) {
  return <div className="section-heading"><div className="section-heading__meta"><span className="eyebrow">{eyebrow}</span>{number && <span className="section-number">{number}</span>}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const nav = [['Expertise', '#expertise'], ['Projets', '#projets'], ['Parcours', '#parcours'], ['Contact', '#contact']];

  return <div className="site-shell">
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Ange Irie Bi, accueil"><span className="brand-mark">AI</span><span className="brand-name">Ange Irie Bi<span>.</span></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:iriebiange01@gmail.com" onClick={() => setMenuOpen(false)}>Me contacter <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main id="contenu">
      <section className="hero section-wrap" id="accueil">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}><span className="status-dot" />À la recherche d’une alternance</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>Je construis des<br /><span>infrastructures</span><br />fiables et automatisées.</motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>Étudiant en Master Systèmes, Réseaux & Cloud Computing à l’ESGI. Je relie l’administration système, le Cloud et les pratiques DevOps pour déployer des environnements maintenables et sécurisés.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}><a className="button button--primary" href="#projets">Voir mes projets <ArrowDownRight size={17} /></a><a className="button button--secondary" href="mailto:iriebiange01@gmail.com">Échanger avec moi <ArrowUpRight size={17} /></a></motion.div>
          <div className="hero-facts"><span><MapPin size={15} /> Toulouse · Île-de-France</span><span><Network size={15} /> Systèmes · Cloud · DevOps</span></div>
        </div>
        <motion.aside className="hero-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} aria-label="Résumé technique">
          <div className="hero-card__top"><span className="eyebrow">Focus technique</span><span className="hero-card__icon"><Code2 size={19} /></span></div>
          <div className="terminal"><div className="terminal__bar"><i /><i /><i /><span>deployment.yml</span></div><div className="terminal__body">
            <p><span className="code-muted">01</span> <span className="code-purple">infrastructure:</span></p><p><span className="code-muted">02</span> &nbsp; <span className="code-green">as_code</span>: true</p><p><span className="code-muted">03</span> &nbsp; <span className="code-green">delivery</span>: automated</p><p><span className="code-muted">04</span> &nbsp; <span className="code-green">security</span>: first</p><p><span className="code-muted">05</span> &nbsp; <span className="code-green">monitoring</span>: enabled</p><p className="terminal-cursor"><span className="code-muted">06</span> <span>_</span></p>
          </div></div><div className="hero-card__footer"><span>De l’infrastructure</span><ArrowRight size={15} /><span>à la production</span></div>
        </motion.aside>
      </section>

      <div className="tech-strip" aria-label="Technologies principales"><div className="tech-strip__inner"><span>Terraform</span><b>·</b><span>Ansible</span><b>·</b><span>Docker</span><b>·</b><span>Kubernetes</span><b>·</b><span>Linux</span><b>·</b><span>GitHub Actions</span><b>·</b><span>Prometheus</span></div></div>

      <section className="section-wrap section-block" id="expertise">
        <SectionHeading eyebrow="Ce que je fais" number="01 / EXPERTISE" title={<>Une approche complète<br />de l’infrastructure.</>} text="Je m’intéresse autant à la fiabilité du système qu’à l’automatisation de ce qui l’entoure." />
        <div className="expertise-grid">{expertise.map((item) => { const Icon = item.icon; return <article className="expertise-card" key={item.number}><div className="expertise-card__top"><span className="expertise-icon"><Icon size={21} strokeWidth={1.7} /></span><span className="section-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="skill-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}</div>
      </section>

      <section className="projects-section" id="projets"><div className="section-wrap section-block">
        <SectionHeading eyebrow="Sélection" number="02 / PROJETS" title={<>Du code à l’exploitation<br />en conditions réelles.</>} text="Des projets documentés qui illustrent ma façon d’aborder l’automatisation, le déploiement et la maintenance." />
        <div className="projects-grid">{projects.map((project) => <article className={`project-card${project.featured ? ' project-card--featured' : ''}`} key={project.number}>
          <div className="project-card__head"><span className="project-number">{project.number}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir ${project.title} sur GitHub`} className="icon-link"><ArrowUpRight size={19} /></a></div>
          <span className="project-category">{project.category}</span><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-outcome"><Check size={15} /> {project.outcome}</div><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">Explorer le dépôt <ArrowUpRight size={15} /></a>
        </article>)}</div>
        <div className="github-note"><div><span className="eyebrow">Code & documentation</span><p>Les dépôts détaillent l’architecture, les choix techniques et les étapes de déploiement.</p></div><a className="button button--secondary" href="https://github.com/Djelodev" target="_blank" rel="noreferrer"><Github size={17} /> Tous mes dépôts <ArrowUpRight size={15} /></a></div>
      </div></section>

      <section className="section-wrap section-block" id="parcours">
        <SectionHeading eyebrow="Expérience & formation" number="03 / PARCOURS" title={<>Une base technique,<br />une spécialisation infrastructure.</>} text="Un parcours qui associe expérience en support et développement à une spécialisation en systèmes, réseaux et cloud." />
        <div className="journey-tabs" role="tablist" aria-label="Parcours professionnel et formation"><button type="button" role="tab" aria-selected={activeTab === 'experience'} className={activeTab === 'experience' ? 'is-active' : ''} onClick={() => setActiveTab('experience')}>Expérience <span>03</span></button><button type="button" role="tab" aria-selected={activeTab === 'education'} className={activeTab === 'education' ? 'is-active' : ''} onClick={() => setActiveTab('education')}>Formation <span>04</span></button></div>
        {activeTab === 'experience' ? <div className="timeline" role="tabpanel">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.role}</h3><div className="timeline-company">{item.company} <span>·</span> {item.location}</div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div> : <div className="timeline" role="tabpanel">{education.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.title}</h3><div className="timeline-company">{item.school}</div><p>{item.detail}</p></div></article>)}</div>}
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
        <span className="eyebrow">Et maintenant ?</span><h2>Construisons quelque chose<br /><span>de fiable.</span></h2><p>Vous recrutez en systèmes, réseaux, infrastructure ou DevOps ? Échangeons sur vos besoins et sur ce que je peux apporter à votre équipe.</p>
        <div className="contact-actions"><a className="button button--light" href="mailto:iriebiange01@gmail.com"><Mail size={17} /> iriebiange01@gmail.com <ArrowUpRight size={16} /></a><a className="button button--dark-outline" href="tel:+33771454970">+33 7 71 45 49 70</a></div>
        <div className="contact-links"><a href="https://www.linkedin.com/in/angeiriebi" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/Djelodev" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div>
      </div></section>
    </main>

    <footer className="site-footer"><a className="brand" href="#accueil"><span className="brand-mark">AI</span><span className="brand-name">Ange Irie Bi<span>.</span></span></a><p>Systèmes · Réseaux · Cloud · DevOps</p><a href="#accueil" className="back-to-top">Retour en haut <ArrowUpRight size={14} /></a><span className="copyright">© {new Date().getFullYear()} Ange Irie Bi</span></footer>
  </div>;
}
