import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alexmercadesolanes@gmail.com",
    href: "mailto:alexmercadesolanes@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+34 689 119 836",
    href: "tel:+34689119836",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Alejandro Mercadé Solanes",
    href: "https://www.linkedin.com/in/alejandro-mercad%C3%A9-solanes/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Barcelona → Vancouver",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Available in Vancouver from February 2nd. I'm excited to bring my skills in web design, 
            digital marketing, and creative development to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <div key={item.label} className="glass-card p-6 hover-lift">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:alexmercadesolanes@gmail.com"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Send size={20} />
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
};
