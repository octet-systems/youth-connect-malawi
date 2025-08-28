import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, CheckCircle, Star, Calendar, ArrowRight, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PeerSupportTraining = () => {
  const trainingModules = [
    {
      title: "Mental Health Foundations",
      duration: "4 hours",
      description: "Understanding mental health, common conditions, and stigma reduction",
      skills: ["Mental health literacy", "Stigma awareness", "Cultural sensitivity"]
    },
    {
      title: "Active Listening & Communication",
      duration: "6 hours", 
      description: "Developing essential peer support communication skills",
      skills: ["Active listening", "Empathetic responding", "Non-judgmental communication"]
    },
    {
      title: "Crisis Recognition & Response",
      duration: "4 hours",
      description: "Identifying crisis situations and appropriate response protocols",
      skills: ["Warning sign recognition", "Crisis intervention", "Safety planning"]
    },
    {
      title: "Boundary Setting & Self-Care",
      duration: "3 hours",
      description: "Maintaining healthy boundaries and preventing burnout",
      skills: ["Professional boundaries", "Self-care strategies", "Burnout prevention"]
    },
    {
      title: "Community Resources & Referrals", 
      duration: "3 hours",
      description: "Connecting peers with appropriate professional resources",
      skills: ["Resource mapping", "Referral protocols", "Follow-up procedures"]
    }
  ];

  const upcomingTrainings = [
    {
      date: "January 15-17, 2024",
      location: "Lilongwe Community Center",
      type: "In-Person",
      spots: 8,
      language: "English & Chichewa"
    },
    {
      date: "February 5-7, 2024", 
      location: "Online Platform",
      type: "Virtual",
      spots: 15,
      language: "English, Chichewa & Tumbuka"
    },
    {
      date: "February 20-22, 2024",
      location: "Blantyre Youth Center", 
      type: "In-Person",
      spots: 12,
      language: "English & Chichewa"
    }
  ];

  const requirements = [
    "Age 16-25 years old",
    "Commitment to attend full training program",
    "Interest in supporting peers with mental health challenges",
    "Basic literacy in English or local language",
    "Willingness to undergo background screening",
    "Completion of pre-training orientation"
  ];

  const benefits = [
    "Certified Peer Support Specialist credential",
    "Ongoing supervision and mentorship",
    "Access to professional development opportunities",
    "Monthly peer supporter gatherings",
    "Volunteer service hours certificate",
    "Referral network to mental health professionals"
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
            <Badge className="mb-4 sm:mb-6 text-sm px-3 py-1">Training Program</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Peer Support <span className="text-primary">Training</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Become a certified peer support specialist and make a meaningful difference in your community's mental health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                Apply for Training
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">20 Hours Training</CardTitle>
                <CardDescription>Comprehensive 3-day intensive program</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Small Groups</CardTitle>
                <CardDescription>Maximum 15 participants for personalized attention</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle className="text-xl">Certification</CardTitle>
                <CardDescription>Nationally recognized peer support credential</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Training Modules */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Training Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingModules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{module.duration}</Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Trainings */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Upcoming Training Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingTrainings.map((training, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={training.type === "Virtual" ? "secondary" : "default"} className="text-xs">
                        {training.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{training.spots} spots left</span>
                    </div>
                    <CardTitle className="text-lg">{training.date}</CardTitle>
                    <CardDescription className="flex items-center space-x-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{training.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        Languages: {training.language}
                      </div>
                      <Button variant="default" className="w-full text-sm">
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Training Requirements</CardTitle>
                <CardDescription>What you need to apply for the program</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Program Benefits</CardTitle>
                <CardDescription>What you'll gain from completing the training</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our next training cohort and begin your journey as a peer support specialist. 
              Applications are reviewed on a rolling basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="lg" className="text-base">
                Submit Application
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Schedule Information Session
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Questions? Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Speak with our training coordinator
                  </p>
                  <Button variant="outline" size="sm">+265 1 750 751</Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Get detailed program information
                  </p>
                  <Button variant="outline" size="sm">training@21stgen.org</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeerSupportTraining;