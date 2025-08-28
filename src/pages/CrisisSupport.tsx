import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Heart, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  ArrowLeft,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const CrisisSupport = () => {
  const emergencyContacts = [
    {
      title: "24/7 Crisis Helpline",
      phone: "+265 1 750 750",
      description: "Immediate support for mental health emergencies",
      available: "24 hours, 7 days a week",
      languages: ["English", "Chichewa", "Tumbuka"]
    },
    {
      title: "Text Crisis Support",
      phone: "Text 'HELP' to 2626",
      description: "Quick text-based support and resource connection",
      available: "24 hours, 7 days a week",
      languages: ["English", "Chichewa"]
    }
  ];

  const warningSignsData = [
    "Thoughts of self-harm or suicide",
    "Overwhelming feelings of hopelessness",
    "Severe anxiety or panic attacks",
    "Complete withdrawal from friends and family",
    "Dramatic mood changes",
    "Substance abuse escalation",
    "Inability to perform daily activities",
    "Hearing voices or seeing things others don't"
  ];

  const safetyPlan = [
    {
      step: 1,
      title: "Recognize Warning Signs",
      description: "Learn to identify your personal triggers and early warning signs"
    },
    {
      step: 2,
      title: "Use Coping Strategies",
      description: "Practice breathing exercises, grounding techniques, or call a friend"
    },
    {
      step: 3,
      title: "Contact Support Network",
      description: "Reach out to trusted friends, family, or community members"
    },
    {
      step: 4,
      title: "Contact Professionals",
      description: "Call our crisis helpline or visit a healthcare facility"
    },
    {
      step: 5,
      title: "Secure Environment",
      description: "Remove harmful objects and stay with supportive people"
    }
  ];

  const localResources = [
    {
      name: "Kamuzu Central Hospital",
      location: "Lilongwe",
      phone: "+265 1 789 400",
      services: ["Emergency psychiatric care", "24/7 support"]
    },
    {
      name: "Queen Elizabeth Central Hospital",
      location: "Blantyre", 
      phone: "+265 1 878 000",
      services: ["Mental health unit", "Crisis intervention"]
    },
    {
      name: "Mzuzu Central Hospital",
      location: "Mzuzu",
      phone: "+265 1 333 333",
      services: ["Psychiatric services", "Emergency care"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-crisis">Crisis Support</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                If you're experiencing a mental health crisis, you're not alone. 
                Help is available 24/7. Your life matters.
              </p>
            </div>
          </div>

          {/* Emergency Alert */}
          <Alert className="mb-8 border-crisis bg-crisis/5">
            <AlertTriangle className="h-4 w-4 text-crisis" />
            <AlertTitle className="text-crisis">Immediate Help Available</AlertTitle>
            <AlertDescription>
              If you're having thoughts of self-harm or suicide, please reach out immediately. 
              Emergency services: <strong>997</strong> | Crisis Helpline: <strong>+265 1 750 750</strong>
            </AlertDescription>
          </Alert>

          {/* Emergency Contacts */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Immediate Support Contacts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-crisis/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-crisis/10 rounded-full">
                        {contact.title.includes('Text') ? (
                          <MessageCircle className="h-6 w-6 text-crisis" />
                        ) : (
                          <Phone className="h-6 w-6 text-crisis" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-crisis">{contact.title}</CardTitle>
                        <CardDescription>{contact.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-foreground">{contact.phone}</div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{contact.available}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {contact.languages.map((lang, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="crisis" 
                        className="w-full"
                        onClick={() => window.open(`tel:${contact.phone.replace(/[^\d+]/g, '')}`)}
                      >
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Warning Signs */}
          <section className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                Crisis Warning Signs
              </h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <span>Recognize These Signs</span>
                  </CardTitle>
                  <CardDescription>
                    If you or someone you know is experiencing these symptoms, seek help immediately:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {warningSignsData.map((sign, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        <span className="text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Safety Plan */}
          <section className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                Personal Safety Plan
              </h2>
              
              <div className="space-y-4">
                {safetyPlan.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Local Resources */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Local Emergency Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {localResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                    </div>
                    <CardDescription>{resource.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-lg font-semibold text-foreground">{resource.phone}</div>
                      <div className="space-y-1">
                        {resource.services.map((service, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(`tel:${resource.phone.replace(/[^\d+]/g, '')}`)}
                      >
                        Call Hospital
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Support */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                You Are Not Alone
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Crisis support is just one part of your mental health journey. 
                Explore our other resources for ongoing support and community connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/resources">
                  <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5" />
                    <span>Browse Resources</span>
                  </Button>
                </Link>
                <Link to="/youth-connect">
                  <Button variant="hero" size="lg" className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Join Community</span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CrisisSupport;