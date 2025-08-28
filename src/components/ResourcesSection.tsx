import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download, Video, MessageCircle, Phone, Headphones, Eye, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="resources" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Mental Health <span className="text-secondary">Resources</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            Access our comprehensive library of mental health resources, designed specifically 
            for young people in Malawi. Resources are available for both online reading and offline download.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-${resource.color}-soft flex-shrink-0`}>
                    <resource.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${resource.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl text-card-foreground">{resource.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 sm:px-3 py-1 rounded-full">
                    {resource.format}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 text-xs sm:text-sm">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Read Online</span>
                    </Button>
                    <Button variant="support" size="sm" className="flex items-center space-x-1 text-xs sm:text-sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Web Resource Library */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Online Resource Library
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Digital Guides</h4>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed">
                  Interactive web-based mental health guides with search and bookmarking
                </p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Browse Library
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <Video className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Video Learning</h4>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed">
                  Stream educational videos with subtitles in multiple languages
                </p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <Headphones className="h-8 w-8 text-accent-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Audio Wellness</h4>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed">
                  Listen to guided meditations and wellness exercises online
                </p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-muted-foreground text-sm mb-4">
              All web resources are optimized for mobile devices and work offline once loaded
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="default" size="lg" className="text-sm sm:text-base">
                Access Full Library
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                <Download className="h-4 w-4 mr-2" />
                Download Offline Pack
              </Button>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis/5 border border-crisis/20 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-crisis mb-3 sm:mb-4 text-center">
            Immediate Support Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-crisis/10 rounded-full mb-3 sm:mb-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-crisis" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">24/7 Crisis Helpline</h4>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base px-2 sm:px-0">
                Trained counselors available around the clock for immediate support and crisis intervention.
              </p>
              <Button variant="crisis" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                Call Now: +265 XXX XXXX
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-crisis/10 rounded-full mb-3 sm:mb-4">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-crisis" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Text Support</h4>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base px-2 sm:px-0">
                Text "HELP" for immediate connection to a trained peer supporter or counselor.
              </p>
              <Button variant="crisis" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                Text "HELP" to XXXX
              </Button>
            </div>
          </div>
        </div>

        {/* Resource Center Access */}
        <div className="text-center px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            Join Youth Minds Connect
          </h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get full access to our peer support platform, personalized resource toolkit, 
            and join a community of young people supporting each other's mental health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/youth-connect">
              <Button variant="hero" size="lg" className="text-sm sm:text-base">
                Join Platform
              </Button>
            </Link>
            <Link to="/resource-library">
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse Web Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;