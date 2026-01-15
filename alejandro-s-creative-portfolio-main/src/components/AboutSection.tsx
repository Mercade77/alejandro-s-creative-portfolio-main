import { Globe, Palette, Code, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Design",
    description: "Figma, Adobe Suite, UI/UX prototyping",
  },
  {
    icon: Code,
    title: "Development",
    description: "HTML, CSS, JavaScript, WordPress",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "SEO, Social Media, Content Creation",
  },
  {
    icon: Briefcase,
    title: "E-Commerce",
    description: "WooCommerce, Product Management",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div>
            <p className="text-primary font-medium mb-4">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bridging Design &<br />
              <span className="gradient-text">Technology</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a 26-year-old professional from Barcelona with a Bachelor's Degree in Tourism 
                (Digital Tourism specialization) from the University of Barcelona, and a recent 
                course in Web Design and Programming from UOC.
              </p>
              <p>
                My journey combines hospitality excellence from Grand Hotel Central with digital 
                creativity—from managing e-commerce platforms at Terrazea to designing complete 
                websites like p0lice.eu for an architecture studio.
              </p>
              <p>
                I thrive at the intersection of user experience, visual design, and functional 
                development. Currently relocating to Vancouver with a Working Holiday Visa, 
                ready for new challenges.
              </p>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--gradient-primary)' }}>
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
