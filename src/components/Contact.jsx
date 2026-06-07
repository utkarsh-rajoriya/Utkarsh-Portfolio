import { useRef, useEffect } from 'react';
import { gsap } from '../utils/gsap';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'utkarshrajoriya00@gmail.com',
    href: 'mailto:utkarshrajoriya00@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 80571 89081',
    href: 'tel:+918057189081',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Agra, India',
    href: null,
  },
];

export default function Contact() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.ct-label', '.ct-title', '.ct-desc'], {
        y: 35, opacity: 0, duration: 0.75, stagger: 0.14, ease: 'power3.out',
        immediateRender: false, scrollTrigger: { trigger: secRef.current, start: 'top 72%' },
      });
      gsap.from('.ct-card', {
        y: 50, opacity: 0, scale: 0.92, duration: 0.65, stagger: 0.12, ease: 'back.out(1.6)',
        immediateRender: false, scrollTrigger: { trigger: '.ct-cards', start: 'top 75%' },
      });
      gsap.utils.toArray('.ct-icon').forEach((icon, i) => {
        gsap.from(icon, {
          scale: 0, rotation: 15, duration: 0.5, ease: 'back.out(2.5)',
          immediateRender: false, scrollTrigger: { trigger: icon.closest('.ct-card'), start: 'top 80%' },
          delay: i * 0.1 + 0.2,
        });
      });
      gsap.from('.ct-btn', {
        y: 30, opacity: 0, scale: 0.88, duration: 0.6, stagger: 0.12, ease: 'back.out(1.8)',
        immediateRender: false, scrollTrigger: { trigger: '.ct-ctas', start: 'top 80%' },
      });
      gsap.from('.ct-footer', {
        opacity: 0, y: 15, duration: 0.6, ease: 'power2.out',
        immediateRender: false, scrollTrigger: { trigger: '.ct-footer', start: 'top 92%' },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={secRef} className="py-20 bg-[#0a1019] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-700/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-700/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ct-label inline-block text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Contact</span>
          <h2 className="ct-title text-4xl sm:text-5xl font-extrabold text-white mt-3">
            Let's{' '}
            <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="ct-desc text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            I'm open to full-time roles, freelance work, and exciting collaborations.
            Drop a message — I'd love to hear from you!
          </p>
        </div>

        <div className="ct-cards grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {contactItems.map((item, i) => (
            <div key={i} className="ct-card group bg-[#0c1220] border border-indigo-500/10 hover:border-indigo-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
              <div className="ct-icon inline-flex p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-4 group-hover:bg-indigo-500/18 transition-colors">
                {item.icon}
              </div>
              <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-2">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-gray-300 hover:text-indigo-400 transition-colors text-sm break-all leading-relaxed">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="ct-ctas flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:utkarshrajoriya00@gmail.com"
            className="ct-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </a>
          <a
            href="https://linkedin.com/in/utkarsh-rajoriya"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-indigo-500/25 hover:border-indigo-400/60 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <div className="ct-footer mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-700 text-sm">
          © 2026 <span className="text-gray-500 font-medium">Utkarsh Rajoriya</span> · Built with React &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
