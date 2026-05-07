import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollToPlugin);

const roles = ["Unreal Engine Developer", "3D Generalist", "Real-Time Visualizer"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Role Cycling
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    // Scroll listener for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP Entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(".name-reveal", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.5
    })
    .to(".blur-in", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1,
      stagger: 0.1
    }, "-=0.8");

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: id, ease: "power3.inOut" });
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-bg">
      {/* Background Pattern instead of dark video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/20 to-bg" />
      </div>

      {/* Navbar Overlay */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-500",
        scrolled ? "translate-y-0" : "-translate-y-0"
      )}>
        <div className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-stroke/20 bg-surface/80 px-2 py-2 transition-all duration-300",
          scrolled && "shadow-lg shadow-black/5 bg-surface/95"
        )}>
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="group relative w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-transform hover:scale-110"
          >
            <div className="absolute inset-0 bg-accent group-hover:rotate-180 transition-transform duration-700" />
            <div className="absolute inset-[1px] rounded-full bg-surface flex items-center justify-center">
              <span className="font-display italic text-sm text-text-primary uppercase">SN</span>
            </div>
          </button>

          <div className="hidden md:block w-px h-5 bg-stroke/10 mx-2" />

          {/* Links */}
          <div className="flex gap-1">
            {[
              { label: "Home", id: "#home" },
              { label: "Work", id: "#work" },
              { label: "Education", id: "#education" },
              { label: "Skills", id: "#skills" }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-[11px] sm:text-xs rounded-full px-3 sm:px-4 py-1.5 transition-all font-medium text-muted hover:text-text-primary hover:bg-bg/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-stroke/10 mx-2" />

          {/* Call to action */}
          <a 
            href="mailto:syedahmadali1610@gmail.com"
            className="group relative text-[11px] sm:text-xs rounded-full px-4 py-1.5 text-bg overflow-hidden font-medium"
          >
            <div className="absolute inset-0 -z-10 bg-accent" />
            <span className="flex items-center gap-1.5">
              Contact <span className="text-[10px]">↗</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div id="home" className="relative z-10 max-w-4xl pt-20">
        <div className="blur-in text-[10px] md:text-xs text-accent uppercase tracking-[0.3em] mb-6 font-bold">
          BS COMPUTER GAMES DEVELOPMENT
        </div>
        
        <h1 ref={nameRef} className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-8 select-none">
          Syed Ahmad <br />
          <span className="opacity-80">Ali Naqvi</span>
        </h1>

        <div className="blur-in text-lg md:text-2xl font-light text-text-primary/90 mb-6 h-8 flex items-center justify-center gap-2">
          A 
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-display italic text-accent"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
          lives in Islamabad.
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-10 leading-relaxed font-light">
          UE5 Developer and 3D Generalist producing photorealistic real-time environments. 
          Gameplay Head at Air University Games Society. Specialized in Lumen/Nanite and cinematic lighting.
        </p>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection("#work")}
            className="group relative px-10 py-4 rounded-full text-sm font-medium bg-text-primary text-bg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
          >
            <span>Project Gallery</span>
          </button>
          
          <a 
            href="https://www.linkedin.com/in/syed-ahmad-ali-615151337"
            target="_blank"
            className="group px-10 py-4 rounded-full text-sm font-medium border border-stroke bg-surface text-text-primary hover:bg-bg hover:scale-105 transition-all shadow-sm"
          >
            <span>Download CV ↗</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] text-muted uppercase tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-stroke/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
