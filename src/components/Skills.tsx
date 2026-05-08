import { motion } from 'motion/react';
import { Box, Code2, Cpu, Globe, Layers, LucideIcon, Palette, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Real-Time Engine",
    icon: Zap,
    skills: ["Unreal Engine 5", "Lumen & Nanite", "Blueprints", "Sequencer"]
  },
  {
    title: "Rendering",
    icon: Palette,
    skills: ["PBR Materials", "Lighting Design", "Post-Processing", "Glass Shaders"]
  },
  {
    title: "3D Software",
    icon: Box,
    skills: ["Blender Modelling", "UV Unwrapping", "Texture Baking", "Cloth & Fluid Sim"]
  },
  {
    title: "Pipeline",
    icon: Layers,
    skills: ["Blender-to-Unreal", "Material Baking", "FBX Export", "Asset Optimization"]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "x86 MASM Assembly", "HTML / CSS / JS"]
  },
  {
    title: "Soft Skills",
    icon: Globe,
    skills: ["Creative Direction", "Visual Storytelling", "Team Leadership"]
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English (Professional)", "Urdu (Native)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="bg-bg py-24 px-6 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs text-accent uppercase tracking-[0.3em] font-bold">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary">
              Technical <span className="italic">Skillset</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-stroke hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-bg border border-stroke flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-bg transition-colors">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display italic text-text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="text-[10px] px-3 py-1 rounded-full bg-bg border border-stroke text-muted uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="bg-bg py-24 px-6 border-t border-stroke/50">
       <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs text-accent uppercase tracking-[0.3em] font-bold">Academics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary">
              Education <span className="italic">History</span>
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12 border-l-2 border-stroke"
          >
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-bg" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h3 className="text-2xl font-display italic text-text-primary">BS Computer Games Development</h3>
              <span className="text-[10px] px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold uppercase tracking-widest border border-accent/20">
                2024 – Present
              </span>
            </div>
            <div className="text-lg font-medium text-text-primary mb-2">Air University, Islamabad</div>
            <div className="text-xs text-muted font-bold uppercase tracking-widest mb-6">Currently in 4th Semester</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold mb-4">Core Coursework</h4>
                <ul className="grid grid-cols-1 gap-2 text-sm text-muted">
                  <li>• Real-Time Rendering</li>
                  <li>• 3D Modelling & Animation</li>
                  <li>• Game Engine Architecture</li>
                  <li>• AI for Games</li>
                  <li>• Data Structures</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold mb-4">Extracurriculars</h4>
                <ul className="space-y-4">
                  <li className="text-sm text-muted">
                    <span className="block text-text-primary font-bold">Gameplay Head</span>
                    Air University Games Society
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative pl-8 md:pl-12 border-l-2 border-stroke"
          >
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-stroke border-4 border-bg" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h3 className="text-2xl font-display italic text-text-primary">Intermediate</h3>
              <span className="text-[10px] px-4 py-1.5 rounded-full bg-stroke/10 text-muted font-bold uppercase tracking-widest border border-stroke/20">
                2022 – 2024
              </span>
            </div>
            <div className="text-lg font-medium text-text-primary">GCU Lahore</div>
            <div className="text-xs text-muted font-bold uppercase tracking-widest mt-2">Literary President</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
