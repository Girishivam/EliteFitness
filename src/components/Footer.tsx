import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold gold-text-gradient">Elite Fitness</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's premier luxury fitness destination. Transform your body, elevate your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Programs
                </a>
              </li>
              <li>
                <a href="#membership" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Elite Fitness India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
