import { Button } from "@/components/ui/button";
import { Shield, Users, Heart, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transforming Mental Health in <span className="text-primary">Malawi</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            21st Generation is dedicated to breaking the stigma around mental health and creating 
            accessible, culturally-sensitive support systems for young people across Malawi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Mission */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empower youth with mental health literacy, peer support, and professional resources 
              to build resilient communities.
            </p>
          </div>

          {/* Community */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-secondary-soft rounded-xl flex items-center justify-center">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Community-Led</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our programs are designed and led by young Malawians, ensuring cultural relevance 
              and authentic peer support.
            </p>
          </div>

          {/* Support */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-accent/50 rounded-xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Holistic Care</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We address mental health through education, peer support, family involvement, 
              and professional referrals when needed.
            </p>
          </div>

          {/* Safe Space */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Safe Spaces</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We create judgment-free environments where young people can share their experiences 
              and find understanding.
            </p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">Our Impact So Far</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground text-sm">Young people reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15</div>
              <div className="text-muted-foreground text-sm">Communities served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150</div>
              <div className="text-muted-foreground text-sm">Peer supporters trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">85%</div>
              <div className="text-muted-foreground text-sm">Report improved wellbeing</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            Learn More About Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;