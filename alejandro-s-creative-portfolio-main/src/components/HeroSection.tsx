import { ArrowDown, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-glow" style={{ background: 'var(--gradient-primary)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15 animate-glow" style={{ background: 'var(--gradient-primary)', animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 md:order-1">
            <div className="animate-slide-up">
              <p className="text-primary font-medium mb-4 flex items-center gap-2">
                <MapPin size={16} />
                Barcelona → Vancouver
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Alejandro</span>
                <br />
                Mercadé
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
                Web Designer & Digital Creative crafting beautiful, functional digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 animate-fade-in delay-400">
              <div>
                <p className="text-3xl font-display font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold gradient-text">5</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
            </div>
          </div>

          {/* Right - Profile image */}
          <div className="order-1 md:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-box animate-float">
                <img
                  src={profileImage}
                  alt="Alejandro Mercadé"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
