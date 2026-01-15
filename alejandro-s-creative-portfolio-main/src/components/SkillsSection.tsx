const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "WordPress & WooCommerce", level: 85 },
  { name: "Figma", level: 80 },
  { name: "Adobe Photoshop", level: 75 },
  { name: "Adobe Illustrator", level: 70 },
  { name: "UI/UX Design", level: 80 },
  { name: "Digital Marketing", level: 75 },
];

const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Premiere Pro",
  "Canva",
  "WordPress",
  "Elementor",
  "WooCommerce",
  "VS Code",
  "GitHub",
  "Microsoft Office",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">What I Do</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 glass-card text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Languages */}
            <h3 className="font-display text-xl font-semibold mt-12 mb-6">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <p className="font-medium">Spanish & Catalan</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div className="glass-card p-4">
                <p className="font-medium">English</p>
                <p className="text-sm text-muted-foreground">High Level (Degree in English)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
