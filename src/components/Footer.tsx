import { HeartHandshake, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">21st Generation</span>
                <span className="text-xs opacity-80">Mental Health Malawi</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering young minds in Malawi through mental health support, 
              education, and community-driven solutions.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a>
              <a href="#resources" className="opacity-80 hover:opacity-100 transition-opacity">Mental Health Resources</a>
              <a href="#get-involved" className="opacity-80 hover:opacity-100 transition-opacity">Get Involved</a>
              <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a>
              <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Programs</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#youth-connect" className="opacity-80 hover:opacity-100 transition-opacity">Youth Minds Connect</a>
              <a href="#peer-support" className="opacity-80 hover:opacity-100 transition-opacity">Peer Support Training</a>
              <a href="#community" className="opacity-80 hover:opacity-100 transition-opacity">Community Outreach</a>
              <a href="#workshops" className="opacity-80 hover:opacity-100 transition-opacity">Educational Workshops</a>
              <a href="#crisis" className="opacity-80 hover:opacity-100 transition-opacity">Crisis Support</a>
            </nav>
          </div>

          {/* Contact & Crisis */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact & Crisis Support</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 opacity-80">
                <Phone className="h-4 w-4" />
                <span>+265 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span>support@21stgen.mw</span>
              </div>
              <div className="flex items-start space-x-2 opacity-80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Lilongwe, Malawi</span>
              </div>
            </div>
            <div className="bg-crisis/20 rounded-lg p-3 mt-4">
              <p className="text-xs font-medium text-crisis-foreground mb-2">Crisis Support Available 24/7</p>
              <Button variant="crisis" size="sm" className="w-full">
                Get Help Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>© 2024 21st Generation. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Building resilient communities, one mind at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;