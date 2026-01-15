const experiences = [
  {
    title: "Real Estate Agency",
    company: "VIP Pisos",
    period: "Sep 2025 - Jan 2026",
    description:
      "Managing property inquiries, scheduling visits, preparing listings, supporting agents with documentation, and providing customer service.",
  },
  {
    title: "Front Desk Receptionist",
    company: "Grand Hotel Central ★★★★★",
    period: "Jun 2022 - Mar 2025",
    description:
      "Check-in/check-out, room assignments, daily reports, outlet closing, upselling and cross-selling in a prestigious 5-star hotel environment.",
  },
  {
    title: "Digital Marketing Intern",
    company: "TastingIN",
    period: "Feb 2022 - May 2022",
    description:
      "Social media content creation, WordPress website management, product uploads for a wine events company.",
  },
  {
    title: "Event Manager & Content Creator",
    company: "Linktoesports",
    period: "Jun 2019 - Feb 2022",
    description:
      "Created digital content with Photoshop and Premiere, managed social media, organized online and in-person gaming tournaments.",
  },
];

const education = [
  {
    title: "Web Design & Programming",
    institution: "Universitat Oberta de Catalunya (UOC)",
    year: "2024",
  },
  {
    title: "Bachelor's Degree in Tourism",
    institution: "University of Barcelona",
    subtitle: "Specialization in Digital Tourism Business",
    year: "2018 - 2022",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Background</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-1 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
              Work Experience
            </h3>
            <div className="relative">
              <div className="timeline-line" />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-14">
                    <div className="timeline-dot" />
                    <div className="glass-card p-6 hover-lift">
                      <p className="text-primary text-sm font-medium mb-1">{exp.period}</p>
                      <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-1 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <p className="text-primary text-sm font-medium mb-1">{edu.year}</p>
                  <h4 className="font-display font-semibold text-lg">{edu.title}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  {edu.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{edu.subtitle}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Additional highlight */}
            <div className="mt-8 glass-card p-6 border-primary/30">
              <h4 className="font-display font-semibold mb-3">International Experience</h4>
              <p className="text-sm text-muted-foreground">
                Worked and studied English in Sydney, Australia (2018-2019). Developed strong 
                cross-cultural communication skills and adaptability in international environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
