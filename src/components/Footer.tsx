import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background Video
    if (videoRef.current) {
      const hlsUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsUrl;
      }
    }

    // Marquee GSAP
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none"
      });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-24 pb-12 overflow-hidden px-6 md:px-12">
      {/* Background Video (Flipped & Dimmed) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover brightness-[0.8] grayscale scale-y-[-1] opacity-20"
        />
        <div className="absolute inset-0 bg-bg/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap mb-24 opacity-40">
          <div ref={marqueeRef} className="inline-block text-[10vw] font-display uppercase italic tracking-[0.1em] text-accent/20">
            {Array(10).fill("UNREAL ENGINE 5 • ARCHITECTURE • CINEMATICS • ").join("") }
          </div>
        </div>

        {/* CTA */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display text-text-primary mb-12">
            Let's create <br />
            <span className="italic text-accent">something surreal.</span>
          </h2>
          
          <a
            href="mailto:syedahmadali1610@gmail.com"
            className="group relative inline-flex items-center gap-6 px-12 py-5 rounded-full bg-accent text-bg text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            <span>syedahmadali1610@gmail.com</span>
            <span className="text-xl">↗</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stroke/50 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-accent uppercase tracking-[0.3em] font-bold">Open for collaborations</span>
          </div>

          <div className="flex gap-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-ahmad-ali-615151337" },
              { label: "GitHub", href: "https://github.com/ehmyyd" },
              { label: "Instagram", href: "https://www.instagram.com/co.archviz" }
            ].map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-[10px] text-muted uppercase tracking-[0.1em] font-medium">
            © 2026 Syed Ahmad Ali Naqvi.
          </div>
        </div>
      </div>
    </footer>
  );
}
