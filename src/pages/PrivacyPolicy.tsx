import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  ArrowLeft, 
  Mail, 
  Phone, 
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "December 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your privacy and safety are fundamental to everything we do at 21st Generation.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Privacy Quick Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>We never sell your data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Anonymous options available</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                
                <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Age range and general location (region, not specific address)</li>
                  <li>• Program participation and engagement data</li>
                  <li>• Communication preferences and accessibility needs</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Platform Usage Data</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Login times and frequency of platform use</li>
                  <li>• Features accessed and resources downloaded</li>
                  <li>• Workshop attendance and completion records</li>
                  <li>• Peer support interactions (anonymized)</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Health & Wellness Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mood tracking data (if you choose to use this feature)</li>
                  <li>• Wellness goals and progress (stored locally when possible)</li>
                  <li>• Crisis support interactions (for safety and follow-up)</li>
                  <li>• Program feedback and outcome assessments</li>
                </ul>

              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                
                <h3 className="text-lg font-semibold text-foreground mb-3">Program Delivery</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Provide personalized mental health resources and support</li>
                  <li>• Connect you with appropriate peer supporters and programs</li>
                  <li>• Send program updates and workshop notifications</li>
                  <li>• Improve our services based on user feedback</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Safety & Crisis Response</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Monitor for crisis situations requiring immediate intervention</li>
                  <li>• Connect you with appropriate emergency and professional support</li>
                  <li>• Follow up after crisis support to ensure ongoing safety</li>
                  <li>• Maintain records for continuity of care</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Research & Improvement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analyze program effectiveness and outcomes (anonymized data only)</li>
                  <li>• Develop better resources and support tools</li>
                  <li>• Share aggregated, non-identifiable insights with partners</li>
                  <li>• Secure funding and support for program expansion</li>
                </ul>

              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>How We Protect Your Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                
                <h3 className="text-lg font-semibold text-foreground mb-3">Technical Security</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• End-to-end encryption for all sensitive communications</li>
                  <li>• Secure, encrypted databases with restricted access</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Two-factor authentication for staff and admin accounts</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Access Controls</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Strict need-to-know access policies for staff</li>
                  <li>• Regular training on privacy and confidentiality</li>
                  <li>• Audit trails for all data access and modifications</li>
                  <li>• Immediate revocation of access for former staff</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-3">Physical Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Secure server facilities with restricted physical access</li>
                  <li>• Encrypted backup systems in multiple locations</li>
                  <li>• Secure disposal of physical documents and devices</li>
                  <li>• Regular disaster recovery testing and procedures</li>
                </ul>

              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Access & Control</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• View all data we have about you</li>
                      <li>• Update or correct your information</li>
                      <li>• Download your data in portable format</li>
                      <li>• Delete your account and associated data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Communication Preferences</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Opt out of non-essential communications</li>
                      <li>• Choose how we contact you</li>
                      <li>• Set communication frequency preferences</li>
                      <li>• Request anonymous participation</li>
                    </ul>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Special Considerations */}
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <span>Important Considerations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                
                <h3 className="text-lg font-semibold text-foreground mb-3">Crisis Situations</h3>
                <p className="text-muted-foreground mb-4">
                  In situations where we believe you or others may be at immediate risk of harm, 
                  we may need to share information with emergency services, healthcare providers, 
                  or law enforcement to ensure safety. We will always use the minimum information 
                  necessary and inform you of any such disclosures when it is safe to do so.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Age and Consent</h3>
                <p className="text-muted-foreground mb-4">
                  For users under 18, we may require parental consent for certain activities. 
                  However, we recognize that some young people may need confidential support, 
                  and we work within Malawi's legal framework to provide appropriate privacy protections.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may be required to disclose information in response to valid legal processes, 
                  such as court orders or subpoenas. In such cases, we will notify affected users 
                  when legally permitted to do so.
                </p>

              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Questions About Privacy?</CardTitle>
                <CardDescription>
                  We're here to help with any privacy concerns or questions you may have.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Contact Our Privacy Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>privacy@21stgen.mw</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+265 1 750 750</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Response Times</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• General inquiries: Within 3 business days</li>
                      <li>• Data access requests: Within 7 business days</li>
                      <li>• Privacy concerns: Within 24 hours</li>
                      <li>• Account deletion: Immediate processing</li>
                    </ul>
                  </div>

                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button variant="default">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Privacy Team
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Request My Data
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>

          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;