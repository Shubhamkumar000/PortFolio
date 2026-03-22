import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 78 },
  { name: "Python", level: 75 },
  { name: "Tailwind CSS", level: 92 },
  { name: "PostgreSQL", level: 70 },
  { name: "MongoDB", level: 72 },
];

const timeline = [
  {
    icon: Sparkles,
    title: "Started Coding Journey",
    description: "Fell in love with building things on the web",
    period: "Early Days",
  },
  {
    icon: GraduationCap,
    title: "Deep Dive into DSA",
    description: "350+ LeetCode problems & algorithmic mastery",
    period: "Ongoing",
  },
  {
    icon: Briefcase,
    title: "Built Real Products",
    description: "E-commerce platforms, AI-powered apps & more",
    period: "Present",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-[120px]" style={{ background: 'hsl(var(--primary))' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Designing with <span className="text-gradient-accent">purpose</span>
            <br />& precision.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Bio + Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-muted-foreground font-body text-base leading-relaxed mb-12"
            >
              <p>
                I'm a developer who believes great products live at the intersection of beautiful design and clean code.
              </p>
              <p>
                I focus on creating interfaces that feel intuitive, performant, and delightful — while keeping the codebase maintainable and scalable.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-border space-y-10">
              {timeline.map(({ icon: Icon, title, description, period }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[calc(1rem+12px)] top-0 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-primary font-display text-xs tracking-widest uppercase">{period}</span>
                  <h4 className="font-display text-lg font-semibold mt-1">{title}</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground font-display text-sm tracking-widest uppercase mb-8">Technologies</p>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="font-display text-sm">{skill.name}</span>
                    <span className="font-display text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(12 90% 72%))' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
