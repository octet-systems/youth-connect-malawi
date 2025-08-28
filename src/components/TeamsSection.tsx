import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Linkedin, Mail, MapPin } from "lucide-react";

const TeamsSection = () => {
  const teamMembers = [
    {
      name: "Gray Mafuta",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Passionate advocate for youth mental health with over 10 years of experience in community development and social impact.",
      image: "/api/placeholder/300/300",
      location: "Lilongwe, Malawi",
      email: "gray.mafuta@21stgen.org",
      linkedin: "https://linkedin.com/in/graymafuta",
      expertise: ["Mental Health Advocacy", "Community Development", "Strategic Leadership"]
    },
    {
      name: "Gray Mafuta",
      role: "Chief Executive Officer", 
      department: "Leadership",
      bio: "Passionate advocate for youth mental health with over 10 years of experience in community development and social impact.",
      image: "/api/placeholder/300/300",
      location: "Lilongwe, Malawi",
      email: "gray.mafuta@21stgen.org",
      linkedin: "https://linkedin.com/in/graymafuta",
      expertise: ["Mental Health Advocacy", "Community Development", "Strategic Leadership"]
    },
    {
      name: "Gray Mafuta",
      role: "Chief Executive Officer",
      department: "Leadership", 
      bio: "Passionate advocate for youth mental health with over 10 years of experience in community development and social impact.",
      image: "/api/placeholder/300/300",
      location: "Lilongwe, Malawi",
      email: "gray.mafuta@21stgen.org",
      linkedin: "https://linkedin.com/in/graymafuta",
      expertise: ["Mental Health Advocacy", "Community Development", "Strategic Leadership"]
    },
    {
      name: "Gray Mafuta",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Passionate advocate for youth mental health with over 10 years of experience in community development and social impact.",
      image: "/api/placeholder/300/300",
      location: "Lilongwe, Malawi", 
      email: "gray.mafuta@21stgen.org",
      linkedin: "https://linkedin.com/in/graymafuta",
      expertise: ["Mental Health Advocacy", "Community Development", "Strategic Leadership"]
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            Dedicated professionals working together to transform mental health support 
            for young people across Malawi.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 bg-primary-soft rounded-xl">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">25+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-secondary-soft rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-foreground">8</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-accent/20 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-foreground">5</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Cities</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-muted rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Dedicated</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border overflow-hidden group">
              {/* Profile Image */}
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary-soft text-primary text-xs">
                    {member.department}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl text-card-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-sm">
                  {member.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Bio */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Location */}
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span>{member.location}</span>
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Contact Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Linkedin className="h-3 w-3 mr-1" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Join Our Mission
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We're always looking for passionate individuals who share our commitment to youth mental health. 
            Explore career opportunities and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-sm sm:text-base">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;