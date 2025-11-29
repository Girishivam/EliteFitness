import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Star, Award, Users, Clock, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialFeatures = [
  { id: 0, icon: Star, title: "Elite Coaches", text: "Certified trainers with personalized plans." },
  { id: 1, icon: Award, title: "Proven Results", text: "Real transformations backed by data." },
  { id: 2, icon: Users, title: "Community Support", text: "A motivating community to keep you going." }
];

const moreFeatures = [
  { id: 3, icon: Clock, title: "Flexible Schedules", text: "Morning, evening and weekend slots." },
  { id: 4, icon: Activity, title: "Performance Tracking", text: "Track metrics with our app." },
  { id: 5, icon: Star, title: "Small Group Sessions", text: "Affordable semi-private training." }
];

export default function HomeExtras() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { toast } = useToast();

  const features = expanded ? [...initialFeatures, ...moreFeatures] : initialFeatures;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    setSubscribed(true);
    setEmail("");
    toast({
      title: "🎉 Subscribed!",
      description: "Check your email for exclusive fitness tips.",
      className: "border-2 border-primary bg-card"
    });
  };

  const faqs = [
    { id: 0, q: "Do you offer beginner programs?", a: "Yes — many of our programs are designed for beginners with progressive steps." },
    { id: 1, q: "Can I switch trainers?", a: "Absolutely — we match you with the best trainer and can change if needed." },
    { id: 2, q: "Is there a money-back guarantee?", a: "Our transformation program includes a satisfaction policy — contact support for details." }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">Why Members Love Elite Fitness</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Small, focused features that make your training smarter — designed to get results faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {features.map((f) => (
            <div key={f.id} className="bg-card border-2 border-primary/20 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Button variant="ghost" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More Features"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Join our Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">Weekly tips, member stories and exclusive offers.</p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-primary/10 bg-background"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    aria-label="Your email"
                  />
                  <Button type="submit" className="whitespace-nowrap">Subscribe</Button>
                </form>
                {subscribed && <p className="text-sm text-primary mt-3">You're subscribed — check your inbox!</p>}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6">
            <h4 className="font-semibold mb-4">Quick FAQs</h4>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.id} className="border border-primary/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === f.id ? null : f.id)}
                    aria-expanded={openFAQ === f.id}
                    aria-controls={`faq-${f.id}`}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className="text-primary" aria-hidden>{openFAQ === f.id ? "—" : "+"}</span>
                  </button>
                  {openFAQ === f.id && (
                    <div id={`faq-${f.id}`} className="p-4 pt-0 text-sm text-muted-foreground">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
