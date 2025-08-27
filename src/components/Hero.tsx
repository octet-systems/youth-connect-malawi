import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-soft/20 to-secondary-soft/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-soft/50 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Malawi Mental Health Initiative</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Supporting</span>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Young Minds
                </span>{" "}
                <span className="text-foreground">in Malawi</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                21st Generation empowers youth with mental health resources, peer support, and community-driven solutions. 
                Together, we're building a healthier, more resilient future for Malawi's young people.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Youth Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">15</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Join Youth Minds Connect</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button variant="support" size="lg" className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Access Resources</span>
              </Button>
            </div>

            {/* Crisis Support Notice */}
            <div className="bg-crisis/10 border border-crisis/20 rounded-lg p-4">
              <p className="text-sm text-crisis font-medium">
                <strong>Need immediate support?</strong> Our crisis helpline is available 24/7. 
                Call <a href="tel:+265" className="underline hover:no-underline">+265 XXX XXXX</a> or text "HELP" to get connected.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Young people in Malawi participating in a mental health support group session"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-card-foreground">Community Impact</div>
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