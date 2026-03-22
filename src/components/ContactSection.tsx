import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Shubhamkumar000" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shubham583/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Shubham88359322" },
];

const CONTACT_EMAIL = "shubham25004@gmail.com";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormError(
        `Set VITE_WEB3FORMS_ACCESS_KEY in a .env file (free key at web3forms.com), then restart the dev server. Or email ${CONTACT_EMAIL} directly.`,
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio: message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Could not send message.");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setFormError("Something went wrong. Try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background accents — must not capture clicks (would block form fields underneath) */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[150px]"
        style={{ background: "hsl(var(--primary))" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            Let's work<br />
            <span className="text-gradient-accent">together.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            {formError && (
              <p className="text-sm text-destructive font-body" role="alert">
                {formError}
              </p>
            )}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 disabled:pointer-events-none"
            >
              {submitted ? (
                <>Sent! ✓</>
              ) : loading ? (
                <>Sending…</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center space-y-8"
          >
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-display text-sm">Email</span>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground font-body text-sm hover:text-primary transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-display text-sm">Location</span>
              </div>
              <p className="text-muted-foreground font-body text-sm">Bengaluru, India</p>
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex-1 p-4 rounded-2xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <p className="relative z-10 max-w-6xl mx-auto mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm font-body">
        Built with React, TypeScript & Tailwind — open to collaborations and new challenges.
      </p>
    </section>
  );
};

export default ContactSection;
