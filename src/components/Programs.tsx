import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, Zap, Heart, Dumbbell, Target, Apple } from "lucide-react";

const programs = [
  {
    id: 0,
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Build raw power and muscle with progressive overload techniques and expert guidance.",
    benefits: ["Increase muscle mass", "Boost metabolism", "Enhance bone density"]
  },
  {
    id: 1,
    icon: Target,
    title: "Elite Personal Training",
    description: "One-on-one coaching with certified trainers who understand your unique goals and body type.",
    benefits: ["Customized workouts", "Form correction", "Faster results"]
  },
  {
    id: 2,
    icon: Flame,
    title: "Body Transformation Program",
    description: "Complete 90-day transformation with nutrition, training, and lifestyle coaching.",
    benefits: ["Guaranteed results", "Full support", "Progress tracking"]
  },
  {
    id: 3,
    icon: Zap,
    title: "HIIT & Athletic Training",
    description: "High-intensity workouts designed for maximum fat burn and athletic performance.",
    benefits: ["Burn more calories", "Improve endurance", "Boost agility"]
  },
  {
    id: 4,
    icon: Heart,
    title: "Flexibility & Mobility",
    description: "Improve range of motion, prevent injuries, and enhance overall movement quality.",
    benefits: ["Reduce injury risk", "Better posture", "Enhanced recovery"]
  },
  {
    id: 5,
    icon: Apple,
    title: "Nutrition & Lifestyle Coaching",
    description: "Personalized meal plans and lifestyle strategies for sustainable fitness success.",
    benefits: ["Custom meal plans", "Supplement guidance", "Habit formation"]
  }
];

const Programs = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elite Training <span className="gold-text-gradient">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of specialized programs designed to deliver exceptional results
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="group relative bg-card border-2 border-primary/30 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.4)] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-gold-dark via-primary to-gold-light" />

              <div className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary mb-6 group-hover:scale-110 transition-transform duration-300 gold-shimmer">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={`/program/${program.id}`} className="block">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </Link>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
