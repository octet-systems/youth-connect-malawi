import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HeartHandshake, Menu, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <HeartHandshake className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm sm:text-lg text-foreground truncate">21st Generation</span>
              <span className="text-xs text-muted-foreground truncate hidden sm:block">Mental Health Malawi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              About
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Team
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Resources
            </a>
            <a href="#get-involved" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Get Involved
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
                <span>Demo</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/wellness-tracker">Wellness Tracker</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/peer-support-chat">Peer Support Chat</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resource-library">Resource Library</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/community-forum">Community Forum</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/volunteer-registration">Volunteer Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/start-chapter">Start a Chapter</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Link to="/crisis-support">
              <Button variant="crisis" size="sm" className="flex items-center space-x-1 sm:space-x-2 text-xs xl:text-sm">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xl:inline">Crisis Support</span>
                <span className="xl:hidden">Crisis</span>
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="donate" size="sm" className="text-xs xl:text-sm">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border mt-3 sm:mt-4 pt-3 sm:pt-4 pb-3 sm:pb-4 space-y-3 sm:space-y-4 animate-in slide-in-from-top-2 duration-200">
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#team" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#resources" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#get-involved" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </a>
            <Link 
              to="/contact" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Demo Links */}
            <div className="border-t border-border pt-3">
              <div className="text-sm font-semibold text-muted-foreground mb-2 px-2">Demo Features</div>
              <Link 
                to="/wellness-tracker" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Wellness Tracker
              </Link>
              <Link 
                to="/peer-support-chat" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Peer Support Chat
              </Link>
              <Link 
                to="/resource-library" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Resource Library
              </Link>
              <Link 
                to="/community-forum" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Community Forum
              </Link>
              <Link 
                to="/volunteer-registration" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteer Registration
              </Link>
              <Link 
                to="/start-chapter" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Chapter
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-3 sm:pt-4 border-t border-border">
              <Link to="/crisis-support">
                <Button variant="crisis" size="sm" className="flex items-center justify-center space-x-2 text-sm w-full">
                  <Phone className="h-4 w-4" />
                  <span>Crisis Support</span>
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="donate" size="sm" className="w-full text-sm">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;