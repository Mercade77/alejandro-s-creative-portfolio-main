import { ExternalLink, Code, Palette } from "lucide-react";

const projects = [
  {
    title: "P0lice Architecture Studio",
    description:
      "Complete website design and development for an architecture studio. Handled structure, visual identity, UX design, and full implementation.",
    url: "https://p0lice.eu",
    tags: ["Web Design", "UX/UI", "Development", "Branding"],
    features: ["Custom Design", "Responsive", "Visual Identity"],
  },
  {
    title: "Terrazea E-Commerce",
    description:
      "Managed and maintained e-commerce platform for an exterior design company. Product uploads, website maintenance, and customer experience optimization.",
    url: "https://www.terrazea.com",
    tags: ["WordPress", "WooCommerce", "E-Commerce", "Product Management"],
    features: ["Product Catalog", "E-Commerce", "SEO Optimization"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 md:p-10 hover-lift group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 ? (
                      <Palette className="text-primary" size={24} />
                    ) : (
                      <Code className="text-primary" size={24} />
                    )}
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-muted-foreground truncate">
                      {project.url}
                    </span>
                  </div>
                  <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                        <ExternalLink size={28} className="text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">Click to visit live site</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-xs text-muted-foreground">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
