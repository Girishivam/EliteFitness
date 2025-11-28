import { Award, Shield, Target, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Equipment",
    description: "State-of-the-art imported machines and free weights for optimal results"
  },
  {
    icon: Users,
    title: "Certified Trainers",
    description: "Expert Indian trainers with international certifications and proven track records"
  },
  {
    icon: Target,
    title: "Personalized Programs",
    description: "Custom training and nutrition plans tailored to your goals and body type"
  },
  {
    icon: Shield,
    title: "Elite Environment",
    description: "Luxury facilities with a focus on discipline, dedication, and excellence"
  }
];

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            India's Most <span className="gold-text-gradient">Elite</span> Fitness Destination
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine world-class training facilities with deep-rooted Indian values of discipline and dedication. 
            Our mission is to transform not just your body, but your entire approach to fitness and wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card border-2 border-primary/20 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.3)] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary mb-6 group-hover:scale-110 transition-transform duration-300 gold-shimmer">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 border-l-4 border-r-4 border-primary">
            <p className="text-2xl md:text-3xl font-semibold text-foreground italic">
              "Excellence is not a destination, it's a <span className="gold-text-gradient font-bold">way of life</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
