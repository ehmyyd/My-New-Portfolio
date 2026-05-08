import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const explorations = [
  "/projects/kitchen1.jpg",
  "/projects/apartment1.jpg",
  "/projects/lagoon1.jpg",
  "/projects/medieval1.jpg",
];

export function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on columns
      gsap.to(leftColRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightColRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-bg py-32 overflow-hidden px-6 md:px-12 border-t border-stroke/50">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="md:sticky md:top-1/4 h-fit z-10 text-center md:text-left">
          <div className="text-[10px] text-accent uppercase tracking-[0.3em] mb-4 font-bold">Explorations</div>
          <h2 className="text-4xl md:text-6xl font-display text-text-primary mb-6">
            Visual <span className="italic">playground</span>
          </h2>
          <p className="text-muted max-w-sm font-light mb-8 mx-auto md:mx-0 leading-relaxed">
            Experimenting with abstract lighting, textures, and geometry inside Unreal Engine 5.
          </p>
          <a 
            href="https://www.instagram.com/co.archviz" 
            target="_blank"
            className="inline-block px-10 py-3.5 rounded-full border border-stroke text-xs uppercase tracking-[0.2em] font-medium hover:bg-text-primary hover:text-bg transition-all"
          >
            Instagram Archive
          </a>
        </div>

        {/* Parallax Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          {/* Column 1 */}
          <div ref={leftColRef} className="flex flex-col gap-6 md:gap-12 mt-20">
            {explorations.slice(0, 2).map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700 bg-surface shadow-md">
                <img src={src} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          
          {/* Column 2 */}
          <div ref={rightColRef} className="flex flex-col gap-6 md:gap-12">
            {explorations.slice(2, 4).map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700 bg-surface shadow-md">
                <img src={src} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { label: "Duolingo English Score", value: "135/160" },
    { label: "UE5 Environment Focus", value: "Lumen/Nanite" },
    { label: "Current Semester", value: "4th" }
  ];

  return (
    <section className="bg-surface py-32 px-6 border-y border-stroke/50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="group">
            <div className="text-4xl md:text-6xl font-display italic text-accent mb-4 transition-transform group-hover:scale-110 duration-500">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted uppercase tracking-[0.3em] font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
