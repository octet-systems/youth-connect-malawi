import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download, Video, MessageCircle, Phone, Headphones } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Mental Health Guides",
      description: "Comprehensive guides on understanding anxiety, depression, stress management, and more.",
      format: "PDF & Web",
      color: "primary"
    },
    {
      icon: Video,
      title: "Educational Videos",
      description: "Short, accessible videos covering mental health topics in local languages.",
      format: "Video",
      color: "secondary"
    },
    {
      icon: Headphones,
      title: "Audio Resources",
      description: "Meditation guides, breathing exercises, and calming audio content.",
      format: "Audio",
      color: "accent"
    },
    {
      icon: MessageCircle,
      title: "Peer Support Forums",
      description: "Safe, moderated spaces for sharing experiences and finding community support.",
      format: "Online Platform",
      color: "primary"
    }
  ];

  return (
    <section id="resources" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mental Health <span className="text-secondary">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Access our comprehensive library of mental health resources, designed specifically 
            for young people in Malawi. All resources are available for offline download.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-${resource.color}-soft`}>
                    <resource.icon className={`h-6 w-6 text-${resource.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-card-foreground">{resource.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {resource.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {resource.format}
                  </span>
                  <Button variant="support" size="sm" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Access</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis/5 border border-crisis/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-crisis mb-4 text-center">
            Immediate Support Available
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crisis/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-crisis" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">24/7 Crisis Helpline</h4>
              <p className="text-muted-foreground mb-4">
                Trained counselors available around the clock for immediate support and crisis intervention.
              </p>
              <Button variant="crisis" size="lg">
                Call Now: +265 XXX XXXX
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crisis/10 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-crisis" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Text Support</h4>
              <p className="text-muted-foreground mb-4">
                Text "HELP" for immediate connection to a trained peer supporter or counselor.
              </p>
              <Button variant="crisis" size="lg">
                Text "HELP" to XXXX
              </Button>
            </div>
          </div>
        </div>

        {/* Resource Center Access */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Youth Minds Connect
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get full access to our peer support platform, personalized resource toolkit, 
            and join a community of young people supporting each other's mental health journey.
          </p>
          <Button variant="hero" size="lg" className="mr-4">
            Join Platform
          </Button>
          <Button variant="outline" size="lg">
            Browse Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;