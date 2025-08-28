import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  ArrowLeft, 
  CheckCircle, 
  CreditCard, 
  Smartphone, 
  Building,
  Calendar,
  Shield,
  Award,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const Donation = () => {
  const donationTiers = [
    {
      amount: "$10",
      title: "Resource Supporter",
      description: "Provides mental health resources and materials for 5 young people",
      impact: [
        "Digital resource access for 5 youth",
        "Printed educational materials",
        "Mobile app premium features"
      ],
      popular: false
    },
    {
      amount: "$25",
      title: "Training Enabler", 
      description: "Funds one peer support training session for community members",
      impact: [
        "Training materials for 10 participants",
        "Certified trainer facilitation",
        "Follow-up support resources"
      ],
      popular: true
    },
    {
      amount: "$50",
      title: "Workshop Sponsor",
      description: "Supports a complete community mental health workshop for 30 people",
      impact: [
        "Full workshop facilitation",
        "Materials and refreshments", 
        "Take-home resource packages"
      ],
      popular: false
    },
    {
      amount: "$100",
      title: "Program Champion",
      description: "Enables comprehensive mental health programming in one community",
      impact: [
        "Multi-session program delivery",
        "Community leader training",
        "Ongoing support infrastructure"
      ],
      popular: false
    }
  ];

  const impactStats = [
    {
      number: "2,500+",
      label: "Youth Reached",
      description: "Young people who have accessed our programs and resources",
      progress: 75
    },
    {
      number: "150",
      label: "Peer Supporters Trained", 
      description: "Community members trained to provide mental health first aid",
      progress: 60
    },
    {
      number: "15",
      label: "Communities Served",
      description: "Rural and urban communities with active programs",
      progress: 45
    },
    {
      number: "85%",
      label: "Report Improvement",
      description: "Participants who report improved mental wellbeing",
      progress: 85
    }
  ];

  const paymentMethods = [
    {
      type: "Mobile Money",
      icon: Smartphone,
      description: "Airtel Money, TNM Mpamba",
      available: true,
      fees: "No additional fees"
    },
    {
      type: "Bank Transfer",
      icon: Building,
      description: "National Bank, Standard Bank",
      available: true,
      fees: "Standard bank fees apply"
    },
    {
      type: "Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard",
      available: true,
      fees: "3% processing fee"
    }
  ];

  const monthlyGoals = [
    {
      goal: "Train 20 new peer supporters",
      amount: "$500",
      raised: "$350",
      progress: 70,
      deadline: "End of March 2024"
    },
    {
      goal: "Launch 3 new community programs",
      amount: "$1,200", 
      raised: "$480",
      progress: 40,
      deadline: "End of April 2024"
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
                Support <span className="text-primary">Young Minds</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your donation directly supports mental health programs for young people across Malawi. 
                Every contribution makes a meaningful difference in a young person's life.
              </p>
            </div>
          </div>

          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="donate">Make Donation</TabsTrigger>
              <TabsTrigger value="impact">Our Impact</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Goals</TabsTrigger>
            </TabsList>

            {/* Donation Tab */}
            <TabsContent value="donate" className="space-y-8">
              
              {/* Donation Tiers */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Choose Your Impact Level
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {donationTiers.map((tier, index) => (
                    <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${tier.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                      {tier.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                        <CardTitle className="text-lg">{tier.title}</CardTitle>
                        <CardDescription className="text-sm">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {tier.impact.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant={tier.popular ? "hero" : "outline"} 
                          className="w-full"
                          size="sm"
                        >
                          Donate {tier.amount}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Custom Amount */}
                <Card className="max-w-md mx-auto">
                  <CardHeader className="text-center">
                    <CardTitle>Custom Amount</CardTitle>
                    <CardDescription>Enter your preferred donation amount</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <input 
                          type="number" 
                          placeholder="Enter amount"
                          className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <Button variant="hero" className="w-full">
                        Donate Custom Amount
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Payment Methods */}
              <section>
                <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                  Payment Methods
                </h2>
                
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {paymentMethods.map((method, index) => (
                    <Card key={index} className={`text-center ${method.available ? 'hover:shadow-md transition-all duration-300' : 'opacity-50'}`}>
                      <CardContent className="p-6">
                        <method.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-foreground mb-2">{method.type}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-xs text-muted-foreground">{method.fees}</p>
                        {method.available && (
                          <Badge variant="secondary" className="mt-2">Available</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Security Notice */}
              <div className="bg-muted/30 rounded-lg p-6 text-center max-w-2xl mx-auto">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Secure & Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  All donations are processed securely and 100% goes directly to mental health programs. 
                  You'll receive detailed impact reports showing how your contribution is making a difference.
                </p>
              </div>
              
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-8">
              
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Your Impact in Numbers
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {impactStats.map((stat, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                        <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{stat.description}</p>
                        <Progress value={stat.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground mt-1 block">{stat.progress}% of annual goal</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Success Stories */}
              <section>
                <h2 className="text-2xl font-bold text-center text-foreground mb-8">
                  Success Stories
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-3">Peer Support Network - Lilongwe</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        "Through donor support, we trained 25 young people as peer supporters. 
                        They've now helped over 200 youth in their communities access mental health resources."
                      </p>
                      <Badge variant="secondary">Funded by donations like yours</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
                    <CardContent className="p-6">
                      <BookOpen className="h-8 w-8 text-secondary mb-4" />
                      <h3 className="font-semibold text-foreground mb-3">Community Workshops - Blantyre</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        "Monthly donations enabled us to run weekly workshops for 6 months, 
                        reaching 150 young people with mental health education and support."
                      </p>
                      <Badge variant="secondary">Ongoing program</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
            </TabsContent>

            {/* Monthly Goals Tab */}
            <TabsContent value="monthly" className="space-y-8">
              
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                  Current Fundraising Goals
                </h2>
                
                <div className="space-y-6 max-w-2xl mx-auto">
                  {monthlyGoals.map((goal, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">{goal.goal}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{goal.deadline}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{goal.raised}</div>
                            <div className="text-sm text-muted-foreground">of {goal.amount}</div>
                          </div>
                        </div>
                        
                        <Progress value={goal.progress} className="h-3 mb-3" />
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{goal.progress}% funded</span>
                          <Button variant="outline" size="sm">
                            Support This Goal
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Monthly Giving */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Become a Monthly Supporter
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Monthly donations help us plan and sustain long-term programs. 
                    Even $5/month makes a significant impact over time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="flex items-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>Start Monthly Giving</span>
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
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

export default Donation;