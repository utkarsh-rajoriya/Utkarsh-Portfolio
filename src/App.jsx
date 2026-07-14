import { useEffect, useRef, useState } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Education  from './components/Education';
import Contact    from './components/Contact';
import { gsap, ScrollTrigger } from './utils/gsap';

export default function App() {
  const appRef = useRef(null);
  const [isAssetsReady, setIsAssetsReady] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = ['/assets/utkarsh.png', '/assets/utkarsh_futuredesk.png'];

      await Promise.all(
        imageUrls.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => resolve();
              img.src = src;
            })
        )
      );

      setIsAssetsReady(true);
    };

    preloadImages();

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (hash === '#' || !document.querySelector(hash)) return;
      e.preventDefault();
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: hash, offsetY: 64 },
        ease: 'power4.inOut',
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!isAssetsReady) {
    return (
      <div className="min-h-screen bg-[#060b14] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white mx-auto" />
          <p className="text-lg font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={appRef} className="bg-[#060b14] min-h-screen antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
