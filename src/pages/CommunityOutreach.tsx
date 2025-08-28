import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Heart, Target, Megaphone, School, Home, Building, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityOutreach = () => {
  const outreachPrograms = [
    {
      icon: School,
      title: "School Mental Health Program",
      description: "Bringing mental health awareness and support directly to schools across Malawi",
      reach: "50+ schools",
      participants: "2,500+ students",
      activities: ["Mental health workshops", "Peer supporter placement", "Teacher training", "Parent education sessions"],
      impact: "Reduced stigma and increased help-seeking behavior among students"
    },
    {
      icon: Home,
      title: "Community Health Initiatives",
      description: "Grassroots programs that integrate mental health into existing community structures",
      reach: "25 communities",
      participants: "1,200+ families",
      activities: ["Village health worker training", "Community dialogues", "Cultural integration", "Traditional healer collaboration"],
      impact: "Enhanced community understanding and acceptance of mental health support"
    },
    {
      icon: Building,
      title: "Workplace Wellness Program",
      description: "Supporting employee mental health in businesses and organizations",
      reach: "15 organizations",
      participants: "800+ employees",
      activities: ["Stress management workshops", "Mental health first aid", "Peer support networks", "Manager training"],
      impact: "Improved workplace culture and reduced mental health-related absenteeism"
    }
  ];

  const upcomingEvents = [
    {
      date: "Dec 20, 2024",
      time: "9:00 AM - 3:00 PM",
      title: "Lilongwe Mental Health Fair",
      location: "Area 18 Community Center",
      type: "Community Event",
      description: "Free mental health screenings, information booths, and community resources",
      volunteers: 25
    },
    {
      date: "Jan 10, 2025",
      time: "2:00 PM - 5:00 PM", 
      title: "School Mental Health Workshop",
      location: "Bwaila Secondary School",
      type: "School Program",
      description: "Interactive session on stress management and peer support for Form 3 students",
      volunteers: 8
    },
    {
      date: "Jan 25, 2025",
      time: "10:00 AM - 2:00 PM",
      title: "Village Chief Mental Health Dialogue",
      location: "Dedza Rural Community",
      type: "Community Dialogue",
      description: "Engaging traditional leaders in mental health awareness and stigma reduction",
      volunteers: 12
    }
  ];

  const volunteerRoles = [
    {
      role: "Community Educator",
      commitment: "4 hours/month",
      description: "Lead mental health awareness sessions in communities",
      skills: ["Public speaking", "Cultural sensitivity", "Basic mental health knowledge"],
      training: "8-hour orientation required"
    },
    {
      role: "Event Coordinator",
      commitment: "6 hours/month",
      description: "Organize and manage community outreach events",
      skills: ["Event planning", "Team coordination", "Local language fluency"],
      training: "4-hour event management training"
    },
    {
      role: "Peer Support Ambassador",
      commitment: "3 hours/month",
      description: "Share lived experience and provide peer support at events",
      skills: ["Personal recovery journey", "Communication skills", "Empathy"],
      training: "Peer support training completion required"
    },
    {
      role: "Resource Coordinator",
      commitment: "5 hours/month",
      description: "Connect community members with appropriate mental health resources",
      skills: ["Resource knowledge", "Assessment skills", "Follow-up capabilities"],
      training: "Resource mapping workshop required"
    }
  ];

  const impactStats = [
    { number: "75+", label: "Communities Reached", icon: MapPin },
    { number: "4,500+", label: "Lives Impacted", icon: Users },
    { number: "150+", label: "Active Volunteers", icon: Heart },
    { number: "95%", label: "Program Satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 text-sm px-3 py-1">Outreach Program</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Community <span className="text-secondary">Outreach</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Bringing mental health support directly to communities across Malawi through grassroots programs and cultural integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                Join Our Outreach Team
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Request Community Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Programs */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Outreach Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive programs designed to meet communities where they are and build sustainable mental health support systems.
            </p>
          </div>

          <div className="space-y-8">
            {outreachPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary-soft rounded-lg">
                      <program.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {program.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <Badge variant="secondary">{program.reach}</Badge>
                        <Badge variant="outline">{program.participants}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Program Activities:</h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Measured Impact:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{program.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Upcoming Outreach Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join us at these community events and help make a difference in mental health awareness and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{event.type}</Badge>
                    <span className="text-sm text-muted-foreground">{event.volunteers} volunteers needed</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <Button variant="default" className="w-full text-sm">
                    Volunteer for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose a volunteer role that matches your skills, interests, and availability. All volunteers receive comprehensive training and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{role.role}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{role.commitment}</Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Training:</h4>
                      <p className="text-xs text-muted-foreground">{role.training}</p>
                    </div>
                    <Button variant="default" className="w-full text-sm">
                      Apply for Role
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our community outreach team and help us bring mental health support to every corner of Malawi. Together, we can break down barriers and build stronger, healthier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                Start Volunteering
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Request Community Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityOutreach;