import { HeartHandshake, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Organization Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
              <HeartHandshake className="h-7 w-7 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-base sm:text-lg">21st Generation</span>
                <span className="text-xs opacity-80">Mental Health Malawi</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering young minds in Malawi through mental health support, 
              education, and community-driven solutions.
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a>
              <a href="#resources" className="opacity-80 hover:opacity-100 transition-opacity">Mental Health Resources</a>
              <a href="#get-involved" className="opacity-80 hover:opacity-100 transition-opacity">Get Involved</a>
              <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
              <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg">Our Programs</h4>
            <nav className="flex flex-col space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <Link to="/youth-connect" className="opacity-80 hover:opacity-100 transition-opacity">Youth Minds Connect</Link>
              <Link to="/peer-support-training" className="opacity-80 hover:opacity-100 transition-opacity">Peer Support Training</Link>
              <Link to="/community-outreach" className="opacity-80 hover:opacity-100 transition-opacity">Community Outreach</Link>
              <Link to="/educational-workshops" className="opacity-80 hover:opacity-100 transition-opacity">Educational Workshops</Link>
              <Link to="/crisis-support" className="opacity-80 hover:opacity-100 transition-opacity">Crisis Support</Link>
            </nav>
          </div>

          {/* Contact & Crisis */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-base sm:text-lg">Contact & Crisis Support</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 opacity-80 justify-center sm:justify-start">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+265 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80 justify-center sm:justify-start">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="break-all">support@21stgen.mw</span>
              </div>
              <div className="flex items-start space-x-2 opacity-80 justify-center sm:justify-start">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                <span>Lilongwe, Malawi</span>
              </div>
            </div>
            <div className="bg-crisis/20 rounded-lg p-3 mt-3 sm:mt-4 max-w-xs mx-auto sm:mx-0">
              <p className="text-xs font-medium text-crisis-foreground mb-2">Crisis Support Available 24/7</p>
              <Link to="/crisis-support">
                <Button variant="crisis" size="sm" className="w-full text-xs">
                  Get Help Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm opacity-80 space-y-2 md:space-y-0">
          <p className="text-center md:text-left">© 2024 21st Generation. All rights reserved.</p>
          <p className="text-center md:text-right">
            Building resilient communities, one mind at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;