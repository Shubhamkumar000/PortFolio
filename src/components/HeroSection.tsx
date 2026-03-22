import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "Problem Solver", "UI/UX Enthusiast", "AI Explorer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const orbX = useTransform(springX, [0, window.innerWidth], [-40, 40]);
  const orbY = useTransform(springY, [0, window.innerHeight], [-40, 40]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating orb that follows mouse */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{
          background: 'hsl(var(--primary))',
          x: orbX,
          y: orbY,
          top: '20%',
          right: '10%',
        }}
      />

      {/* Secondary orb */}
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full opacity-[0.05] blur-[80px]" style={{ background: 'hsl(12 90% 72%)' }} />

      <div className="relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-6"
        >
          Hi, I'm Shubham
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          <span className="block">Building</span>
          <span className="block text-gradient-accent">digital</span>
          <span className="block">experiences.</span>
        </motion.h1>

        {/* Typing role animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 h-8 flex items-center"
        >
          <span className="text-muted-foreground font-display text-lg md:text-xl tracking-wide">
            {displayed}
          </span>
          <span className="ml-0.5 w-0.5 h-6 bg-primary animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-lg leading-relaxed"
        >
          I craft thoughtful interfaces and robust applications that merge aesthetics with functionality.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-8 mt-10"
        >
          {[
            { value: "350+", label: "LeetCode" },
            { value: "2+", label: "Projects" },
            { value: "8+", label: "Tech Stack" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-12 left-6 md:left-16 lg:left-24"
      >
        <a href="#about" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-display tracking-wider uppercase group">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Scroll to explore
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
