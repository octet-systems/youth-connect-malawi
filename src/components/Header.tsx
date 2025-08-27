import { Button } from "@/components/ui/button";
import { HeartHandshake, Menu, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">21st Generation</span>
              <span className="text-xs text-muted-foreground">Mental Health Malawi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <a href="#get-involved" className="text-foreground hover:text-primary transition-colors font-medium">
              Get Involved
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="crisis" size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Crisis Support</span>
            </Button>
            <Button variant="donate" size="sm">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-4 space-y-4">
            <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#resources" className="block text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <a href="#get-involved" className="block text-foreground hover:text-primary transition-colors font-medium">
              Get Involved
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="crisis" size="sm" className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Crisis Support</span>
              </Button>
              <Button variant="donate" size="sm" className="w-full">
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;