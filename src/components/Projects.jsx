import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const projects = [
  {
    title: 'TapandDine',
    subtitle: 'Multi-Tenant SaaS POS & Restaurant Management',
    description:
      'Engineered a comprehensive Multi-Tenant SaaS Point of Sale (POS) and Restaurant Management Platform. Built with Spring Boot 3 and MySQL, featuring Role-Based Access Control to isolate multi-restaurant data securely. Designed a responsive React.js frontend including a live Kitchen Display System (KDS).',
    image: '/assets/Tapanddine.png',
    tags: ['Spring Boot 3', 'MySQL', 'React.js', 'Vite', 'RBAC', 'Multi-Tenant SaaS', 'KDS'],
    highlights: [
      'Multi-tenant data isolation with Role-Based Access Control across Admin, Manager, and Staff roles',
      'Live Kitchen Display System (KDS) and dine-in table management grid',
      'Real-time public reservation routing with Spring Boot 3 backend',
    ],
    liveLink: 'http://tapanddine.in/',
    liveLabel: 'View Project',
    color: 'indigo',
  },
  {
    title: 'Avenaa',
    subtitle: 'Short-Term Rental Property Management Platform',
    description:
      'Developed a modern short-term rental property management platform using the MERN stack (React 19, Express, MongoDB). Integrated the external Rentalwise Partners API via an Express backend proxy using HTTP Basic Auth, handling secure data synchronization for live property quotes, availability calendars, and booking creation.',
    image: '/assets/Avenaa.png',
    tags: ['React 19', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs', 'Node.js', 'MERN'],
    highlights: [
      'Rentalwise Partners API integration via Express proxy with HTTP Basic Auth',
      'Secure data synchronization for live property quotes, availability calendars, and booking creation',
      'JWT-based authentication for secure user sessions',
    ],
    liveLink: 'https://avenaa.co.in/',
    liveLabel: 'View Project',
    color: 'emerald',
  },
  {
    title: 'Borkie',
    subtitle: 'Pet Service Management Web Application',
    description:
      'Built the core backend architecture for a dedicated pet service management web application. Utilized Java Spring Boot and MongoDB alongside Firebase Auth for secure identity verification. Implemented complex booking lifecycles, user/deliverer role management, and endpoints to support dynamic GPS tracking.',
    image: '/assets/Borkie.png',
    tags: ['Spring Boot', 'MongoDB', 'Firebase Auth', 'GPS Tracking', 'Java', 'REST APIs'],
    highlights: [
      'Complex booking lifecycle management with user and deliverer role separation',
      'Dynamic GPS tracking endpoints for real-time service fulfillment tracking',
      'Firebase Auth integration for secure identity verification',
    ],
    liveLink: 'https://www.borkie.in/',
    liveLabel: 'View Project',
    color: 'blue',
  },
  {
    title: 'Agrixo',
    subtitle: 'Agriculture Marketplace · Backend API',
    description:
      'Full backend API for an agriculture marketplace connecting buyers, farmers/sellers, and delivery partners. Covers product catalog, cart/checkout, multi-role order fulfillment, earnings ledger, and bank account management.',
    image: '/assets/Agrixo.png',
    tags: ['Node.js', 'Express 5', 'PostgreSQL', 'Prisma', 'Firebase Auth', 'FCM', 'REST APIs'],
    highlights: [
      'Multi-role platform (buyers, farmers/sellers, delivery partners) with role-specific API flows',
      'Firebase Auth ID token verification with FCM push notifications for real-time order updates',
      'Full order lifecycle with seller_fulfillments and delivery_assignments for multi-role fulfillment',
      'Earnings ledger with masked bank account management for PSP-linked seller payouts',
    ],
    liveLink: '#',
    liveLabel: 'View Project',
    platform: 'Backend API',
    color: 'violet',
  },
];

const colorTokens = {
  indigo:  { border: 'border-indigo-500/15 hover:border-indigo-500/40 hover:shadow-indigo-500/8',   badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',   btn: 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-500/30',   dot: 'bg-indigo-400',  sub: 'text-indigo-400' },
  emerald: { border: 'border-emerald-500/15 hover:border-emerald-500/40 hover:shadow-emerald-500/8',badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', btn: 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-emerald-500/30',dot: 'bg-emerald-400', sub: 'text-emerald-400' },
  blue:    { border: 'border-blue-500/15 hover:border-blue-500/40 hover:shadow-blue-500/8',         badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',           btn: 'bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/30',         dot: 'bg-blue-400',    sub: 'text-blue-400' },
  violet:  { border: 'border-violet-500/15 hover:border-violet-500/40 hover:shadow-violet-500/8',   badge: 'bg-violet-500/20 text-violet-300 border-violet-500/30',     btn: 'bg-violet-600 hover:bg-violet-500 hover:shadow-violet-500/30',   dot: 'bg-violet-400',  sub: 'text-violet-400' },
};

export default function Projects() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.pj-label', '.pj-title', '.pj-desc'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.14, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: secRef.current, start: 'top 72%' },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={secRef} className="py-20 bg-[#0a1019] relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-96 bg-indigo-700/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="pj-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Portfolio</span>
          <h2 className="pj-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Technical{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="pj-desc text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Full-stack applications built across SaaS, hospitality, and productivity domains.
          </p>
        </div>

        <div className="pj-grid grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const c = colorTokens[project.color];
            return (
              <div key={i} className={`pj-card group bg-[#0c1220] border rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl ${c.border}`}>
                <div className="relative h-52">
                  <img src={project.image} alt={project.title} className="pj-img w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c1220] via-[#0c1220]/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#0c1220]/90 text-indigo-300 border border-indigo-500/40 shadow-lg">
                    {project.platform ?? 'Full Stack'}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-600/90 text-green-100 rounded-full text-xs font-semibold border border-green-400/40 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                    Built
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className={`text-sm font-semibold mb-3 ${c.sub}`}>{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="pj-hi flex gap-2.5 text-xs text-gray-400 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="pj-tag px-2.5 py-1 bg-white/4 text-gray-400 text-xs rounded-md border border-white/6 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${c.btn}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {project.liveLabel}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
