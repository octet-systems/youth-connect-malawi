import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, GraduationCap, Heart, DollarSign, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolvedSection = () => {
  const ways = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our team of peer supporters and community advocates. Training provided.",
      action: "Apply Now",
      variant: "secondary" as const,
      link: "/volunteer-registration"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support mental health programs, training, and resources for young people.",
      action: "Donate Today",
      variant: "donate" as const,
      link: "/donate"
    },
    {
      icon: GraduationCap,
      title: "Get Training",
      description: "Learn mental health first aid and peer support skills in your community.",
      action: "Register",
      variant: "support" as const,
      link: "/peer-support-training"
    },
    {
      icon: Users,
      title: "Start a Chapter",
      description: "Bring 21st Generation programs to your school or community.",
      action: "Learn More",
      variant: "default" as const,
      link: "/start-chapter"
    }
  ];

  const events = [
    {
      date: "Dec 15",
      title: "Mental Health Awareness Workshop",
      location: "Lilongwe Community Center",
      type: "Workshop",
      link: "/educational-workshops",
      flierImage: "/api/placeholder/300/200",
      time: "2:00 PM - 5:00 PM",
      description: "Interactive workshop on mental health awareness and stigma reduction"
    },
    {
      date: "Dec 22",
      title: "Peer Supporter Training",
      location: "Online & Blantyre",
      type: "Training",
      link: "/peer-support-training",
      flierImage: "/api/placeholder/300/200",
      time: "9:00 AM - 4:00 PM",
      description: "Comprehensive training for new peer support specialists"
    },
    {
      date: "Jan 5",
      title: "Youth Mental Health Summit",
      location: "Mzuzu University",
      type: "Conference",
      link: "/educational-workshops",
      flierImage: "/api/placeholder/300/200",
      time: "8:00 AM - 6:00 PM",
      description: "Annual summit bringing together youth mental health advocates"
    }
  ];

  return (
    <section id="get-involved" className="py-12 sm:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Get <span className="text-primary">Involved</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            Be part of the movement to transform mental health support in Malawi. 
            There are many ways to contribute to this important cause.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-primary-soft rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <way.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-card-foreground">{way.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed px-2 sm:px-0">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={way.link}>
                  <Button variant={way.variant} className="w-full text-sm">
                    {way.action}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Impact */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-card-foreground mb-6 sm:mb-8">
            Your Donation Makes a Difference
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="space-y-2 p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-secondary">$10</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Provides mental health resources for 5 youth</div>
            </div>
            <div className="space-y-2 p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary">$25</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Funds one peer support training session</div>
            </div>
            <div className="space-y-2 p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold text-accent-foreground">$50</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Supports a community workshop for 30 people</div>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/donate">
                <Button variant="donate" size="lg" className="flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Make a Donation</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                Learn About Impact
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-border overflow-hidden">
                {/* Event Flier Preview */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={event.flierImage} 
                    alt={`${event.title} flier`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-primary-soft rounded-lg p-1.5 text-center min-w-[2.5rem] flex-shrink-0">
                      <div className="text-xs font-bold text-primary">{event.date}</div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="text-xs bg-secondary-soft text-secondary px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-base sm:text-lg text-card-foreground leading-tight">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-xs sm:text-sm space-y-1">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-xs leading-relaxed pt-1">{event.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={event.link}>
                    <Button variant="support" size="sm" className="w-full flex items-center justify-center space-x-1 text-xs">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Register</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;