import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { ExternalLink, ArrowRight, X, Layers, Zap, Palette, Gamepad2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  span: string;
  imageActive: string;
  gallery: string[];
  aspect: string;
  icon: any;
}

const projects: Project[] = [
  {
    title: "Modern Kitchen Interior",
    category: "UE5 • Archviz",
    description: "Photorealistic kitchen environment leveraging UE5's Lumen global illumination system for fully dynamic, bounce-lit interior light.",
    details: [
      "Authored custom PBR materials for surface types including ceramic, brushed steel, and lacquered wood.",
      "Optimised scene for real-time playback without sacrificing visual fidelity.",
      "Demonstrated broadcast-ready render quality with Lumen GI."
    ],
    span: "md:col-span-12 lg:col-span-7",
    imageActive: "/projects/kitchen1.jpg",
    gallery: [
      "/projects/kitchen1.jpg"
    ],
    aspect: "aspect-[16/9] lg:aspect-auto",
    icon: Palette,
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7454546901481242624/"
  },
  {
    title: "Luxury Apartment Interior",
    category: "UE5 • Archviz",
    description: "High-end apartment visualisation with layered cinematic lighting and hero-asset detail across furniture and materials.",
    details: [
      "Designed a walkthrough camera sequence using UE5 Sequencer as a broadcast-style flythrough.",
      "Managed full asset pipeline: Blender modelling → UV unwrapping → texture baking → UE5 import.",
      "Sophisticated lighting setup combining static and dynamic sources for realism."
    ],
    span: "md:col-span-12 lg:col-span-5",
    imageActive: "/projects/apartment1.jpg",
    gallery: [
      "/projects/apartment1.jpg",
      "/projects/apartment2.jpg",
      "/projects/apartment3.jpg",
      "/projects/apartment4.jpg",
      "/projects/apartment5.jpg"
    ],
    aspect: "aspect-square",
    icon: Zap,
    linkedin: "https://www.linkedin.com/posts/syed-ahmad-ali-615151337_archviz-interiordesign-3drendering-activity-7398275965774086146-sr_t?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFSPmzEBw-EHkVN9fqNLKF9TfIYhNCb914k"
  },
  {
    title: "Lagoon Scene",
    category: "UE5 • Environmental Design",
    description: "Expansive outdoor environment featuring dynamic water simulation, volumetric atmospheric fog, and sky/sun system.",
    details: [
      "Leveraged UE5 landscape and procedural foliage tools to construct a large-scale ecosystem.",
      "Demonstrated strong command of mood-driven lighting and environmental storytelling.",
      "Integrated realistic water shaders and depth-based atmospheric effects."
    ],
    span: "md:col-span-12 lg:col-span-5",
    imageActive: "/projects/lagoon1.jpg",
    gallery: [
      "/projects/lagoon1.jpg",
      "/projects/lagoon2.jpg",
      "/projects/lagoon3.jpg"
    ],
    aspect: "aspect-[4/5]",
    icon: Layers,
    linkedin: "https://www.linkedin.com/posts/syed-ahmad-ali-615151337_unrealengine5-cinematicrendering-quixelbridge-activity-7368918151800979456-eLXE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSPmzEBw-EHkVN9fqNLKF9TfIYhNCb914k"
  },
  {
    title: "Medieval Valley Shooting Game",
    category: "UE5 • Blueprint Gameplay",
    description: "Fully playable shooting game featuring a hand-crafted medieval valley environment and custom mechanics.",
    details: [
      "Implemented core gameplay systems via Blueprints: target spawning, score tracking, and game states.",
      "Maintained visual and tonal coherence between environment art direction and gameplay design.",
      "Hand-crafted medieval assets and optimized interaction logic."
    ],
    span: "md:col-span-12 lg:col-span-7",
    imageActive: "/projects/medieval1.jpg",
    gallery: [
      "/projects/medieval1.jpg"
    ],
    aspect: "aspect-video lg:aspect-auto",
    icon: Gamepad2,
    linkedin: "https://www.linkedin.com/posts/syed-ahmad-ali-615151337_unrealengine-gamedevelopment-gamingcommunity-activity-7367879171236126720-yNTb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSPmzEBw-EHkVN9fqNLKF9TfIYhNCb914k"
  }
];

export function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="bg-bg py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs text-accent uppercase tracking-[0.3em] font-bold">Project Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-text-primary">
              Real-time <span className="italic">Visualisation</span>
            </h2>
            <p className="mt-4 text-muted max-w-sm font-light">
              Demonstrating expertise in photorealistic real-time environments and gameplay systems within Unreal Engine 5.
            </p>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/syed-ahmad-ali-615151337" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 group"
          >
            <span className="text-sm text-text-primary uppercase tracking-[0.1em] font-medium">Linkedin Portfolio</span>
            <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-bg">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:h-[900px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layoutId={`project-${project.title}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "group relative bg-surface border border-stroke rounded-[1rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500",
                project.span,
                project.aspect
              )}
            >
              <img 
                src={project.imageActive} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />

              <div className="absolute inset-0 bg-surface/95 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-[10px] text-accent uppercase tracking-[0.2em] mb-2 font-bold">{project.category}</div>
                  <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-6">
                    {project.title}
                  </h3>
                  <div className="w-12 h-px bg-stroke mx-auto mb-6" />
                  <button className="flex items-center gap-2 text-xs text-bg bg-accent px-6 py-3 rounded-full hover:scale-105 transition-transform">
                    View Project <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between group-hover:opacity-0 transition-opacity">
                <div className="bg-surface/80 backdrop-blur-sm p-4 rounded-lg border border-stroke/20">
                  <div className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold mb-1">{project.category}</div>
                  <h4 className="text-xl text-text-primary font-display italic">{project.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              className="relative w-full max-w-5xl max-h-[90vh] bg-bg overflow-y-auto rounded-[2rem] shadow-2xl border border-stroke"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center hover:bg-accent hover:text-bg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="text-xs text-accent uppercase tracking-[0.3em] font-bold mb-4">{selectedProject.category}</div>
                  <h2 className="text-4xl md:text-5xl font-display italic text-text-primary mb-6">{selectedProject.title}</h2>
                  
                  <p className="text-muted leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-text-primary">Core Contributions</h4>
                    <ul className="space-y-4">
                      {selectedProject.details.map((detail, i) => (
                        <li key={i} className="flex gap-4 text-sm text-muted">
                          <span className="text-accent">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.linkedin || "https://www.linkedin.com/in/syed-ahmad-ali-615151337"} 
                      target="_blank" 
                      className="px-8 py-3 rounded-full bg-accent text-bg text-sm font-medium hover:scale-105 transition-transform"
                    >
                      View on LinkedIn ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-8 lg:p-12 bg-surface/50">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-stroke aspect-video relative group">
                      <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Journal() {
  return null;
}
