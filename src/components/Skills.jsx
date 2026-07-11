import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const skills = [
  {
    category: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'indigo',
    items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Responsive Web Design', 'Wireframing'],
  },
  {
    category: 'Backend & AI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 9.5V19h9.5l5.74-6.76z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l-2 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16l2-2" />
      </svg>
    ),
    color: 'emerald',
    items: ['Java', 'Spring Boot', 'Spring AI', 'Node.js', 'Express', 'RESTful APIs', 'Microservices', 'Kafka', 'JWT'],
  },
  {
    category: 'Databases',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'blue',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB', 'Firebase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'cyan',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS', 'GCP', 'CICD Pipelines', 'Git'],
  },
  {
    category: 'Tools & Soft Skills',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'violet',
    items: ['n8n', 'Generative AI', 'Adobe Photoshop', 'Capcut', 'MS Office', 'Communication', 'Problem Solving', 'Teamwork'],
  },
];

const tokens = {
  indigo:  { card: 'border-indigo-500/15 hover:border-indigo-500/40',   icon: 'bg-indigo-500/10 text-indigo-400',   pill: 'bg-indigo-500/8 text-indigo-300 border-indigo-500/15' },
  emerald: { card: 'border-emerald-500/15 hover:border-emerald-500/40', icon: 'bg-emerald-500/10 text-emerald-400', pill: 'bg-emerald-500/8 text-emerald-300 border-emerald-500/15' },
  blue:    { card: 'border-blue-500/15 hover:border-blue-500/40',       icon: 'bg-blue-500/10 text-blue-400',       pill: 'bg-blue-500/8 text-blue-300 border-blue-500/15' },
  violet:  { card: 'border-violet-500/15 hover:border-violet-500/40',   icon: 'bg-violet-500/10 text-violet-400',   pill: 'bg-violet-500/8 text-violet-300 border-violet-500/15' },
  cyan:    { card: 'border-cyan-500/15 hover:border-cyan-500/40',       icon: 'bg-cyan-500/10 text-cyan-400',       pill: 'bg-cyan-500/8 text-cyan-300 border-cyan-500/15' },
};

export default function Skills() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.sk-label', '.sk-title', '.sk-desc'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.14, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: secRef.current, start: 'top 72%' },
      });
      gsap.from('.sk-card', {
        y: 60, opacity: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: '.sk-grid', start: 'top 75%' },
      });
      gsap.utils.toArray('.sk-card').forEach((card) => {
        gsap.from(card.querySelectorAll('.sk-pill'), {
          scale: 0, opacity: 0, duration: 0.32, stagger: 0.05, ease: 'back.out(2.2)',
          immediateRender: false, scrollTrigger: { trigger: card, start: 'top 80%' },
        });
      });
      gsap.utils.toArray('.sk-icon').forEach((icon, i) => {
        gsap.from(icon, {
          scale: 0, rotation: -30, opacity: 0, duration: 0.5, ease: 'back.out(2)',
          immediateRender: false, scrollTrigger: { trigger: icon.closest('.sk-card'), start: 'top 80%' },
          delay: i * 0.05,
        });
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={secRef} className="py-20 bg-[#0a1019] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-700/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="sk-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Expertise</span>
          <h2 className="sk-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Skills &amp;{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="sk-desc text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A curated stack of technologies I use to deliver scalable, production-ready full-stack applications.
          </p>
        </div>

        <div className="sk-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const t = tokens[skill.color];
            return (
              <div key={i} className={`sk-card bg-[#0c1220] border ${t.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`sk-icon p-2.5 rounded-xl ${t.icon} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-tight">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className={`sk-pill px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 ${t.pill}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
