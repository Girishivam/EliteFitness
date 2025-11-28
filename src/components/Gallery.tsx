import { Link } from "react-router-dom";
import transformation1 from "@/assets/transformation-1.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import trainer5 from "@/assets/trainer-5.jpeg";

const transformations = [
  {
    id: 0,
    image: transformation1,
    name: "Rahul Kumar",
    result: "Lost 18 kg in 4 months",
    program: "Body Transformation Program"
  }, 
  {
    id: 1,
    image: trainer1,
    name: "Sneha Mehta",
    result: "Gained 8 kg muscle in 6 months",
    program: "Strength & Conditioning"
  },
  {
    id: 2,
    image: trainer2,
    name: "Vikram Singh Chauhan",
    result: "Complete body recomposition",
    program: "Elite Personal Training"
  },
  {
    id: 3,
    image: trainer3,
    name: "Ananya Kapoor",
    result: "Improved endurance & performance",
    program: "Athlete Development"
  },

  {
    id: 4,
    image: trainer5,
    name: "Priya Desai",
    result: "Achieved 6-pack abs",
    program: "Core & Abdominal Program"
  }

];

const Gallery = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real Results from <span className="gold-text-gradient">Real People</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible transformations achieved by our elite members
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Link 
              key={item.id}
              to={`/gallery/${item.id}`}
              className="group relative bg-card border-2 border-primary/30 rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.4)] animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.name} transformation`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Gold Shimmer on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/20 to-transparent gold-shimmer" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{item.name}</h3>
                <p className="text-primary font-semibold mb-2 text-lg">{item.result}</p>
                <p className="text-sm text-muted-foreground">{item.program}</p>
              </div>

              {/* Gold Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-primary to-gold-light" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-foreground mb-4 font-semibold">
            Ready to write your own success story?
          </p>
          <p className="text-muted-foreground mb-8">
            Join hundreds of members who've transformed their lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
