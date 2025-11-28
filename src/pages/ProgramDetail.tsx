import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check, Calendar, Users, Clock, Award, Mail, Phone, MapPin } from "lucide-react";
import { Flame, Zap, Heart, Dumbbell, Target, Apple } from "lucide-react";

const programsData = [
  {
    id: 0,
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Build raw power and muscle with progressive overload techniques and expert guidance.",
    benefits: ["Increase muscle mass", "Boost metabolism", "Enhance bone density"],
    duration: "12 weeks",
    sessions: "3-4 per week",
    level: "Intermediate to Advanced",
    price: "$499/month",
    features: [
      "Progressive overload training plan",
      "Form correction by certified trainers",
      "Nutrition guidance for muscle gain",
      "Access to premium equipment",
      "Bi-weekly progress assessments",
      "Online workout tracking app",
      "Group training sessions",
      "Personalized recovery protocols"
    ],
    schedule: [
      { week: "Weeks 1-4", focus: "Foundation & Strength Base" },
      { week: "Weeks 5-8", focus: "Hypertrophy & Muscle Building" },
      { week: "Weeks 9-12", focus: "Peak Strength & Performance" }
    ]
  },
  {
    id: 1,
    icon: Target,
    title: "Elite Personal Training",
    description: "One-on-one coaching with certified trainers who understand your unique goals and body type.",
    benefits: ["Customized workouts", "Form correction", "Faster results"],
    duration: "Flexible",
    sessions: "1-3 per week",
    level: "All Levels",
    price: "$99/session or $249/month",
    features: [
      "Personalized workout plans",
      "Real-time form feedback",
      "One-on-one nutrition consultation",
      "Goal-specific programming",
      "Weekly progress tracking",
      "Flexible scheduling",
      "Equipment customization",
      "Injury prevention strategies"
    ],
    schedule: [
      { week: "Session 1", focus: "Assessment & Goal Setting" },
      { week: "Session 2-4", focus: "Foundation Building" },
      { week: "Session 5+", focus: "Progressive Challenges" }
    ]
  },
  {
    id: 2,
    icon: Flame,
    title: "Body Transformation Program",
    description: "Complete 90-day transformation with nutrition, training, and lifestyle coaching.",
    benefits: ["Guaranteed results", "Full support", "Progress tracking"],
    duration: "90 days",
    sessions: "4-5 per week",
    level: "All Levels",
    price: "$799 (Full Program)",
    features: [
      "Complete 90-day workout plan",
      "Custom meal plans with recipes",
      "Supplement recommendations",
      "Weekly coaching calls",
      "Before & after photo sessions",
      "Access to private community",
      "24/7 trainer support chat",
      "Full money-back guarantee"
    ],
    schedule: [
      { week: "Weeks 1-4", focus: "Detox & Foundation" },
      { week: "Weeks 5-8", focus: "Build & Strengthen" },
      { week: "Weeks 9-12", focus: "Define & Peak" }
    ]
  },
  {
    id: 3,
    icon: Zap,
    title: "HIIT & Athletic Training",
    description: "High-intensity workouts designed for maximum fat burn and athletic performance.",
    benefits: ["Burn more calories", "Improve endurance", "Boost agility"],
    duration: "8 weeks",
    sessions: "4 per week",
    level: "Intermediate to Advanced",
    price: "$399/month",
    features: [
      "HIIT protocol training",
      "Athletic performance drills",
      "Plyometric exercises",
      "Cardiovascular conditioning",
      "Sport-specific training",
      "Recovery techniques",
      "Endurance nutrition guide",
      "Performance metrics tracking"
    ],
    schedule: [
      { week: "Weeks 1-2", focus: "HIIT Foundation" },
      { week: "Weeks 3-5", focus: "Intensity Progression" },
      { week: "Weeks 6-8", focus: "Peak Performance" }
    ]
  },
  {
    id: 4,
    icon: Heart,
    title: "Flexibility & Mobility",
    description: "Improve range of motion, prevent injuries, and enhance overall movement quality.",
    benefits: ["Reduce injury risk", "Better posture", "Enhanced recovery"],
    duration: "6 weeks",
    sessions: "2-3 per week",
    level: "All Levels",
    price: "$299/month",
    features: [
      "Dynamic stretching routines",
      "Foam rolling techniques",
      "Mobility drills",
      "Yoga integration",
      "Posture correction exercises",
      "Injury prevention strategies",
      "Breathing & relaxation techniques",
      "Flexibility assessment & tracking"
    ],
    schedule: [
      { week: "Weeks 1-2", focus: "Assessment & Baseline" },
      { week: "Weeks 3-4", focus: "Active Mobility Work" },
      { week: "Weeks 5-6", focus: "Advanced Flexibility" }
    ]
  },
  {
    id: 5,
    icon: Apple,
    title: "Nutrition & Lifestyle Coaching",
    description: "Personalized meal plans and lifestyle strategies for sustainable fitness success.",
    benefits: ["Custom meal plans", "Supplement guidance", "Habit formation"],
    duration: "12 weeks",
    sessions: "Weekly check-ins",
    level: "All Levels",
    price: "$349/month",
    features: [
      "Personalized meal planning",
      "Grocery shopping guidance",
      "Recipe database access",
      "Macro tracking education",
      "Supplement recommendations",
      "Sleep optimization strategies",
      "Stress management techniques",
      "Habit formation coaching"
    ],
    schedule: [
      { week: "Week 1", focus: "Dietary Assessment" },
      { week: "Weeks 2-8", focus: "Plan Implementation" },
      { week: "Weeks 9-12", focus: "Habit Solidification" }
    ]
  }
];

export default function ProgramDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programsData.find(p => p.id === Number(id));
  
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);
  
  const [enrollData, setEnrollData] = useState({ name: "", email: "", phone: "" });
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [consultationData, setConsultationData] = useState({ name: "", email: "", phone: "", preferredDate: "" });

  const handleEnroll = () => {
    if (enrollData.name && enrollData.email && enrollData.phone) {
      alert(`🎉 Successfully enrolled in ${program?.title}!\nWe'll contact you at ${enrollData.email} shortly.`);
      setEnrollData({ name: "", email: "", phone: "" });
      setEnrollDialogOpen(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleContact = () => {
    if (contactData.name && contactData.email && contactData.message) {
      alert(`Message sent! We'll get back to you at ${contactData.email} soon.`);
      setContactData({ name: "", email: "", message: "" });
      setContactDialogOpen(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleConsultation = () => {
    if (consultationData.name && consultationData.email && consultationData.phone && consultationData.preferredDate) {
      alert(`Consultation scheduled!\nWe'll confirm your appointment at ${consultationData.email}`);
      setConsultationData({ name: "", email: "", phone: "", preferredDate: "" });
      setConsultationDialogOpen(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-card to-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
          <Button onClick={() => navigate("/")} className="mt-4">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background py-20">
      <div className="container px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </button>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Icon & Title */}
          <div>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-primary mb-6 gold-shimmer">
              <Icon className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{program.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {program.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Duration</span>
                </div>
                <p className="font-bold">{program.duration}</p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Sessions</span>
                </div>
                <p className="font-bold">{program.sessions}</p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Level</span>
                </div>
                <p className="font-bold text-sm">{program.level}</p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Price</span>
                </div>
                <p className="font-bold text-sm">{program.price}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full" onClick={() => setEnrollDialogOpen(true)}>
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={() => setConsultationDialogOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Program Benefits</h3>
            <div className="space-y-4">
              {program.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h4 className="text-lg font-bold mb-4">What's Included</h4>
              <ul className="space-y-3">
                {program.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full Features */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Complete Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Schedule */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Program Timeline</h2>
          <div className="space-y-4">
            {program.schedule.map((phase, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-foreground">{phase.week}</p>
                  <p className="text-muted-foreground">{phase.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of members who've achieved their fitness goals with our {program.title} program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" onClick={() => setEnrollDialogOpen(true)}>
              Enroll in This Program
            </Button>
            <Button size="lg" variant="outline" className="px-8" onClick={() => setContactDialogOpen(true)}>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Enroll Dialog */}
        <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enroll in {program?.title}</DialogTitle>
              <DialogDescription>
                Fill in your details to start your transformation journey today.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  placeholder="Your name" 
                  value={enrollData.name}
                  onChange={(e) => setEnrollData({...enrollData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com" 
                  value={enrollData.email}
                  onChange={(e) => setEnrollData({...enrollData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input 
                  type="tel"
                  placeholder="Your phone number" 
                  value={enrollData.phone}
                  onChange={(e) => setEnrollData({...enrollData, phone: e.target.value})}
                />
              </div>
              <Button className="w-full" onClick={handleEnroll}>
                Complete Enrollment
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Consultation Dialog */}
        <Dialog open={consultationDialogOpen} onOpenChange={setConsultationDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule a Free Consultation</DialogTitle>
              <DialogDescription>
                Book a free 30-minute consultation with one of our trainers.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  placeholder="Your name" 
                  value={consultationData.name}
                  onChange={(e) => setConsultationData({...consultationData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com" 
                  value={consultationData.email}
                  onChange={(e) => setConsultationData({...consultationData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input 
                  type="tel"
                  placeholder="Your phone number" 
                  value={consultationData.phone}
                  onChange={(e) => setConsultationData({...consultationData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Preferred Date</label>
                <Input 
                  type="date"
                  value={consultationData.preferredDate}
                  onChange={(e) => setConsultationData({...consultationData, preferredDate: e.target.value})}
                />
              </div>
              <Button className="w-full" onClick={handleConsultation}>
                Schedule Consultation
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Contact Dialog */}
        <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Get in Touch</DialogTitle>
              <DialogDescription>
                Have questions? Send us a message and we'll respond within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  placeholder="Your name" 
                  value={contactData.name}
                  onChange={(e) => setContactData({...contactData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com" 
                  value={contactData.email}
                  onChange={(e) => setContactData({...contactData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Your message..." 
                  value={contactData.message}
                  onChange={(e) => setContactData({...contactData, message: e.target.value})}
                  rows={4}
                />
              </div>
              <Button className="w-full" onClick={handleContact}>
                Send Message
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
