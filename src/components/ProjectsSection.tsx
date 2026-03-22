import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectPowergrid from "@/assets/project-powergrid.jpg";

const isValidLiveUrl = (url: string) => Boolean(url && url !== "#");

const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Marketplace",
    description:
      "A complete e-commerce solution with product management, shopping cart, user authentication, and payment integration built with a modern JavaScript stack.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    image: projectEcommerce,
    liveUrl: "https://e-commerce-platform-b3x2.vercel.app/",
    githubUrl: "https://github.com/Shubhamkumar000/E-commerce-platform",
    featured: true,
  },
  {
    title: "Power Grid AI",
    subtitle: "AI-Powered Forecasting",
    description:
      "An AI system that predicts India's electricity demand with advanced machine learning — preventing blackouts, reducing waste, and optimizing renewable energy integration.",
    tags: ["Next.js", "AI/ML", "Python", "Data Analytics"],
    image: projectPowergrid,
    liveUrl: "https://power-grid-iota.vercel.app/",
    githubUrl: "https://github.com/Shubhamkumar000/PowerGrid",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Selected <span className="text-gradient-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border mb-6 bg-muted/30">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-contain object-center"
                  loading="lazy"
                />

                {/* Overlay links */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-background/70 backdrop-blur-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {isValidLiveUrl(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-background/70 backdrop-blur-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                  <p className="text-primary font-display text-xs tracking-widest uppercase mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                    {isValidLiveUrl(project.liveUrl) ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-sm text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={`Open ${project.title} live site`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    ) : (
                      <ArrowUpRight className="w-5 h-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 text-primary" aria-hidden />
                    )}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm md:text-base max-w-xl leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-display bg-secondary/80 backdrop-blur-sm text-secondary-foreground px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
