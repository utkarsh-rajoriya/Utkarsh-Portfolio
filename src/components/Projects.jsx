import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const projects = [
  {
    title: 'TapandDine',
    subtitle: 'Multi-Tenant SaaS POS & Restaurant Management',
    description:
      'A comprehensive Restaurant Management Platform with multi-tenant architecture, Role-Based Access Control (Admin, Manager, Staff), a live Kitchen Display System, dine-in table management grid, and real-time public reservation routing.',
    image: 'https://picsum.photos/seed/tapanddine/800/500',
    tags: ['Spring Boot 3', 'MySQL', 'React.js', 'Vite', 'RBAC', 'Multi-Tenant SaaS', 'KDS'],
    highlights: [
      'Multi-tenant data isolation with Role-Based Access Control across Admin, Manager, and Staff roles',
      'Live Kitchen Display System (KDS) and dine-in table management grid',
      'Real-time public reservation routing with Spring Boot 3 backend',
    ],
    liveLink: '#',
    liveLabel: 'View Project',
    color: 'indigo',
  },
  {
    title: 'Avenaa',
    subtitle: 'Short-Term Rental Property Management Platform',
    description:
      'A modern short-term rental property management platform using the MERN stack. Integrates the external Rentalwise Partners API via an Express backend proxy with HTTP Basic Auth, handling live property quotes, availability calendars, and booking creation.',
    image: 'https://picsum.photos/seed/avenaa-platform/800/500',
    tags: ['React 19', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs', 'Node.js', 'MERN'],
    highlights: [
      'Rentalwise Partners API integration via Express proxy with HTTP Basic Auth',
      'Live property quotes, availability calendars, and booking creation',
      'JWT-based authentication for secure user sessions',
    ],
    liveLink: '#',
    liveLabel: 'View Project',
    color: 'emerald',
  },
  {
    title: 'Borkie',
    subtitle: 'Pet Service Management Web Application',
    description:
      'Core backend architecture for a dedicated pet service platform. Implements complex booking lifecycles, user/deliverer role management, and dynamic GPS tracking for service fulfillments using Spring Boot, MongoDB, and Firebase Auth.',
    image: 'https://picsum.photos/seed/borkie-pet/800/500',
    tags: ['Spring Boot', 'MongoDB', 'Firebase Auth', 'GPS Tracking', 'Java', 'REST APIs'],
    highlights: [
      'Complex booking lifecycle management with user and deliverer role separation',
      'Dynamic GPS tracking endpoints for real-time service fulfillment tracking',
      'Firebase Auth integration for secure identity verification',
    ],
    liveLink: '#',
    liveLabel: 'View Project',
    color: 'blue',
  },
  {
    title: 'Notes Management SaaS',
    subtitle: 'Productivity & Information Architecture Platform',
    description:
      'A productivity platform engineered with minimal interaction friction and a clean information architecture. Focuses on efficient data handling, streamlined workflows, and a distraction-free user experience.',
    image: 'https://picsum.photos/seed/notes-saas/800/500',
    tags: ['React.js', 'SaaS', 'Node.js', 'MongoDB', 'REST APIs', 'Clean Architecture'],
    highlights: [
      'Minimal interaction friction with clean, distraction-free information architecture',
      'Efficient data handling with streamlined CRUD workflows',
      'Responsive design with smooth state transitions',
    ],
    liveLink: '#',
    liveLabel: 'View Project',
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

      gsap.utils.toArray('.pj-card').forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -90 : 90,
          opacity: 0, duration: 0.9, ease: 'power3.out',
          immediateRender: false, scrollTrigger: { trigger: '.pj-grid', start: 'top 75%' },
          delay: i * 0.1,
        });
        gsap.from(card.querySelectorAll('.pj-hi'), {
          x: 18, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out',
          immediateRender: false, scrollTrigger: { trigger: card, start: 'top 72%' },
        });
        gsap.from(card.querySelectorAll('.pj-tag'), {
          scale: 0, opacity: 0, duration: 0.3, stagger: 0.04, ease: 'back.out(2)',
          immediateRender: false, scrollTrigger: { trigger: card, start: 'top 68%' },
        });
      });

      gsap.utils.toArray('.pj-img').forEach((img) => {
        gsap.from(img, {
          scale: 1.15, duration: 1.1, ease: 'power2.out',
          immediateRender: false, scrollTrigger: { trigger: img, start: 'top 80%' },
        });
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
                <div className="relative overflow-hidden h-52">
                  <img src={project.image} alt={project.title} className="pj-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c1220] via-[#0c1220]/20 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${c.badge}`}>
                    Full Stack
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
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

                  <a
                    href={project.liveLink}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${c.btn}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.liveLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
