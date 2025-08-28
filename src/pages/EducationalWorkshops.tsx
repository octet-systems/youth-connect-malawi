import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Calendar, Star, Brain, Heart, Shield, Lightbulb, Target, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EducationalWorkshops = () => {
  const workshopCategories = [
    {
      icon: Brain,
      title: "Mental Health Awareness",
      description: "Understanding mental health conditions and reducing stigma",
      workshops: [
        {
          title: "Understanding Anxiety & Depression",
          duration: "2 hours",
          level: "Beginner",
          participants: "15-20",
          nextDate: "Dec 18, 2024"
        },
        {
          title: "Recognizing Mental Health Warning Signs",
          duration: "1.5 hours", 
          level: "Beginner",
          participants: "20-25",
          nextDate: "Dec 22, 2024"
        },
        {
          title: "Mental Health Myths vs. Facts",
          duration: "1 hour",
          level: "Beginner", 
          participants: "25-30",
          nextDate: "Jan 5, 2025"
        }
      ]
    },
    {
      icon: Heart,
      title: "Self-Care & Wellness",
      description: "Building resilience and maintaining mental wellness",
      workshops: [
        {
          title: "Stress Management Techniques",
          duration: "2.5 hours",
          level: "Beginner",
          participants: "12-15",
          nextDate: "Dec 20, 2024"
        },
        {
          title: "Building Emotional Resilience",
          duration: "3 hours",
          level: "Intermediate",
          participants: "10-12", 
          nextDate: "Jan 8, 2025"
        },
        {
          title: "Mindfulness & Meditation Basics",
          duration: "2 hours",
          level: "Beginner",
          participants: "15-20",
          nextDate: "Jan 12, 2025"
        }
      ]
    },
    {
      icon: Shield,
      title: "Crisis Support",
      description: "Learning how to help during mental health emergencies",
      workshops: [
        {
          title: "Mental Health First Aid",
          duration: "6 hours",
          level: "Intermediate",
          participants: "8-12",
          nextDate: "Jan 15, 2025"
        },
        {
          title: "Suicide Prevention Training",
          duration: "4 hours",
          level: "Advanced",
          participants: "6-10",
          nextDate: "Jan 20, 2025"
        },
        {
          title: "Supporting Someone in Crisis",
          duration: "2 hours",
          level: "Beginner",
          participants: "15-20",
          nextDate: "Jan 25, 2025"
        }
      ]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building supportive communities and peer networks",
      workshops: [
        {
          title: "Peer Support Skills",
          duration: "4 hours",
          level: "Intermediate",
          participants: "10-15",
          nextDate: "Feb 2, 2025"
        },
        {
          title: "Creating Safe Spaces",
          duration: "3 hours",
          level: "Intermediate",
          participants: "12-18",
          nextDate: "Feb 8, 2025"
        },
        {
          title: "Cultural Sensitivity in Mental Health",
          duration: "2.5 hours",
          level: "Beginner",
          participants: "20-25",
          nextDate: "Feb 15, 2025"
        }
      ]
    }
  ];

  const specialWorkshops = [
    {
      title: "Mental Health in the Workplace",
      description: "Creating psychologically safe work environments",
      target: "Managers & HR professionals",
      duration: "Half-day",
      format: "In-person",
      price: "Corporate rates available"
    },
    {
      title: "Youth Mental Health for Educators",
      description: "Supporting student mental health in schools",
      target: "Teachers & school staff",
      duration: "Full day",
      format: "In-person/Virtual",
      price: "Subsidized rates"
    },
    {
      title: "Parenting & Child Mental Health",
      description: "Supporting your child's emotional development",
      target: "Parents & caregivers",
      duration: "3 hours",
      format: "Community-based",
      price: "Free"
    },
    {
      title: "Traditional Healers Collaboration",
      description: "Integrating traditional and modern mental health approaches",
      target: "Traditional healers",
      duration: "2 days",
      format: "Cultural centers",
      price: "Free"
    }
  ];

  const upcomingWorkshops = [
    {
      date: "Dec 18, 2024",
      time: "2:00 PM - 4:00 PM",
      title: "Understanding Anxiety & Depression",
      instructor: "Dr. Sarah Banda",
      location: "Lilongwe Community Center",
      spots: 5,
      level: "Beginner"
    },
    {
      date: "Dec 20, 2024", 
      time: "9:00 AM - 11:30 AM",
      title: "Stress Management Techniques",
      instructor: "James Mwale, MSW",
      location: "Virtual (Zoom)",
      spots: 8,
      level: "Beginner"
    },
    {
      date: "Dec 22, 2024",
      time: "3:00 PM - 4:30 PM", 
      title: "Recognizing Mental Health Warning Signs",
      instructor: "Grace Phiri, RN",
      location: "Blantyre Youth Center",
      spots: 12,
      level: "Beginner"
    }
  ];

  const workshopFeatures = [
    {
      icon: Lightbulb,
      title: "Interactive Learning",
      description: "Hands-on activities and group discussions"
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Content",
      description: "Latest research and best practices"
    },
    {
      icon: Target,
      title: "Practical Skills",
      description: "Tools you can use immediately"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with like-minded individuals"
    }
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
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary/10 to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 text-sm px-3 py-1">Educational Programs</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Educational <span className="text-primary">Workshops</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Learn essential mental health skills through interactive workshops led by experienced professionals and peer experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                View Workshop Schedule
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Request Custom Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Features */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {workshopFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Workshop Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our comprehensive range of mental health education workshops, designed for different skill levels and learning objectives.
            </p>
          </div>

          <div className="space-y-8">
            {workshopCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-soft rounded-lg">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.workshops.map((workshop, workshopIndex) => (
                      <Card key={workshopIndex} className="border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">{workshop.title}</CardTitle>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">{workshop.level}</Badge>
                            <span className="text-xs text-muted-foreground">{workshop.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2 text-xs text-muted-foreground">
                            <div>Participants: {workshop.participants}</div>
                            <div>Next session: {workshop.nextDate}</div>
                          </div>
                          <Button variant="default" size="sm" className="w-full mt-3 text-xs">
                            Register
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join our next scheduled workshops. Limited spots available - register early to secure your place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{workshop.level}</Badge>
                    <span className="text-sm text-muted-foreground">{workshop.spots} spots left</span>
                  </div>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date} • {workshop.time}</span>
                    </div>
                    <div>Instructor: {workshop.instructor}</div>
                    <div>Location: {workshop.location}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="default" className="w-full text-sm">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Workshops */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Specialized Training Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Targeted workshops for specific groups and professional development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Target:</span>
                        <p className="text-muted-foreground">{workshop.target}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Duration:</span>
                        <p className="text-muted-foreground">{workshop.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Format:</span>
                        <p className="text-muted-foreground">{workshop.format}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Pricing:</span>
                        <p className="text-muted-foreground">{workshop.price}</p>
                      </div>
                    </div>
                    <Button variant="default" className="w-full text-sm">
                      Request Information
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Workshop Resources
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All workshop participants receive comprehensive resources to continue their learning journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Digital Toolkit</h3>
                  <p className="text-sm text-muted-foreground">
                    Downloadable guides and worksheets
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Alumni Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow participants
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-accent-foreground mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Certificates</h3>
                  <p className="text-sm text-muted-foreground">
                    Recognition for completed workshops
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                Browse All Workshops
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Custom Training Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalWorkshops;