import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowLeft, 
  Send, 
  MessageCircle,
  Users,
  Building,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = {
    address: {
      street: "Area 10, Sector 2",
      city: "Lilongwe",
      country: "Malawi",
      postalCode: "P.O. Box 31234"
    },
    phone: {
      main: "+265 1 750 750",
      crisis: "+265 1 750 750",
      whatsapp: "+265 999 123 456"
    },
    email: {
      general: "info@21stgen.mw", 
      programs: "programs@21stgen.mw",
      partnerships: "partnerships@21stgen.mw"
    },
    hours: {
      office: "Monday - Friday: 8:00 AM - 5:00 PM",
      crisis: "24/7 Crisis Support Available"
    }
  };

  const officeLocations = [
    {
      name: "Main Office - Lilongwe",
      address: "Area 10, Sector 2, Lilongwe",
      phone: "+265 1 750 750",
      services: ["Administrative headquarters", "Program coordination", "Training center"],
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      name: "Community Hub - Blantyre", 
      address: "Blantyre City Center, Blantyre",
      phone: "+265 1 878 100",
      services: ["Community outreach", "Peer support groups", "Resource center"],
      hours: "Mon-Sat: 9AM-4PM"
    },
    {
      name: "Northern Office - Mzuzu",
      address: "Mzuzu University Campus, Mzuzu", 
      phone: "+265 1 333 400",
      services: ["University partnerships", "Youth programs", "Research initiatives"],
      hours: "Mon-Fri: 9AM-3PM"
    }
  ];

  const socialMedia = [
    { platform: "Facebook", handle: "@21stGenMalawi", icon: Facebook, url: "#" },
    { platform: "Instagram", handle: "@21stgeneration_mw", icon: Instagram, url: "#" },
    { platform: "Twitter", handle: "@21stGenMW", icon: Twitter, url: "#" }
  ];

  const inquiryTypes = [
    "General Information",
    "Program Partnership",
    "Volunteer Opportunities", 
    "Donation Inquiry",
    "Crisis Support",
    "Media & Press",
    "Research Collaboration",
    "Training Request"
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
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Have questions about our programs? Want to get involved? Need support? 
                We're here to help and would love to hear from you.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    
                    {/* Name and Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
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

                    {/* Organization and Inquiry Type */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization (Optional)</Label>
                        <Input id="organization" placeholder="Your organization name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type, index) => (
                              <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject and Message */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief subject of your message" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry, how we can help, or how you'd like to get involved..."
                        rows={5}
                        required 
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                          Email
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                          Phone
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                          WhatsApp
                        </Badge>
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Quick Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Main Office</h4>
                    <p className="text-sm text-muted-foreground mb-1">{contactInfo.phone.main}</p>
                    <p className="text-xs text-muted-foreground">{contactInfo.hours.office}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-crisis mb-2">Crisis Support</h4>
                    <p className="text-sm text-muted-foreground mb-1">{contactInfo.phone.crisis}</p>
                    <p className="text-xs text-muted-foreground">{contactInfo.hours.crisis}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-sm text-muted-foreground">{contactInfo.email.general}</p>
                  </div>

                  <div className="pt-2">
                    <Button variant="crisis" size="sm" className="w-full mb-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Crisis Line
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>

                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Visit Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.country}<br />
                      {contactInfo.address.postalCode}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                        <span>{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Office Locations */}
          <section className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Our Locations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {officeLocations.map((location, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-primary" />
                      <span>{location.name}</span>
                    </CardTitle>
                    <CardDescription>{location.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{location.phone}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{location.hours}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Services:</h4>
                        <div className="space-y-1">
                          {location.services.map((service, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span className="text-xs text-muted-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Partnership Inquiries */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Interested in Partnership?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking to collaborate with organizations, schools, healthcare providers, 
                and community leaders to expand mental health support across Malawi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule a Meeting
                </Button>
                <Button variant="outline" size="lg">
                  Download Partnership Info
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;