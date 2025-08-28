import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Heart, Clock, MapPin, CheckCircle, AlertCircle, FileText, Phone, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const VolunteerRegistration = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    motivation: "",
    experience: "",
    availability: [],
    skills: [],
    emergencyContact: "",
    emergencyPhone: ""
  });

  const volunteerRoles = [
    {
      id: "peer-supporter",
      title: "Peer Support Specialist",
      commitment: "8-10 hours/month",
      description: "Provide one-on-one support to young people experiencing mental health challenges",
      requirements: ["Completed peer support training", "Personal recovery experience", "Good listening skills"],
      training: "20-hour certification program required"
    },
    {
      id: "community-educator",
      title: "Community Educator", 
      commitment: "4-6 hours/month",
      description: "Lead mental health awareness sessions in schools and communities",
      requirements: ["Public speaking skills", "Cultural sensitivity", "Basic mental health knowledge"],
      training: "8-hour orientation program"
    },
    {
      id: "event-coordinator",
      title: "Event Coordinator",
      commitment: "6-8 hours/month", 
      description: "Plan and manage community outreach events and workshops",
      requirements: ["Event planning experience", "Team coordination skills", "Local language fluency"],
      training: "4-hour event management training"
    },
    {
      id: "digital-supporter",
      title: "Digital Platform Supporter",
      commitment: "3-5 hours/month",
      description: "Moderate online forums and provide digital peer support",
      requirements: ["Digital literacy", "Online communication skills", "Reliable internet access"],
      training: "6-hour digital safety and moderation training"
    }
  ];

  const availabilityOptions = [
    "Weekday mornings", "Weekday afternoons", "Weekday evenings",
    "Weekend mornings", "Weekend afternoons", "Weekend evenings",
    "Flexible/As needed"
  ];

  const skillsOptions = [
    "Mental health advocacy", "Public speaking", "Event planning", "Social media", 
    "Writing/blogging", "Photography", "Translation", "Crisis intervention",
    "Group facilitation", "Administrative support", "Fundraising", "Community outreach"
  ];

  const locations = [
    "Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Other"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 text-sm px-3 py-1">Join Our Team</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Volunteer <span className="text-secondary">Registration</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Join our community of dedicated volunteers making a difference in youth mental health across Malawi.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-primary" />
                <span>150+ Active Volunteers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-secondary" />
                <span>4,500+ Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Volunteer Roles Selection */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              Choose Your Volunteer Role
            </h2>
            <RadioGroup value={selectedRole} onValueChange={setSelectedRole} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {volunteerRoles.map((role) => (
                <Card key={role.id} className={`cursor-pointer transition-all duration-300 ${selectedRole === role.id ? 'ring-2 ring-primary border-primary' : 'hover:shadow-lg'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={role.id} id={role.id} />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{role.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">{role.commitment}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed mt-2">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {role.requirements.map((req, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Training:</h4>
                        <p className="text-xs text-muted-foreground">{role.training}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>

          {/* Registration Form */}
          {selectedRole && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Registration Form</CardTitle>
                <CardDescription>
                  Please provide your information to join our volunteer team as a {volunteerRoles.find(r => r.id === selectedRole)?.title}.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+265 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16-18">16-18 years</SelectItem>
                        <SelectItem value="19-24">19-24 years</SelectItem>
                        <SelectItem value="25-30">25-30 years</SelectItem>
                        <SelectItem value="31-40">31-40 years</SelectItem>
                        <SelectItem value="40+">40+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Motivation and Experience */}
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea 
                    id="motivation"
                    placeholder="Share your motivation for joining our mental health advocacy work..."
                    className="min-h-[100px]"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience (Optional)</Label>
                  <Textarea 
                    id="experience"
                    placeholder="Describe any relevant experience in mental health, community work, or volunteering..."
                    className="min-h-[80px]"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  />
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <Label>Availability *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {availabilityOptions.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <Label>Skills & Interests (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skillsOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={skill} />
                        <Label htmlFor={skill} className="text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input 
                        id="emergencyContact"
                        placeholder="Full name of emergency contact"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input 
                        id="emergencyPhone"
                        placeholder="+265 XXX XXX XXX"
                        value={formData.emergencyPhone}
                        onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="background" />
                    <Label htmlFor="background" className="text-sm leading-relaxed">
                      I consent to a background check as required for volunteer positions involving youth
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="training" />
                    <Label htmlFor="training" className="text-sm leading-relaxed">
                      I commit to completing the required training program for my volunteer role
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed">
                      I agree to the privacy policy and volunteer code of conduct
                    </Label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button variant="hero" size="lg" className="text-base flex-1">
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg" className="text-base">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <span>What Happens Next?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">1. Application Review</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll review your application within 3-5 business days
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold">2. Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Brief phone or video interview to discuss your interests
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold">3. Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete role-specific training and orientation
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Questions?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact our volunteer coordinator for more information:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>volunteers@21stgen.org</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span>+265 1 750 752</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistration;