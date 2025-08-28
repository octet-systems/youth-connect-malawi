import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
// import heroImage from "@/assets/hero-mental-health.jpg"; // Uncomment when image is available

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-soft/20 to-secondary-soft/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-soft/50 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Malawi Mental Health Initiative</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Supporting</span>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Young Minds
                </span>{" "}
                <span className="text-foreground">in Malawi</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                21st Generation empowers youth with mental health resources, peer support, and community-driven solutions. 
                Together, we're building a healthier, more resilient future for Malawi's young people.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">2,500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Youth Reached</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">15</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-foreground">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/youth-connect">
                <Button variant="hero" size="lg" className="flex items-center justify-center space-x-2 text-sm sm:text-base w-full sm:w-auto">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Join Youth Minds Connect</span>
                  <span className="sm:hidden">Join Community</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
              
              <Link to="#resources">
                <Button variant="support" size="lg" className="flex items-center justify-center space-x-2 text-sm sm:text-base w-full sm:w-auto">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Access Resources</span>
                </Button>
              </Link>
            </div>

            {/* Crisis Support Notice */}
            <div className="bg-crisis/10 border border-crisis/20 rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-crisis font-medium leading-relaxed">
                <strong>Need immediate support?</strong> Our crisis helpline is available 24/7. 
                Call <a href="tel:+265" className="underline hover:no-underline">+265 XXX XXXX</a> or text "HELP" to get connected.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Young people in Malawi participating in a mental health support group session"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-xl shadow-xl p-3 sm:p-4 border border-border max-w-[200px] sm:max-w-none">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-secondary/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-card-foreground truncate">Community Impact</div>
                  <div className="text-xs text-muted-foreground">Building resilience together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;