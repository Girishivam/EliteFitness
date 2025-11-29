import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer5 from "@/assets/trainer-5.jpeg";

const transformations = [
  {
    id: 0,
    image: transformation1,
    name: "Rahul Kumar",
    result: "Lost 18 kg in 4 months",
    program: "Body Transformation Program",
    description: "Rahul's journey showcases dedication and consistency. Through personalized training and nutrition guidance, he achieved remarkable results in just 4 months."
  },
  {
    id: 1,
    image: trainer1,
    name: "Sneha Mehta",
    result: "Gained 8 kg muscle in 6 months",
    program: "Strength & Conditioning",
    description: "Sneha transformed her physique with targeted strength training and proper supplementation. Her commitment to the program was truly inspiring."
  },
  {
    id: 2,
    image: trainer2,
    name: "Vikram Singh Chauhan",
    result: "Complete body recomposition",
    program: "Elite Personal Training",
    description: "Vikram's complete body transformation is a testament to our elite training program. He gained muscle while losing fat, achieving his dream physique."
  },
  {
    id: 3,
    image: trainer3,
    name: "Ananya Kapoor",
    result: "Improved endurance & performance",
    program: "Athlete Development",
    description: "Ananya enhanced her athletic performance significantly through our specialized training program designed for athletes."
  },
  {
    id: 4,
    image: trainer5,
    name: "Priya Desai",
    result: "Achieved 6-pack abs",
    program: "Core & Abdominal Program",
    description: "Priya's dedication to her core training program paid off with visible six-pack abs and incredible core strength."
  }
];

export default function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const transformation = transformations.find(t => t.id === Number(id));

  if (!transformation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Transformation Not Found</h1>
          <Button onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }} className="mt-4">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background py-20">
      <div className="container px-4">
        {/* Back Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="relative">
            <img
              src={transformation.image}
              alt={transformation.name}
              className="w-full h-96 md:h-full object-cover rounded-2xl border-2 border-primary/30"
            />
            <div className="absolute top-4 right-4 bg-primary text-background px-4 py-2 rounded-full font-semibold">
              Success Story
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 w-fit">
              <span className="text-sm uppercase tracking-widest text-primary font-semibold">
                {transformation.program}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{transformation.name}</h1>
            <p className="text-2xl text-primary font-semibold mb-6">{transformation.result}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {transformation.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Program</p>
                <p className="font-bold text-lg">{transformation.program}</p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Result</p>
                <p className="font-bold text-lg">{transformation.result}</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => navigate("/")}
            >
              Join Our Program
            </Button>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 text-center">
          <p className="text-xl italic text-foreground mb-4">
            "{transformation.name}'s transformation journey shows what's possible when you commit to your goals and work with our elite trainers."
          </p>
          <p className="text-primary font-semibold">— Gold Elite Fitness Team</p>
        </div>
      </div>
    </div>
  );
}
