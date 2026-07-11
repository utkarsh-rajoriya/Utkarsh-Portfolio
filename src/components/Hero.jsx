import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl
        .from('.h-badge',    { y: -30, opacity: 0, scale: 0.75, duration: 0.7 }, 0.25)
        .from('.h-hi',       { y: 70, opacity: 0, duration: 0.75 }, 0.5)
        .from('.h-char', { y: '100%', duration: 0.55, stagger: 0.04, ease: 'power3.out' }, 0.65)
        .from('.h-sub',      { y: 28, opacity: 0, duration: 0.6 }, 1.3)
        .from('.h-desc',     { y: 28, opacity: 0, duration: 0.6 }, 1.47)
        .from('.h-chip',     { x: -32, opacity: 0, duration: 0.5, stagger: 0.1 }, 1.62)
        .from('.h-cta',      { y: 24, opacity: 0, duration: 0.55, stagger: 0.12, ease: 'back.out(1.8)' }, 1.85)
        .from('.h-social',   { y: 20, opacity: 0, duration: 0.5 }, 2.05)
        .from('.h-img-wrap', { scale: 0.72, opacity: 0, rotation: 8, duration: 1.3, ease: 'power2.out' }, 0.35)
        .from('.fb',         { scale: 0, opacity: 0, duration: 0.55, stagger: 0.14, ease: 'back.out(2.8)' }, 1.4);

      gsap.to('.h-blob-1', { x: 70, y: -50, scale: 1.25, duration: 13, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.h-blob-2', { x: -60, y: 70, scale: 0.8,  duration: 16, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 6 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen bg-[#060b14] flex items-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.28) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* Blobs */}
      <div className="h-blob-1 absolute top-16 -left-20 w-137.5 h-137.5 bg-indigo-700/14 rounded-full blur-3xl pointer-events-none" />
      <div className="h-blob-2 absolute bottom-0 right-0 w-105 h-105 bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* ── Text column ── */}
        <div className="h-text-col mt-2 order-2 lg:order-1">
          <div className="h-badge inline-flex items-center gap-2 px-3.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold mb-4 lg:mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to new opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white mb-3 lg:mb-5 leading-[1.06] tracking-tight">
            <div className="overflow-hidden">
              <span className="h-hi inline-block">Hi, I'm</span>
            </div>
            {/* Utkarsh — per-char mask reveal */}
            <div className="block pt-1 pb-0.5">
              {'Utkarsh'.split('').map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="h-char inline-block animate-gradient bg-linear-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    {ch}
                  </span>
                </span>
              ))}
            </div>
            {/* Rajoriya — per-char mask reveal */}
            <div className="block pb-1">
              {'Rajoriya'.split('').map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="h-char inline-block animate-gradient bg-linear-to-r from-blue-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                    {ch}
                  </span>
                </span>
              ))}
            </div>
          </h1>

          <p className="h-sub text-lg sm:text-xl text-gray-300 font-semibold mb-3">
            Software Engineer
          </p>
          <p className="h-desc text-gray-500 mb-5 lg:mb-8 max-w-lg leading-relaxed text-[15px]">
            Results-driven Full-Stack Engineer specializing in scalable web applications
            and AI-integrated solutions using React.js, Node.js, and Java Spring Boot.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3 mb-5 lg:mb-9 text-xs text-gray-400">
            {[
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', text: 'Noida, Uttar Pradesh' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'utkarshrajoriya00@gmail.com' },
              { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+91 80571 89081' },
            ].map((c, i) => (
              <span key={i} className="h-chip flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                </svg>
                {c.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6 lg:mb-10">
            <a href="#projects" className="h-cta px-7 py-3.5 bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 text-sm">
              View Projects
            </a>
            <a href="#contact" className="h-cta px-7 py-3.5 border border-indigo-500/30 hover:border-indigo-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm">
              Get In Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="h-social flex items-center gap-4">
            <span className="text-gray-600 text-xs">Find me on</span>
            {[
              {
                label: 'LinkedIn', href: 'https://linkedin.com/in/utkarsh-rajoriya',
                hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
                d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
              {
                label: 'GitHub', href: 'https://github.com/utkarsh-rajoriya',
                hover: 'hover:text-white hover:border-white/30',
                d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 ${s.hover}`}
                aria-label={s.label}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Image column ── */}
        <div className="h-img-col order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none">
              <div className="w-full h-full rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 55%, rgba(99,102,241,0.7) 78%, transparent 100%)' }} />
            </div>
            <div className="absolute inset-4 bg-linear-to-br from-indigo-600/30 to-emerald-500/20 rounded-full blur-2xl animate-glow" />
            <div className="h-img-wrap relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-indigo-500/30 m-4">
              <img src="/assets/utkarsh.png" alt="Utkarsh Rajoriya" className="w-full h-full object-cover" />
            </div>

            <div className="fb fb-1 absolute -top-3 right-4 px-3 py-1.5 bg-[#0c1220] border border-indigo-500/30 rounded-xl text-xs text-indigo-300 font-semibold shadow-xl whitespace-nowrap">React.js</div>
            <div className="fb fb-2 absolute -bottom-3 left-2 px-3 py-1.5 bg-[#0c1220] border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-semibold shadow-xl whitespace-nowrap">Spring Boot</div>
            <div className="fb fb-3 absolute top-1/3 -right-14 px-3 py-1.5 bg-[#0c1220] border border-blue-500/30 rounded-xl text-xs text-blue-300 font-semibold shadow-xl whitespace-nowrap">Node.js</div>
            <div className="fb fb-4 absolute top-2/3 -left-14 px-3 py-1.5 bg-[#0c1220] border border-violet-500/30 rounded-xl text-xs text-violet-300 font-semibold shadow-xl whitespace-nowrap">Full Stack</div>
          </div>
        </div>
      </div>

      <div className="scroll-ind absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-indigo-500/50 to-transparent" />
      </div>
    </section>
  );
}
