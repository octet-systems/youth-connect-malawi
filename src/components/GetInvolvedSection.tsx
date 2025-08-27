import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, GraduationCap, Heart, DollarSign, Users, Calendar } from "lucide-react";

const GetInvolvedSection = () => {
  const ways = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our team of peer supporters and community advocates. Training provided.",
      action: "Apply Now",
      variant: "secondary" as const
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support mental health programs, training, and resources for young people.",
      action: "Donate Today",
      variant: "donate" as const
    },
    {
      icon: GraduationCap,
      title: "Get Training",
      description: "Learn mental health first aid and peer support skills in your community.",
      action: "Register",
      variant: "support" as const
    },
    {
      icon: Users,
      title: "Start a Chapter",
      description: "Bring 21st Generation programs to your school or community.",
      action: "Learn More",
      variant: "default" as const
    }
  ];

  const events = [
    {
      date: "Dec 15",
      title: "Mental Health Awareness Workshop",
      location: "Lilongwe Community Center",
      type: "Workshop"
    },
    {
      date: "Dec 22",
      title: "Peer Supporter Training",
      location: "Online & Blantyre",
      type: "Training"
    },
    {
      date: "Jan 5",
      title: "Youth Mental Health Summit",
      location: "Mzuzu University",
      type: "Conference"
    }
  ];

  return (
    <section id="get-involved" className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get <span className="text-primary">Involved</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Be part of the movement to transform mental health support in Malawi. 
            There are many ways to contribute to this important cause.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center mb-4">
                  <way.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{way.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant={way.variant} className="w-full">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Impact */}
        <div className="bg-card rounded-2xl border border-border p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
            Your Donation Makes a Difference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">$10</div>
              <div className="text-muted-foreground">Provides mental health resources for 5 youth</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$25</div>
              <div className="text-muted-foreground">Funds one peer support training session</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-foreground">$50</div>
              <div className="text-muted-foreground">Supports a community workshop for 30 people</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="donate" size="lg" className="mr-4">
              <Heart className="h-5 w-5 mr-2" />
              Make a Donation
            </Button>
            <Button variant="outline" size="lg">
              Learn About Impact
            </Button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-soft rounded-lg p-2 text-center min-w-[3rem]">
                      <div className="text-sm font-bold text-primary">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-card-foreground">{event.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        {event.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-secondary-soft text-secondary px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                    <Button variant="support" size="sm" className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Register</span>
                    </Button>
                  </div>
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