import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  BookOpen, 
  Video, 
  Calendar, 
  Award, 
  Shield, 
  ArrowLeft,
  UserPlus,
  Lock,
  Mail,
  Phone,
  Globe,
  Star,
  TrendingUp,
  CheckCircle,
  Play,
  Download,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const YouthConnect = () => {
  const platformFeatures = [
    {
      icon: MessageCircle,
      title: "Peer Support Chat",
      description: "Connect with trained peer supporters and other young people in safe, moderated discussions",
      features: ["24/7 peer support", "Anonymous options", "Crisis escalation"],
      demoLink: "/peer-support-chat"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Join topic-based discussions and share experiences with the mental health community",
      features: ["Moderated discussions", "Expert guidance", "Success stories"],
      demoLink: "/community-forum"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access mental health resources, guides, and tools tailored for young people in Malawi",
      features: ["Offline download", "Multiple languages", "Interactive tools"],
      demoLink: "/resource-library"
    },
    {
      icon: Calendar,
      title: "Wellness Tracking",
      description: "Track your mood, set goals, and monitor your mental health journey with privacy",
      features: ["Mood tracking", "Goal setting", "Progress insights"],
      demoLink: "/wellness-tracker"
    },
    {
      icon: Video,
      title: "Virtual Workshops",
      description: "Join live and recorded workshops on mental health topics, coping strategies, and wellness",
      features: ["Live Q&A sessions", "Recording access", "Certificates"],
      demoLink: "/educational-workshops"
    },
    {
      icon: UserPlus,
      title: "Volunteer Program",
      description: "Join our community of volunteers and make a difference in youth mental health",
      features: ["Training provided", "Flexible schedule", "Community impact"],
      demoLink: "/volunteer-registration"
    }
  ];

  const membershipTiers = [
    {
      name: "Connect",
      price: "Free",
      description: "Essential support and resources for all young people",
      features: [
        "Basic peer support access",
        "Essential resource library",
        "Community forums",
        "Crisis support connection",
        "Monthly wellness check-ins"
      ],
      popular: false
    },
    {
      name: "Thrive",
      price: "$2/month",
      description: "Enhanced features for deeper engagement and growth",
      features: [
        "All Connect features",
        "Priority peer support",
        "Advanced wellness tracking",
        "Exclusive workshops",
        "Personalized resource recommendations",
        "Direct mentor connection"
      ],
      popular: true
    },
    {
      name: "Lead",
      price: "$5/month", 
      description: "For peer supporters and community leaders",
      features: [
        "All Thrive features",
        "Peer supporter training",
        "Community management tools",
        "Leadership development",
        "Training certification",
        "Mentorship opportunities"
      ],
      popular: false
    }
  ];

  const communityStats = [
    { number: "2,500+", label: "Active Members", icon: Users },
    { number: "150", label: "Peer Supporters", icon: Heart },
    { number: "500+", label: "Daily Conversations", icon: MessageCircle },
    { number: "95%", label: "Feel More Supported", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Chisomo M.",
      age: 19,
      location: "Lilongwe",
      quote: "Youth Minds Connect helped me through my darkest moments. Having peers who understand what I'm going through made all the difference.",
      rating: 5
    },
    {
      name: "Mphatso K.",
      age: 22,
      location: "Blantyre", 
      quote: "The peer supporter training changed my life. Now I help others in my community and feel like I'm making a real difference.",
      rating: 5
    },
    {
      name: "Thandie L.",
      age: 20,
      location: "Mzuzu",
      quote: "The workshops taught me coping strategies I use every day. The community feels like a safe family where I can be myself.",
      rating: 5
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
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Youth Minds Connect
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A safe, supportive online community where young people in Malawi can connect, 
                learn, and support each other's mental health journey.
              </p>
            </div>
          </div>

          {/* Community Stats */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="membership">Join</TabsTrigger>
              <TabsTrigger value="testimonials">Stories</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-8">
              
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Platform Features
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {platformFeatures.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-primary-soft rounded-lg">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <CardDescription className="mt-1">{feature.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                        <Link to={feature.demoLink}>
                          <Button variant="outline" size="sm" className="w-full">
                            <Play className="h-4 w-4 mr-2" />
                            Try Demo
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Demo Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                  <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    See Youth Minds Connect in Action
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Watch a quick demo to see how our platform works and how it can support your mental health journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="flex items-center space-x-2">
                      <Play className="h-5 w-5" />
                      <span>Watch Demo</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Download App</span>
                    </Button>
                  </div>
                </div>
              </section>
              
            </TabsContent>

            {/* Membership Tab */}
            <TabsContent value="membership" className="space-y-8">
              
              {/* Membership Tiers */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Choose Your Membership
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {membershipTiers.map((tier, index) => (
                    <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${tier.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                      {tier.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-primary mb-2">{tier.name}</CardTitle>
                        <div className="text-3xl font-bold text-foreground mb-2">{tier.price}</div>
                        <CardDescription>{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          {tier.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant={tier.popular ? "hero" : "outline"} 
                          className="w-full"
                        >
                          {tier.price === "Free" ? "Join Free" : `Start ${tier.name}`}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Registration Form */}
              <section>
                <div className="max-w-2xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center flex items-center justify-center space-x-2">
                        <UserPlus className="h-5 w-5 text-primary" />
                        <span>Join Youth Minds Connect</span>
                      </CardTitle>
                      <CardDescription className="text-center">
                        Create your account to start connecting with peers and accessing mental health resources
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        
                        {/* Personal Info */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" placeholder="Your first name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" placeholder="Your last name" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" type="email" placeholder="your.email@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+265 999 123 456" />
                          </div>
                        </div>

                        {/* Demographics */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age">Age *</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select age range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="13-15">13-15 years</SelectItem>
                                <SelectItem value="16-18">16-18 years</SelectItem>
                                <SelectItem value="19-21">19-21 years</SelectItem>
                                <SelectItem value="22-25">22-25 years</SelectItem>
                                <SelectItem value="26-30">26-30 years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location">Location *</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select region" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="central">Central Region</SelectItem>
                                <SelectItem value="northern">Northern Region</SelectItem>
                                <SelectItem value="southern">Southern Region</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Interests */}
                        <div className="space-y-2">
                          <Label>Areas of Interest (Optional)</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="anxiety" />
                              <Label htmlFor="anxiety" className="text-sm">Anxiety Support</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="depression" />
                              <Label htmlFor="depression" className="text-sm">Depression Support</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="stress" />
                              <Label htmlFor="stress" className="text-sm">Stress Management</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="peer-support" />
                              <Label htmlFor="peer-support" className="text-sm">Peer Support</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="academic" />
                              <Label htmlFor="academic" className="text-sm">Academic Pressure</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="relationships" />
                              <Label htmlFor="relationships" className="text-sm">Relationships</Label>
                            </div>
                          </div>
                        </div>

                        {/* Agreements */}
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox id="terms" required />
                            <Label htmlFor="terms" className="text-sm text-muted-foreground">
                              I agree to the <Link to="/privacy" className="text-primary hover:underline">Terms of Service and Privacy Policy</Link> *
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="age-confirm" required />
                            <Label htmlFor="age-confirm" className="text-sm text-muted-foreground">
                              I confirm that I am 13 years or older *
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="communications" />
                            <Label htmlFor="communications" className="text-sm text-muted-foreground">
                              I'd like to receive updates about workshops and community events
                            </Label>
                          </div>
                        </div>

                        <Button type="submit" variant="hero" size="lg" className="w-full">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Create Account
                        </Button>
                        
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-8">
              
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Community Stories
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-muted-foreground italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Age {testimonial.age}, {testimonial.location}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
              
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-8">
              
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Your Safety is Our Priority
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span>Privacy & Security</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>End-to-end encryption for all conversations</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Anonymous participation options available</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Strict data protection policies</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>No sharing of personal information</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span>Community Guidelines</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>24/7 moderation by trained professionals</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Zero tolerance for harassment or abuse</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Crisis intervention protocols in place</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Peer supporter verification system</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                  </div>

                  {/* Crisis Support Notice */}
                  <div className="bg-crisis/5 border border-crisis/20 rounded-lg p-6 mt-8 text-center">
                    <h3 className="text-lg font-semibold text-crisis mb-2">
                      Crisis Support Available
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      If you're in crisis or having thoughts of self-harm, immediate professional support is available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/crisis-support">
                        <Button variant="crisis" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>Get Crisis Support</span>
                        </Button>
                      </Link>
                      <Button variant="outline" className="flex items-center space-x-2">
                        <Headphones className="h-4 w-4" />
                        <span>Talk to Counselor</span>
                      </Button>
                    </div>
                  </div>

                </div>
              </section>
              
            </TabsContent>

          </Tabs>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthConnect;