import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Arjun Reddy",
    role: "Software Engineer, Mumbai",
    text: "This gym completely changed my life. The trainers are incredibly professional and the facilities are world-class. I've never felt stronger!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Entrepreneur, Delhi",
    text: "Best investment I've made in myself. The personalized attention and luxury environment make every workout feel special. Highly recommend!",
    rating: 5
  },
  {
    name: "Rohan Sharma",
    role: "Marketing Manager, Bangalore",
    text: "Finally found a gym that understands Indian fitness needs. The trainers are knowledgeable, supportive, and genuinely care about your progress.",
    rating: 5
  },
  {
    name: "Neha Kapoor",
    role: "Fitness Enthusiast, Pune",
    text: "The transformation program exceeded all my expectations. Lost 15 kgs and gained confidence. The team is absolutely amazing!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(43_74%_49%_/_0.1),transparent_50%)]" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="gold-text-gradient">Members Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_hsl(43_74%_49%_/_0.2)]">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6 min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-primary">★</div>
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="text-xl font-bold text-foreground mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="hover:bg-primary/10 hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="hover:bg-primary/10 hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
