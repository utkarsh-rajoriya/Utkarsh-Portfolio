import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const experiences = [
  {
    company: 'Futuredesks Services',
    role: 'Software Engineer',
    type: 'Full-time',
    duration: 'Nov 2025 – Present',
    isCurrent: true,
    color: 'indigo',
    points: [
      'Architect and engineer scalable software designs and high-performance client-side interfaces utilizing React.js.',
      'Collaborate with cross-functional development teams to build secure, modular components and robust application workflows.',
      'Optimize web infrastructure to enhance user interaction, system reliability, and responsive design across platforms.',
    ],
  },
  {
    company: 'Self-Employed (Fiverr, Contra)',
    role: 'Freelance Web Developer & UI Designer',
    type: 'Freelance',
    duration: '2024 – Present',
    isCurrent: true,
    color: 'emerald',
    points: [
      'Architected full-scale SaaS platforms, focusing on clean layout hierarchies and streamlined application logic.',
      'Developed highly interactive, visually responsive custom web concepts featuring dynamic front-end state management.',
      'Maintained a verified project portfolio on Contra demonstrating industry-recognized quality in product delivery.',
    ],
  },
  {
    company: 'Educational Institute',
    role: 'Computer Tutor',
    type: 'Part-time',
    duration: '1 Year',
    isCurrent: false,
    color: 'blue',
    points: [
      'Trained students in Java, JavaScript, and C; mentored coding labs to strengthen debugging and logic skills.',
    ],
  },
];

export default function Experience() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = { trigger: secRef.current, start: 'top 70%' };

      gsap.from(['.ex-label', '.ex-title'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out',
        immediateRender: false, scrollTrigger: trig,
      });
      gsap.from('.ex-line', {
        scaleY: 0, transformOrigin: 'top center', duration: 1.6, ease: 'power2.inOut',
        immediateRender: false, scrollTrigger: trig,
      });
      gsap.from('.ex-dot', {
        scale: 0, duration: 0.5, stagger: 0.3, ease: 'back.out(2.5)',
        immediateRender: false, scrollTrigger: trig, delay: 0.3,
      });
      gsap.from('.ex-card', {
        x: 80, opacity: 0, duration: 0.75, stagger: 0.22, ease: 'power3.out',
        immediateRender: false, scrollTrigger: trig, delay: 0.2,
      });
      gsap.utils.toArray('.ex-card').forEach((card) => {
        gsap.from(card.querySelectorAll('.ex-bullet'), {
          x: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out',
          immediateRender: false, scrollTrigger: { trigger: card, start: 'top 78%' },
        });
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  const colorMap = {
    indigo:  { border: 'border-indigo-500 bg-indigo-500/10',  icon: 'text-indigo-400',  card: 'border-indigo-500/15 hover:border-indigo-500/35 hover:shadow-indigo-500/5',  dot: 'bg-indigo-400',  role: 'text-indigo-400' },
    emerald: { border: 'border-emerald-500 bg-emerald-500/10',icon: 'text-emerald-400', card: 'border-emerald-500/15 hover:border-emerald-500/35 hover:shadow-emerald-500/5',dot: 'bg-emerald-400', role: 'text-emerald-400' },
    blue:    { border: 'border-blue-500 bg-blue-500/10',      icon: 'text-blue-400',    card: 'border-blue-500/15 hover:border-blue-500/35 hover:shadow-blue-500/5',          dot: 'bg-blue-400',    role: 'text-blue-400' },
  };

  return (
    <section id="experience" ref={secRef} className="py-10 bg-[#060b14] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-indigo-700/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ex-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Career</span>
          <h2 className="ex-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Work{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="ex-line absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-indigo-500 via-emerald-500/50 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <div key={i} className="flex gap-8 group">
                  <div className="relative shrink-0 z-10">
                    <div className={`ex-dot w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${c.border}`}>
                      <svg className={`w-5 h-5 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {exp.isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400" />
                      </span>
                    )}
                  </div>

                  <div className={`ex-card flex-1 bg-[#0c1220] border rounded-2xl p-6 mb-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${c.card}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className={`text-sm font-semibold ${c.role}`}>{exp.role}</p>
                          <span className="text-gray-600 text-xs">·</span>
                          <span className="text-gray-500 text-xs">{exp.type}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          exp.isCurrent
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {exp.isCurrent && <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />}
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="ex-bullet flex gap-3 text-sm text-gray-400 leading-relaxed">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
