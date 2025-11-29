import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium luxury fitness gym in India" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>

      {/* Radial Gold Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,hsl(43_74%_49%_/_0.15),transparent_70%)]" />

      {/* Content */}
      <div className="container relative z-10 px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary gold-shimmer">
            <Dumbbell className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-foreground mb-2">Elevate Your</span>
            <span className="block gold-text-gradient">Strength.</span>
            <span className="block text-foreground mt-2">Elevate Your</span>
            <span className="block gold-text-gradient">Standard.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Experience India's most elite training environment with world-class equipment, 
            certified trainers, and personalized programs designed for champions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate('/membership')}
              className="group"
            >
              Become a Member
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="gold-outline" 
              size="xl"
              onClick={() => navigate('/trainers')}
            >
              Book a Trial
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-1">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Elite Members</div>
            </div>
            <div className="text-center border-x border-primary/30">
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-1">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-1">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
