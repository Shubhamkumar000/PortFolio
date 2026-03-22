import { motion } from "framer-motion";
import { Code2, Trophy, Target, Flame, ExternalLink } from "lucide-react";

const topics = [
  "Arrays", "Linked Lists", "Trees", "Graphs",
  "Dynamic Programming", "Backtracking", "Binary Search", "Stacks & Queues",
  "Greedy", "Sorting", "Hashing", "Strings",
];

const DSASection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.07] blur-3xl" style={{ background: 'hsl(var(--primary))' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Competitive Coding</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Problem solver at <span className="text-gradient-accent">heart.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 p-8 rounded-2xl border border-border bg-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.08] blur-[60px]" style={{ background: 'hsl(var(--primary))' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-sm tracking-wider uppercase text-muted-foreground">LeetCode</span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-primary">350</span>
                    <span className="font-display text-2xl font-bold text-primary">+</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mt-1">Problems Solved</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-secondary">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Trophy className="w-3.5 h-3.5 text-primary" />
                      <span className="font-display text-lg font-bold">Top 15%</span>
                    </div>
                    <p className="text-muted-foreground font-body text-xs">Global Rank</p>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Flame className="w-3.5 h-3.5 text-primary" />
                      <span className="font-display text-lg font-bold">100+</span>
                    </div>
                    <p className="text-muted-foreground font-body text-xs">Day Streak</p>
                  </div>
                </div>

                <a
                  href="https://leetcode.com/u/Shubham6259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-display text-xs tracking-wider uppercase hover:opacity-80 transition-opacity"
                >
                  View Profile <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Topics grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 p-8 rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-sm tracking-wider uppercase text-muted-foreground">Topics Covered</span>
            </div>

            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8 max-w-lg">
              I sharpen my algorithmic thinking daily — tackling problems across a wide range of data structures and algorithms.
            </p>

            <div className="flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  className="px-4 py-2.5 rounded-xl border border-border bg-secondary text-secondary-foreground font-display text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DSASection;
