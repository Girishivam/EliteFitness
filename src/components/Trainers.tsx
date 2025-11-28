import { Button } from "@/components/ui/button";
import { Award, Calendar } from "lucide-react";
import trainer1 from "@/assets/trainer-4.jpg";
// import trainer2 from "@/assets/trainer-2.jpg";
import trainer6 from "@/assets/trainer 6.jpg";

const trainers = [
  {
    name: "Priya Sharma",
    image: trainer1,
    specialization: "Body Transformation & Women's Fitness",
    certifications: ["ACE Certified", "Nutrition Specialist", "Yoga Instructor"],
    experience: "8 Years",
    description: "Specialized in helping women achieve their dream physique with sustainable, science-backed methods."
  },
  {
    name: "Arjun Malhotra",
    image: trainer6,
    specialization: "Strength & Athletic Performance",
    certifications: ["NSCA-CPT", "Olympic Weightlifting", "Sports Nutrition"],
    experience: "12 Years",
    description: "Former national-level athlete dedicated to building champions through disciplined strength training."
  }
];

const Trainers = () => {
  const handleBookTrial = (trainerName: string) => {
    const message = `Hi, I would like to book a trial session with ${trainerName}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Your <span className="gold-text-gradient">Elite Trainers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Train with India's finest certified fitness professionals
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="group relative bg-card border-2 border-primary/30 rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_50px_hsl(43_74%_49%_/_0.4)] animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Gold Border */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 border-8 border-primary/50 rounded-t-2xl z-10 pointer-events-none group-hover:border-primary transition-colors duration-500" />
                <img 
                  src={trainer.image} 
                  alt={`${trainer.name} - Elite Fitness Trainer`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                  {trainer.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold mb-4 text-lg">
                  {trainer.specialization}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {trainer.description}
                </p>

                {/* Certifications */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-foreground"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => handleBookTrial(trainer.name)}
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Trial Session
                </Button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/50 rounded-tl-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to meet our full team of elite trainers?
          </p>
          <Button variant="gold-outline" size="lg">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
