import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const stats = [
  { num: 2,  suffix: '+', label: 'Years Experience', icon: '⚡' },
  { num: 8,  suffix: '+', label: 'Projects Built',   icon: '🚀' },
  { num: 3,  suffix: '',  label: 'Tech Roles',        icon: '💼' },
  { num: 2026, suffix: '', label: 'BCA Graduate',     icon: '🎓' },
];

const tags = ['React.js', 'Java', 'Spring Boot', 'Node.js', 'MongoDB', 'MySQL', 'Figma', 'REST APIs', 'Tailwind CSS'];

export default function About() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.ab-label', '.ab-title'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: secRef.current, start: 'top 72%' },
      });

      gsap.from('.ab-img', {
        clipPath: 'inset(0 100% 0 0)', duration: 1.3, ease: 'power3.inOut',
        immediateRender: false, scrollTrigger: { trigger: '.ab-img', start: 'top 75%' },
      });
      gsap.from('.ab-img-tag', {
        y: 25, opacity: 0, scale: 0.85, duration: 0.6, ease: 'back.out(1.8)',
        immediateRender: false, scrollTrigger: { trigger: '.ab-img', start: 'top 65%' },
      });

      gsap.from('.ab-p', {
        y: 30, opacity: 0, duration: 0.65, stagger: 0.18, ease: 'power2.out',
        immediateRender: false, scrollTrigger: { trigger: '.ab-text', start: 'top 75%' },
      });

      gsap.from('.ab-tag', {
        scale: 0, opacity: 0, duration: 0.35, stagger: 0.045, ease: 'back.out(2)',
        immediateRender: false, scrollTrigger: { trigger: '.ab-tags', start: 'top 80%' },
      });

      gsap.from('.ab-stat', {
        y: 45, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.6)',
        immediateRender: false, scrollTrigger: { trigger: '.ab-stats', start: 'top 82%' },
      });

      gsap.utils.toArray('.ab-num').forEach((el) => {
        const end = parseInt(el.dataset.value, 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end, duration: 2.2, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(obj.val); },
          immediateRender: false, scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={secRef} className="py-20 bg-[#060b14] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ab-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
          <h2 className="ab-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Full Stack{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-600/25 to-emerald-500/15 rounded-3xl rotate-3 scale-105" />
              <img
                src="/assets/utkarsh_futuredesk.png"
                alt="Utkarsh at work"
                className="ab-img relative w-full h-full object-cover rounded-3xl border border-indigo-500/20"
                style={{ clipPath: 'inset(0 0% 0 0)' }}
              />
              <div className="ab-img-tag absolute -bottom-4 -right-4 bg-[#0c1220] border border-indigo-500/20 rounded-2xl px-4 py-3 shadow-2xl">
                <p className="text-indigo-400 text-xs font-semibold">Currently at</p>
                <p className="text-white font-bold text-sm">Futuredesks Services</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="ab-text">
            <p className="ab-p text-gray-400 leading-relaxed mb-5 text-[15px]">
              I'm a <span className="text-indigo-400 font-medium">Full-stack Software Engineer</span> based in{' '}
              <span className="text-indigo-400 font-medium">Agra, India</span> with hands-on experience delivering
              scalable web applications from architecture to deployment. I currently work at{' '}
              <span className="text-indigo-400 font-medium">Futuredesks Services</span>, building high-performance
              React.js interfaces and robust Spring Boot backends for production systems.
            </p>
            <p className="ab-p text-gray-500 leading-relaxed mb-8 text-sm">
              My expertise spans the full product lifecycle — from system architecture and REST API design to
              responsive frontend development and secure platform integrations. I also freelance on Fiverr and Contra,
              building SaaS platforms and custom web concepts with a strong focus on UI quality and clean code.
            </p>

            <div className="ab-tags flex flex-wrap gap-2 mb-10">
              {tags.map((t) => (
                <span key={t} className="ab-tag px-3 py-1.5 bg-indigo-500/8 border border-indigo-500/15 text-indigo-300 text-xs font-medium rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="ab-stats grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="ab-stat bg-[#0a1019] border border-indigo-500/10 hover:border-indigo-500/25 rounded-2xl p-4 text-center transition-colors duration-300">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-3xl font-extrabold text-white mb-1 flex items-baseline justify-center gap-0.5">
                    <span className="ab-num" data-value={s.num}>0</span>
                    <span className="text-indigo-400 text-2xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
