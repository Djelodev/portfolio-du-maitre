import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Check, Cloud, Code2, Github,
  Linkedin, Mail, MapPin, Menu, Server, ShieldCheck, Workflow, X,
  ExternalLink, Terminal, GraduationCap
} from 'lucide-react';

const portraitSrc = import.meta.env.BASE_URL + 'ange-portrait.webp';

const projects = [
  {
    number: '01',
    title: 'LocaDjelo · Infrastructure',
    category: 'CLOUD / INFRASTRUCTURE AS CODE',
    description: 'Provisionnement reproductible d’une infrastructure Scaleway. Terraform crée les ressources, puis Ansible configure et sécurise le serveur.',
    outcome: 'Du cloud vierge à un serveur prêt à être exploité.',
    stack: ['Scaleway', 'Terraform', 'Ansible', 'Linux', 'Bash'],
    href: 'https://github.com/Djelodev/locadjelo-infra',
    visual: 'infra',
    label: 'terraform apply'
  },
  {
    number: '02',
    title: 'LocaDjelo · Delivery platform',
    category: 'DEVOPS / CONTENEURS / CI/CD',
    description: 'Application Laravel conteneurisée, déployée avec Docker et Kubernetes K3s. GitHub Actions automatise le build et la livraison.',
    outcome: 'Un flux de livraison versionné et automatisé.',
    stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx', 'Laravel'],
    href: 'https://github.com/Djelodev/locadjelo-app',
    visual: 'pipeline',
    label: 'deploy.yml'
  },
  {
    number: '03',
    title: 'Projet Docker',
    category: 'CONTENEURISATION / ARCHITECTURE',
    description: 'Architecture conteneurisée associant une API Python/Flask et une interface PHP, orchestrées avec Docker Compose.',
    outcome: 'Des services isolés reliés par un réseau applicatif.',
    stack: ['Docker Compose', 'Python', 'Flask', 'PHP'],
    href: 'https://github.com/Djelodev/Projet-Docker-',
    visual: 'containers',
    label: 'compose.yaml'
  },
  {
    number: '04',
    title: 'Football AI Predictor',
    category: 'API / DONNÉES / IA APPLIQUÉE',
    description: 'Application de prédiction de matchs de football avec API REST, base de données SQLite via Prisma et génération de prédictions assistée par IA.',
    outcome: 'Une API de matchs et de prédictions avec mise en cache.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'API REST'],
    href: 'https://github.com/Djelodev/djelo-ai-prediction-foot',
    visual: 'data',
    label: 'prediction-api'
  }
];

const services = [
  { number: '01', icon: Server, title: 'Systèmes & réseaux', detail: 'Administration Linux et Windows, support N1/N2, diagnostic, TCP/IP, DNS et DHCP.', skills: 'LINUX · WINDOWS SERVER · TCP/IP' },
  { number: '02', icon: Cloud, title: 'Cloud & infrastructure', detail: 'Provisionnement, configuration reproductible et exploitation d’environnements cloud.', skills: 'SCALEWAY · TERRAFORM · ANSIBLE' },
  { number: '03', icon: Workflow, title: 'DevOps & automatisation', detail: 'Conteneurisation, intégration continue et déploiement pour fiabiliser la livraison.', skills: 'DOCKER · KUBERNETES · CI/CD' },
  { number: '04', icon: ShieldCheck, title: 'Sécurité & supervision', detail: 'Durcissement, contrôle des accès, surveillance et alertes techniques.', skills: 'SSH · UFW · PROMETHEUS · GRAFANA' }
];

const experience = [
  { date: 'JAN. — MAR. 2025', role: 'Développeur Laravel & DevOps', company: 'SOFSYS CI', location: 'Abidjan, Côte d’Ivoire', details: ['Développement d’API REST avec Laravel et participation à la conception de solutions applicatives.', 'Automatisation de tâches récurrentes avec Python et Bash.', 'Utilisation de Git et participation à la mise en place de pipelines CI/CD.'], tags: ['Laravel', 'Python', 'Bash', 'CI/CD'] },
  { date: '2022 — 2024', role: 'Développeur web freelance', company: 'Clients professionnels', location: 'Abidjan, Côte d’Ivoire', details: ['Réalisation de projets web, du recueil du besoin à la mise en ligne et à la maintenance.', 'Développement PHP/Laravel et contribution à l’automatisation de déploiements.'], tags: ['PHP', 'Laravel', 'MySQL', 'Git'] },
  { date: 'JAN. — JUIN 2023', role: 'Stagiaire administrateur systèmes & réseaux', company: 'Marvinet Connexion', location: 'Abidjan, Côte d’Ivoire', details: ['Administration d’un parc de postes Windows et support informatique N1/N2.', 'Configuration du réseau local : TCP/IP, DNS, DHCP et câblage.', 'Installation de postes et gestion des droits utilisateurs.'], tags: ['Windows', 'Réseau', 'Support N1/N2'] }
];

const education = [
  { date: '2026 — 2028', title: 'Master Systèmes, Réseaux & Cloud Computing', school: 'ESGI · Toulouse', detail: 'Formation orientée infrastructures, systèmes, réseaux, cloud et automatisation.' },
  { date: '2025 — 2026', title: 'Bachelor 3 Administrateur Système DevOps', school: 'École-IT · Amiens', detail: 'Spécialisation DevOps, conteneurisation, cloud et automatisation.' },
  { date: '2023 — 2024', title: 'Licence en informatique', school: 'Agitel Formation · Abidjan', detail: 'Fondamentaux de l’informatique, systèmes, réseaux et développement.' },
  { date: '2021 — 2023', title: 'BTS informatique · Développeur d’applications', school: 'Agitel Formation · Abidjan', detail: 'Programmation, conception d’applications et bases de données.' }
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{children}</span>{number && <span className="section-label__number">{number}</span>}</div>;
}

function ProjectVisual({ type, label }) {
  return <div className={'project-visual project-visual--' + type} aria-hidden="true">
    <div className="visual-window">
      <div className="visual-topbar"><span /><span /><span /><small>{label}</small><i>↗</i></div>
      {type === 'infra' && <div className="infra-diagram">
        <div className="infra-node infra-node--cloud"><Cloud size={20} /><b>Scaleway</b><small>Infrastructure</small></div>
        <div className="infra-line" />
        <div className="infra-node infra-node--server"><Server size={19} /><b>Linux server</b><small>Provisionné par Terraform</small></div>
        <div className="infra-tags"><span>VPC</span><span>SSH</span><span>Ansible</span></div>
      </div>}
      {type === 'pipeline' && <div className="pipeline-flow">
        <div className="pipeline-step"><Code2 size={18} /><b>Commit</b><small>Git push</small></div><span className="pipeline-arrow">→</span>
        <div className="pipeline-step"><Workflow size={18} /><b>Build</b><small>Image Docker</small></div><span className="pipeline-arrow">→</span>
        <div className="pipeline-step"><Cloud size={18} /><b>Deploy</b><small>Kubernetes</small></div>
        <div className="pipeline-status"><span /> Pipeline terminé avec succès</div>
      </div>}
      {type === 'containers' && <div className="container-visual">
        <div className="container-card"><Terminal size={20} /><b>API Flask</b><small>Python · :5000</small><div className="mini-bars"><i /><i /><i /></div></div>
        <div className="container-network"><span>docker network</span></div>
        <div className="container-card"><Code2 size={20} /><b>Frontend PHP</b><small>Apache · :80</small><div className="mini-bars"><i /><i /><i /></div></div>
      </div>}
      {type === 'data' && <div className="data-visual">
        <div className="data-metric"><small>Match prediction API</small><b>Prédiction <span>active</span></b><strong>78.4%</strong><small>Score simulé de démonstration</small></div>
        <div className="data-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="data-legend"><span>● Données</span><span>● Modèle</span><span>● API REST</span></div>
      </div>}
    </div>
    <div className="visual-index">PREVIEW / {type.toUpperCase()}</div>
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [activeExperience, setActiveExperience] = useState(0);
  const reduceMotion = useReducedMotion();
  const nav = [['Projets', '#projets'], ['Services', '#services'], ['Parcours', '#parcours'], ['Contact', '#contact']];
  const initial = reduceMotion ? false : 'hidden';

  return <div className="portfolio-shell">
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Ange Irie Bi, accueil"><span className="brand-symbol">AI<span>.</span></span><span className="brand-name">Ange Irie Bi</span></a>
      <div className="header-availability"><span /> Disponible pour une alternance</div>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:iriebiange01@gmail.com" onClick={() => setMenuOpen(false)}>Parlons-en <ArrowUpRight size={14} /></a>
      </nav>
    </header>

    <main id="contenu">
      <section className="hero" id="accueil">
        <div className="hero-stage">
          <motion.div className="hero-kicker" initial={initial} animate="visible" variants={reveal}><span className="kicker-dot" /> PORTFOLIO · 2026 <span className="hero-kicker-line" /></motion.div>
          <motion.h1 className="hero-name" initial={initial} animate="visible" transition={{ staggerChildren: 0.09 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } } }}>
            <motion.span className="hero-name-outline" variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}>ANGE IRIE</motion.span>
            <motion.span className="hero-name-solid" variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}>BI<span>.</span></motion.span>
          </motion.h1>
          <motion.div className="portrait-stage" initial={reduceMotion ? false : { opacity: 0, y: 52, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}>
            <div className="portrait-halo" />
            <img className="portrait-img" src={portraitSrc} alt="Portrait d’Ange Irie Bi" fetchPriority="high" />
            <div className="portrait-caption"><span className="portrait-caption__line" /><span>Systèmes · Réseaux · Cloud</span></div>
          </motion.div>
          <motion.div className="hero-intro" initial={initial} animate="visible" variants={reveal} transition={{ delay: 0.32 }}>
            <span className="eyebrow">01 — Ce qui m’anime</span>
            <h2>Je fais tourner<br /><em>l’infrastructure.</em></h2>
            <p>Administrateur systèmes & réseaux, orienté Cloud et DevOps. J’automatise les tâches répétitives pour rendre les environnements plus fiables, lisibles et faciles à maintenir.</p>
            <a className="text-action" href="#projets">Découvrir mes projets <ArrowDownRight size={17} /></a>
          </motion.div>
          <motion.aside className="hero-socials" initial={initial} animate="visible" variants={reveal} transition={{ delay: 0.45 }} aria-label="Liens professionnels">
            <span className="eyebrow">Retrouve-moi</span>
            <a href="https://www.linkedin.com/in/angeiriebi" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href="https://github.com/Djelodev" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
            <a href="mailto:iriebiange01@gmail.com"><Mail size={15} /> E-mail <ArrowUpRight size={13} /></a>
          </motion.aside>
          <div className="hero-bottom-meta"><span><MapPin size={13} /> Toulouse · Île-de-France</span><a href="#projets">Faire défiler <span className="scroll-line" /></a><span>© {new Date().getFullYear()} — ANGE IRIE BI</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Technologies"><div className="ticker-track"><span>LINUX</span><i>✳</i><span>TERRAFORM</span><i>✳</i><span>ANSIBLE</span><i>✳</i><span>DOCKER</span><i>✳</i><span>KUBERNETES</span><i>✳</i><span>CI/CD</span><i>✳</i><span>LINUX</span><i>✳</i><span>TERRAFORM</span><i>✳</i><span>ANSIBLE</span><i>✳</i><span>DOCKER</span><i>✳</i><span>KUBERNETES</span><i>✳</i><span>CI/CD</span><i>✳</i></div></div>

      <section className="work-section section-wrap" id="projets">
        <motion.div className="section-head section-head--work" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <SectionLabel number="01 / 04">/ SELECTED WORK</SectionLabel>
          <div className="section-head__body"><h2>Du concret.<br /><span>Du fonctionnel.</span></h2><p>Des projets qui traduisent une même idée : une infrastructure bien pensée doit être reproductible, observable et simple à faire évoluer.</p></div>
        </motion.div>
        <div className="projects-grid">{projects.map((project, index) => <motion.article className="project-card" key={project.number} initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] } } }}>
          <a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={'Explorer ' + project.title + ' sur GitHub'}><ProjectVisual type={project.visual} label={project.label} /><span className="project-open"><ArrowUpRight size={19} /></span></a>
          <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
          <h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></h3>
          <p className="project-description">{project.description}</p>
          <p className="project-outcome"><Check size={14} /> {project.outcome}</p>
          <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Voir le projet <ArrowUpRight size={15} /></a>
        </motion.article>)}</div>
        <div className="all-projects"><p>Chaque dépôt contient les détails techniques et les choix d’architecture.</p><a className="button button--outline" href="https://github.com/Djelodev" target="_blank" rel="noreferrer"><Github size={16} /> Tous les dépôts <ArrowUpRight size={14} /></a></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap services-inner">
          <motion.div className="section-head" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <SectionLabel number="02 / 04">/ SERVICES & EXPERTISE</SectionLabel>
            <div className="section-head__body"><h2>Ce que je peux<br /><span>apporter.</span></h2><p>Une approche transversale des systèmes : comprendre le besoin, configurer proprement, automatiser le répétitif et documenter pour la suite.</p></div>
          </motion.div>
          <div className="service-list">{services.map((item, index) => { const Icon = item.icon; return <motion.article className="service-row" key={item.number} initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: index * 0.07 } } }}>
            <span className="service-number">{item.number}</span><span className="service-icon"><Icon size={20} strokeWidth={1.6} /></span><div className="service-main"><h3>{item.title}</h3><p>{item.detail}</p><span className="service-skills">{item.skills}</span></div><ArrowUpRight className="service-arrow" size={20} />
          </motion.article>; })}</div>
        </div>
      </section>

      <section className="experience-section" id="parcours">
        <div className="section-wrap experience-inner">
          <motion.div className="experience-title" initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <SectionLabel number="03 / 04">/ EXPERIENCE</SectionLabel>
            <div className="experience-title-row"><h2>Le parcours<br /><span>en mouvement.</span></h2><p>Des expériences de développement et de support, complétées par une spécialisation systèmes, réseaux et cloud.</p></div>
          </motion.div>
          <div className="experience-layout">
            <div className="experience-list">{experience.map((item, index) => <motion.button className={'experience-item' + (activeExperience === index ? ' is-active' : '')} key={item.company} type="button" onMouseEnter={() => setActiveExperience(index)} onFocus={() => setActiveExperience(index)} onClick={() => setActiveExperience(index)}>
              <span className="experience-date">{item.date}</span><span className="experience-item-main"><strong>{item.role}</strong><small>{item.company} <i>·</i> {item.location}</small></span><ArrowUpRight size={16} className="experience-arrow" />
            </motion.button>)}</div>
            <motion.div className="experience-detail" key={activeExperience} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <span className="eyebrow">0{activeExperience + 1} — EXPÉRIENCE</span><h3>{experience[activeExperience].role}</h3><p className="experience-detail-company">{experience[activeExperience].company} · {experience[activeExperience].location}</p>
              <ul>{experience[activeExperience].details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <div className="experience-tags">{experience[activeExperience].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="experience-watermark">EXPERIENCE</div>
            </motion.div>
          </div>
          <div className="education-wrap">
            <div className="education-heading"><span className="eyebrow">FORMATION</span><span className="education-note"><GraduationCap size={15} /> Apprendre, pratiquer, progresser</span></div>
            <div className="education-grid">{education.map((item, index) => <motion.article className="education-item" key={item.title} initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.06 } } }}>
              <span className="education-date">{item.date}</span><h3>{item.title}</h3><span className="education-school">{item.school}</span><p>{item.detail}</p>
            </motion.article>)}</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <motion.div initial={initial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <SectionLabel number="04 / 04">/ THE NEXT STEP</SectionLabel>
            <span className="contact-availability"><span /> Disponible immédiatement</span>
            <h2>On construit<br />la suite <span>ensemble.</span></h2>
            <p>Vous recherchez un alternant en systèmes, réseaux, support informatique, infrastructure ou Cloud ? Parlons de vos besoins et de ce que je peux apporter à votre équipe.</p>
            <div className="contact-actions"><a className="button button--light" href="mailto:iriebiange01@gmail.com"><Mail size={16} /> iriebiange01@gmail.com <ArrowUpRight size={15} /></a><a className="button button--dark-outline" href="tel:+33771454970">+33 7 71 45 49 70</a></div>
          </motion.div>
          <div className="contact-side"><span className="contact-monogram">AI<span>.</span></span><span>Administration · Automatisation · Fiabilité</span><a href="#accueil">Retour en haut <ArrowUpRight size={14} /></a></div>
        </div>
      </section>
    </main>

    <footer className="site-footer"><a className="brand" href="#accueil"><span className="brand-symbol">AI<span>.</span></span><span className="brand-name">Ange Irie Bi</span></a><p>Systèmes · Réseaux · Cloud · DevOps</p><div className="footer-links"><a href="https://www.linkedin.com/in/angeiriebi" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a><a href="https://github.com/Djelodev" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a></div><span className="copyright">© {new Date().getFullYear()} ANGE IRIE BI</span></footer>
  </div>;
}