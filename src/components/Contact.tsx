import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "✅ Message Received!",
      description: "Thank you for reaching out. Our team will get back to you shortly.",
      className: "border-2 border-primary bg-card"
    });

    // Reset form - stays on page, no redirect
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/639499358?text=Hi, I want to learn more about Elite Fitness!', '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="gold-text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your transformation? Reach out to us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Fitness Street, Luxury Plaza<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  +91 9876543210<br />
                  +91 8974563218
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  info@elitefitness.in<br />
                  support@elitefitness.in
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday: 5:00 AM - 11:00 PM<br />
                  24/7 for Gold Plus & Elite VIP Members
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full"
            >
              <MessageCircle className="mr-2" />
              Chat on WhatsApp
            </Button>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label="Like us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-[0_0_40px_hsl(43_74%_49%_/_0.2)]">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="contact-name" className="text-foreground">Full Name *</Label>
                <Input 
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="text-foreground">Email</Label>
                <Input 
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="contact-phone" className="text-foreground">Phone *</Label>
                <Input 
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-foreground">Message</Label>
                <Textarea 
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're looking for..."
                  className="mt-1.5 min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                variant="default" 
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-2xl overflow-hidden border-2 border-primary/30 h-[400px] shadow-[0_0_40px_hsl(43_74%_49%_/_0.2)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Elite Fitness India Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
