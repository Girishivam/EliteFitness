import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Sparkles, Crown, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Gold Basic",
    price: "₹4,999",
    period: "/month",
    icon: Star,
    features: [
      "Access to all equipment",
      "Group training sessions",
      "Basic fitness assessment",
      "Locker facility",
      "12 hours daily access"
    ],
    popular: false
  },
  {
    name: "Gold Plus",
    price: "₹8,999",
    period: "/month",
    icon: Sparkles,
    features: [
      "Everything in Gold Basic",
      "4 personal training sessions/month",
      "Customized diet plan",
      "Progress tracking app",
      "24/7 gym access",
      "Supplement consultation"
    ],
    popular: true
  },
  {
    name: "Gold Elite VIP",
    price: "₹15,999",
    period: "/month",
    icon: Crown,
    features: [
      "Everything in Gold Plus",
      "Unlimited personal training",
      "Weekly diet adjustments",
      "Body composition analysis",
      "Priority equipment access",
      "Exclusive member events",
      "Massage & recovery sessions"
    ],
    popular: false
  }
];

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    startDate: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleJoinNow = (planName: string) => {
    setSelectedPlan(planName);
    setFormData(prev => ({ ...prev }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent, planName: string) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success message - stays on page, no redirect
    toast({
      title: "✅ Membership Application Submitted!",
      description: `Your ${planName} plan inquiry has been received. Our team will contact you shortly.`,
      className: "border-2 border-primary bg-card"
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      startDate: "",
      comments: ""
    });
    setSelectedPlan(null);
    setIsSubmitting(false);
  };

  return (
    <section id="membership" className="py-20 md:py-32 bg-background scroll-mt-20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Membership</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="gold-text-gradient">Elite Plan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in yourself with our premium membership options
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border-2 rounded-2xl overflow-hidden transition-all duration-500 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-[0_0_50px_hsl(43_74%_49%_/_0.5)] scale-105' 
                  : 'border-primary/30 hover:border-primary hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.3)]'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Gold Top Bar */}
              <div className="h-2 bg-gradient-to-r from-gold-dark via-primary to-gold-light" />

              <div className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary mb-6 gold-shimmer">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Plan Name & Price */}
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black gold-text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Join Button or Form */}
                {selectedPlan === plan.name ? (
                  <form onSubmit={(e) => handleSubmit(e, plan.name)} className="space-y-4">
                    <div>
                      <Label htmlFor={`name-${index}`} className="text-foreground">Full Name *</Label>
                      <Input 
                        id={`name-${index}`}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`phone-${index}`} className="text-foreground">Phone (WhatsApp) *</Label>
                      <Input 
                        id={`phone-${index}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`email-${index}`} className="text-foreground">Email</Label>
                      <Input 
                        id={`email-${index}`}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`city-${index}`} className="text-foreground">City</Label>
                      <Input 
                        id={`city-${index}`}
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your city"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`startDate-${index}`} className="text-foreground">Preferred Start Date</Label>
                      <Input 
                        id={`startDate-${index}`}
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`comments-${index}`} className="text-foreground">Comments</Label>
                      <Textarea 
                        id={`comments-${index}`}
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        placeholder="Any specific goals or requirements?"
                        className="mt-1.5 min-h-[80px]"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        type="submit" 
                        variant="default" 
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                      <Button 
                        type="button"
                        variant="ghost" 
                        onClick={() => setSelectedPlan(null)}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <Button 
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                    onClick={() => handleJoinNow(plan.name)}
                  >
                    Join Now
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include access to premium facilities • No hidden charges • Flexible payment options available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
