import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Send, Shield, Users, Heart, Phone, Video, Plus, Search, MoreVertical, AlertTriangle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PeerSupportChat = () => {
  const [selectedChat, setSelectedChat] = useState("anxiety-support");
  const [messageText, setMessageText] = useState("");

  const supportGroups = [
    {
      id: "anxiety-support",
      name: "Anxiety Support Circle",
      members: 24,
      online: 8,
      lastMessage: "Thank you all for the support today 💙",
      lastTime: "2 min ago",
      unread: 3,
      moderator: "Sarah K.",
      topic: "Managing daily anxiety",
      type: "group"
    },
    {
      id: "depression-help",
      name: "Depression Support Group",
      members: 18,
      online: 5,
      lastMessage: "Tomorrow is a new day, we got this!",
      lastTime: "5 min ago",
      unread: 0,
      moderator: "James M.",
      topic: "Coping with depression",
      type: "group"
    },
    {
      id: "peer-mentor",
      name: "Grace - Peer Mentor",
      members: 1,
      online: 1,
      lastMessage: "How has your week been going?",
      lastTime: "1 hour ago",
      unread: 1,
      topic: "One-on-one support",
      type: "direct"
    },
    {
      id: "study-stress",
      name: "Study Stress Support",
      members: 32,
      online: 12,
      lastMessage: "Exam prep strategies that actually work",
      lastTime: "10 min ago",
      unread: 0,
      moderator: "Dr. Banda",
      topic: "Academic stress management",
      type: "group"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah K.",
      avatar: "/api/placeholder/32/32",
      message: "Good morning everyone! How is everyone feeling today?",
      time: "9:15 AM",
      type: "text",
      isModerator: true
    },
    {
      id: 2,
      sender: "Alex",
      avatar: "/api/placeholder/32/32",
      message: "Been feeling a bit overwhelmed with work this week",
      time: "9:18 AM",
      type: "text",
      isModerator: false
    },
    {
      id: 3,
      sender: "Maria",
      avatar: "/api/placeholder/32/32",
      message: "I understand that feeling Alex. Remember the breathing techniques we practiced?",
      time: "9:20 AM",
      type: "text",
      isModerator: false
    },
    {
      id: 4,
      sender: "You",
      avatar: "/api/placeholder/32/32",
      message: "Yes, the 4-7-8 breathing really helped me yesterday",
      time: "9:22 AM",
      type: "text",
      isModerator: false,
      isOwn: true
    },
    {
      id: 5,
      sender: "Sarah K.",
      avatar: "/api/placeholder/32/32",
      message: "That's wonderful to hear! Would anyone like to share other techniques that have worked for them?",
      time: "9:25 AM",
      type: "text",
      isModerator: true
    },
    {
      id: 6,
      sender: "David",
      avatar: "/api/placeholder/32/32",
      message: "Journaling has been my go-to lately. Just 5 minutes before bed",
      time: "9:28 AM",
      type: "text",
      isModerator: false
    },
    {
      id: 7,
      sender: "Alex",
      avatar: "/api/placeholder/32/32",
      message: "Thank you all for the support today 💙",
      time: "9:32 AM",
      type: "text",
      isModerator: false
    }
  ];

  const onlineUsers = [
    { name: "Sarah K.", role: "Moderator", status: "online", avatar: "/api/placeholder/32/32" },
    { name: "Maria", role: "Peer Supporter", status: "online", avatar: "/api/placeholder/32/32" },
    { name: "Alex", role: "Member", status: "online", avatar: "/api/placeholder/32/32" },
    { name: "David", role: "Member", status: "online", avatar: "/api/placeholder/32/32" },
    { name: "Lisa", role: "Member", status: "online", avatar: "/api/placeholder/32/32" },
    { name: "James", role: "Member", status: "away", avatar: "/api/placeholder/32/32" },
    { name: "Emma", role: "Member", status: "away", avatar: "/api/placeholder/32/32" },
    { name: "Robert", role: "Member", status: "away", avatar: "/api/placeholder/32/32" }
  ];

  const crisisResources = [
    { name: "24/7 Crisis Helpline", contact: "+265 1 750 750", type: "phone" },
    { name: "Emergency Services", contact: "911", type: "emergency" },
    { name: "Text Crisis Support", contact: "Text 'HELP' to 2525", type: "text" }
  ];

  const selectedGroup = supportGroups.find(g => g.id === selectedChat);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Peer Support Chat</h1>
              <p className="text-muted-foreground mt-1">Safe, moderated spaces for mental health support</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Online
              </Badge>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-1" />
                Safety
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
          
          {/* Chat List Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Support Groups</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search groups..." className="pl-8 h-9" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {supportGroups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => setSelectedChat(group.id)}
                      className={`w-full text-left p-3 hover:bg-muted/50 transition-colors ${
                        selectedChat === group.id ? 'bg-primary/5 border-r-2 border-primary' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <div className="relative">
                            {group.type === 'group' ? (
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <Users className="h-4 w-4 text-primary" />
                              </div>
                            ) : (
                              <Avatar className="w-8 h-8">
                                <AvatarImage src="/api/placeholder/32/32" />
                                <AvatarFallback>GM</AvatarFallback>
                              </Avatar>
                            )}
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{group.name}</h4>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <span>{group.members} members</span>
                              <span>•</span>
                              <span>{group.online} online</span>
                            </div>
                          </div>
                        </div>
                        {group.unread > 0 && (
                          <Badge variant="destructive" className="text-xs w-5 h-5 p-0 flex items-center justify-center">
                            {group.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{group.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{group.lastTime}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedGroup?.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedGroup?.topic}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 p-4 overflow-auto">
                <div className="space-y-4">
                  {/* Safety Notice */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center space-x-2 text-blue-800">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">This is a moderated safe space</span>
                    </div>
                    <p className="text-xs text-blue-700 mt-1">
                      All conversations are monitored by trained peer supporters
                    </p>
                  </div>

                  {/* Messages */}
                  {messages.map((message) => (
                    <div key={message.id} className={`flex space-x-3 ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`flex-1 ${message.isOwn ? 'text-right' : ''}`}>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium">{message.sender}</span>
                          {message.isModerator && (
                            <Badge variant="secondary" className="text-xs">Moderator</Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <div className={`p-3 rounded-lg max-w-xs ${
                          message.isOwn 
                            ? 'bg-primary text-primary-foreground ml-auto' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{message.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a supportive message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && messageText.trim() && setMessageText('')}
                  />
                  <Button 
                    variant="default" 
                    size="sm"
                    disabled={!messageText.trim()}
                    onClick={() => setMessageText('')}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Remember to be kind, respectful, and supportive to all members
                </p>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Online Users */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Online Now ({selectedGroup?.online})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2 max-h-48 overflow-auto">
                  {onlineUsers.slice(0, selectedGroup?.online || 5).map((user, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 hover:bg-muted/50">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{user.name}</h4>
                        <p className="text-xs text-muted-foreground">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span>Crisis Support</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  Immediate help when you need it most
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {crisisResources.map((resource, index) => (
                  <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-medium text-sm text-red-800">{resource.name}</h4>
                    <p className="text-sm text-red-700 mt-1">{resource.contact}</p>
                    <Button variant="destructive" size="sm" className="w-full mt-2">
                      <Phone className="h-3 w-3 mr-1" />
                      Contact Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  <span>Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Be kind and respectful to all members</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Share experiences, not advice</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain confidentiality</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Report concerning messages</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerSupportChat;