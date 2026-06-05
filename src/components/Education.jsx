import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const education = [
  {
    institution: 'Dr. Bhimrao Ambedkar University',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Software Engineering',
    duration: 'Graduated: Feb 2026',
    location: 'Agra',
    isCurrent: false,
    icon: '🎓',
    color: 'indigo',
  },
  {
    institution: "Colonel's Brightland Public School",
    degree: 'Matriculation & Intermediate',
    field: 'CBSE',
    duration: 'Completed',
    location: 'Agra',
    isCurrent: false,
    icon: '🏫',
    color: 'emerald',
  },
];

export default function Education() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.ed-label', '.ed-title'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: secRef.current, start: 'top 72%' },
      });
      gsap.from('.ed-card-0', {
        x: -70, opacity: 0, duration: 0.8, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: '.ed-list', start: 'top 75%' },
      });
      gsap.from('.ed-card-1', {
        x: 70, opacity: 0, duration: 0.8, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: '.ed-list', start: 'top 75%' },
        delay: 0.15,
      });
      gsap.utils.toArray('.ed-icon').forEach((icon, i) => {
        gsap.from(icon, {
          scale: 0, rotation: -20, duration: 0.6, ease: 'back.out(2.5)',
          immediateRender: false, scrollTrigger: { trigger: icon.closest('.ed-card'), start: 'top 80%' },
          delay: i * 0.1 + 0.2,
        });
      });
      gsap.from('.ed-badge', {
        scale: 0.5, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(2)',
        immediateRender: false, scrollTrigger: { trigger: '.ed-list', start: 'top 72%' },
        delay: 0.35,
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={secRef} className="py-28 bg-[#060b14] relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-indigo-700/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ed-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Education</span>
          <h2 className="ed-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Academic{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </div>

        <div className="ed-list space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`ed-card ed-card-${i} group flex gap-5 sm:gap-7 items-start bg-[#0c1220] border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                edu.color === 'indigo'
                  ? 'border-indigo-500/15 hover:border-indigo-500/35 hover:shadow-indigo-500/5'
                  : 'border-emerald-500/15 hover:border-emerald-500/35 hover:shadow-emerald-500/5'
              }`}
            >
              <div className={`ed-icon text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                edu.color === 'indigo' ? 'bg-indigo-500/10' : 'bg-emerald-500/10'
              }`}>
                {edu.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{edu.institution}</h3>
                    <p className={`font-semibold text-sm mt-1 ${edu.color === 'indigo' ? 'text-indigo-400' : 'text-emerald-400'}`}>
                      {edu.degree}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{edu.field}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="ed-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-500/10 text-gray-400 border border-gray-500/20">
                      {edu.duration}
                    </span>
                    <p className="text-gray-600 text-xs mt-1.5">{edu.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
