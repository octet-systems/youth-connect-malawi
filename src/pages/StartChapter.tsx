import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, School, MapPin, CheckCircle, Clock, Target, Heart, BookOpen, Phone, Mail, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const StartChapter = () => {
  const steps = [
    {
      number: 1,
      title: "Express Interest",
      description: "Submit initial application with your location and motivation",
      timeframe: "1 day",
      requirements: ["Completed application form", "Community needs assessment", "Initial team of 3-5 people"]
    },
    {
      number: 2,
      title: "Community Assessment",
      description: "Work with our team to assess mental health needs in your area",
      timeframe: "1-2 weeks",
      requirements: ["Local partnership meetings", "Needs survey completion", "Resource mapping"]
    },
    {
      number: 3,
      title: "Training & Setup",
      description: "Receive comprehensive training and establish your chapter structure",
      timeframe: "2-3 weeks",
      requirements: ["Leadership training completion", "Chapter bylaws development", "Initial volunteer recruitment"]
    },
    {
      number: 4,
      title: "Launch Preparation",
      description: "Finalize programs, partnerships, and launch your first activities",
      timeframe: "1-2 weeks",
      requirements: ["First event planning", "Community partnerships", "Marketing materials"]
    },
    {
      number: 5,
      title: "Chapter Launch",
      description: "Official launch with ongoing support from 21st Generation",
      timeframe: "Ongoing",
      requirements: ["Launch event execution", "Monthly reporting", "Quarterly check-ins"]
    }
  ];

  const chapterTypes = [
    {
      type: "School Chapter",
      icon: School,
      description: "Establish mental health programs within educational institutions",
      idealFor: "Students, teachers, and education professionals",
      activities: ["Peer support groups", "Mental health awareness weeks", "Teacher training", "Student workshops"],
      support: "Curriculum materials, trained facilitators, ongoing supervision",
      commitment: "4-6 hours/week during school term"
    },
    {
      type: "Community Chapter", 
      icon: Users,
      description: "Create community-based mental health support networks",
      idealFor: "Community leaders, local organizations, and residents",
      activities: ["Community workshops", "Support groups", "Crisis response", "Awareness campaigns"],
      support: "Training materials, funding assistance, program templates",
      commitment: "6-8 hours/week year-round"
    },
    {
      type: "Youth-Led Chapter",
      icon: Heart,
      description: "Empower young people to lead mental health initiatives",
      idealFor: "Youth organizations, student groups, and young leaders",
      activities: ["Peer education", "Youth forums", "Social media campaigns", "Creative arts programs"],
      support: "Youth leadership training, mentorship, youth-specific resources",
      commitment: "3-5 hours/week flexible schedule"
    }
  ];

  const existingChapters = [
    {
      name: "Lilongwe Central Chapter",
      type: "Community",
      established: "2023",
      members: 45,
      impact: "350+ youth reached",
      focus: "Peer support and crisis intervention"
    },
    {
      name: "Mzuzu University Chapter",
      type: "School",
      established: "2024",
      members: 32,
      impact: "200+ students supported",
      focus: "Student mental health and academic stress"
    },
    {
      name: "Blantyre Youth Chapter",
      type: "Youth-Led",
      established: "2024",
      members: 28,
      impact: "180+ peers engaged",
      focus: "Creative therapy and peer education"
    }
  ];

  const resources = [
    {
      title: "Chapter Starter Kit",
      description: "Complete guide with templates, forms, and best practices",
      format: "PDF Package",
      size: "15 MB"
    },
    {
      title: "Training Materials Library",
      description: "Workshop outlines, presentation slides, and facilitator guides",
      format: "Digital Library",
      size: "50+ resources"
    },
    {
      title: "Funding Guide",
      description: "Grant opportunities, fundraising strategies, and budget templates",
      format: "Interactive Guide",
      size: "25 pages"
    },
    {
      title: "Community Needs Assessment Tool",
      description: "Survey templates and analysis frameworks",
      format: "Excel/Google Sheets",
      size: "5 MB"
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
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 text-sm px-3 py-1">Chapter Development</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Start a <span className="text-primary">Chapter</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Bring 21st Generation's mental health programs to your school or community. 
              Join our network of local chapters making a difference across Malawi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="lg" className="text-base">
                Start Application
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Download className="h-4 w-4 mr-2" />
                Download Starter Kit
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>15 Regions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-secondary" />
                <span>50+ Chapters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-accent-foreground" />
                <span>2,000+ Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Chapter Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Choose Your Chapter Type
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Different chapter types serve different communities. Choose the model that best fits your context and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {chapterTypes.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary-soft rounded-lg">
                      <chapter.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{chapter.type}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {chapter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Ideal For:</h4>
                    <p className="text-sm text-muted-foreground">{chapter.idealFor}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {chapter.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Support Provided:</h4>
                    <p className="text-sm text-muted-foreground">{chapter.support}</p>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Time Commitment:</span>
                      <Badge variant="secondary" className="text-xs">{chapter.commitment}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Chapter Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our proven 5-step process ensures successful chapter establishment with comprehensive support at every stage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="mb-6 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {step.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-6">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Existing Chapters */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Successful Chapters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Learn from established chapters and see the impact they're making in their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {existingChapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{chapter.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{chapter.type}</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    Established {chapter.established} • {chapter.members} active members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Community Impact:</span>
                      <span className="text-sm text-primary font-semibold">{chapter.impact}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Primary Focus:</span>
                      <p className="text-sm text-muted-foreground mt-1">{chapter.focus}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      View Chapter Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Chapter Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access comprehensive resources to help you establish and grow your chapter effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{resource.format}</Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{resource.size}</span>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <section>
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Chapter?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our growing network of chapters making a difference in youth mental health across Malawi. 
                Our team will support you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" size="lg" className="text-base">
                  Start Your Application
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  Schedule Information Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <div className="text-center">
                  <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+265 1 750 753</p>
                </div>
                <div className="text-center">
                  <Mail className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground">chapters@21stgen.org</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default StartChapter;