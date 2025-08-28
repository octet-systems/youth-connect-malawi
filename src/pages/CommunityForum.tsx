import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Users, TrendingUp, Search, Plus, Heart, Reply, MoreHorizontal, Pin, Shield, Clock, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", count: 42, color: "bg-primary/10 text-primary" },
    { id: "anxiety", name: "Anxiety Support", count: 12, color: "bg-blue-100 text-blue-700" },
    { id: "depression", name: "Depression", count: 8, color: "bg-purple-100 text-purple-700" },
    { id: "student-life", name: "Student Life", count: 15, color: "bg-green-100 text-green-700" },
    { id: "relationships", name: "Relationships", count: 7, color: "bg-pink-100 text-pink-700" },
    { id: "success-stories", name: "Success Stories", count: 6, color: "bg-yellow-100 text-yellow-700" },
    { id: "general", name: "General Discussion", count: 14, color: "bg-gray-100 text-gray-700" }
  ];

  const forumStats = [
    { label: "Active Members", value: "1,247", icon: Users },
    { label: "Total Posts", value: "8,342", icon: MessageSquare },
    { label: "Today's Posts", value: "23", icon: TrendingUp },
    { label: "Online Now", value: "156", icon: Eye }
  ];

  const featuredThreads = [
    {
      id: 1,
      title: "Starting University with Social Anxiety - My Journey",
      category: "anxiety",
      author: "Sarah_M",
      authorRole: "Peer Supporter",
      replies: 34,
      views: 156,
      lastActive: "2 hours ago",
      isPinned: true,
      content: "I wanted to share my experience starting university while dealing with social anxiety. It wasn't easy, but here's what helped me...",
      likes: 28,
      isLiked: false,
      isAnswered: true
    },
    {
      id: 2,
      title: "Weekly Check-in: How are you doing this week?",
      category: "general",
      author: "CommunityMod",
      authorRole: "Moderator",
      replies: 67,
      views: 234,
      lastActive: "1 hour ago",
      isPinned: true,
      content: "Let's check in with each other! Share how your week has been going - the good, the challenging, and everything in between.",
      likes: 45,
      isLiked: true,
      isAnswered: false
    },
    {
      id: 3,
      title: "Coping strategies that actually work for exam stress",
      category: "student-life",
      author: "James_K",
      authorRole: "Member",
      replies: 23,
      views: 189,
      lastActive: "3 hours ago",
      isPinned: false,
      content: "With exam season approaching, I thought I'd share some strategies that have really helped me manage stress...",
      likes: 19,
      isLiked: false,
      isAnswered: true
    }
  ];

  const recentThreads = [
    {
      id: 4,
      title: "How to talk to parents about mental health?",
      category: "relationships",
      author: "Anonymous_User",
      replies: 12,
      views: 67,
      lastActive: "45 minutes ago",
      isHot: true
    },
    {
      id: 5,
      title: "Meditation apps - what works for you?",
      category: "anxiety",
      author: "MindfulMary",
      replies: 8,
      views: 43,
      lastActive: "1 hour ago",
      isHot: false
    },
    {
      id: 6,
      title: "Small wins this week 🎉",
      category: "success-stories",
      author: "PositiveVibes",
      replies: 15,
      views: 89,
      lastActive: "2 hours ago",
      isHot: true
    },
    {
      id: 7,
      title: "Study group accountability thread",
      category: "student-life",
      author: "StudyBuddy23",
      replies: 6,
      views: 34,
      lastActive: "4 hours ago",
      isHot: false
    }
  ];

  const moderators = [
    { name: "Dr. Banda", role: "Clinical Moderator", avatar: "DB", status: "online" },
    { name: "Grace_P", role: "Peer Moderator", avatar: "GP", status: "online" },
    { name: "James_M", role: "Community Mod", avatar: "JM", status: "away" }
  ];

  const getInitials = (name) => {
    return name.split('_')[0].substring(0, 2).toUpperCase();
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(c => c.id === categoryId) || categories[0];
  };

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
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Community Forum
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Connect, share, and support each other in a safe moderated space
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {forumStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <stat.icon className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* New Post Button */}
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              New Discussion
            </Button>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 hover:bg-muted/50 transition-colors ${
                        selectedCategory === category.id ? 'bg-primary/5 border-r-2 border-primary' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{category.name}</span>
                        <Badge className={`text-xs ${category.color}`}>{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Online Moderators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Moderators Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {moderators.map((mod, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{mod.avatar}</AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                          mod.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                      <div>
                        <div className="font-medium text-sm">{mod.name}</div>
                        <div className="text-xs text-muted-foreground">{mod.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Be respectful and supportive</div>
                  <div>• No personal attacks or bullying</div>
                  <div>• Protect privacy - no real names</div>
                  <div>• Crisis? Contact emergency services</div>
                  <div>• Report inappropriate content</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                className="pl-10"
              />
            </div>

            <Tabs defaultValue="featured" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>

              {/* Featured Threads */}
              <TabsContent value="featured" className="space-y-4">
                {featuredThreads.map((thread) => {
                  const categoryInfo = getCategoryInfo(thread.category);
                  return (
                    <Card key={thread.id} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              {thread.isPinned && <Pin className="h-4 w-4 text-primary" />}
                              <Badge className={`text-xs ${categoryInfo.color}`}>
                                {categoryInfo.name}
                              </Badge>
                              {thread.isAnswered && (
                                <Badge className="text-xs bg-green-100 text-green-700">Answered</Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg hover:text-primary cursor-pointer">
                              {thread.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {thread.content}
                            </CardDescription>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {getInitials(thread.author)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="text-sm">
                                <span className="font-medium">{thread.author}</span>
                                {thread.authorRole && (
                                  <Badge variant="outline" className="ml-2 text-xs">
                                    {thread.authorRole}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{thread.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{thread.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{thread.lastActive}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-xs">
                              <Heart className={`h-3 w-3 mr-1 ${thread.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                              {thread.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                              <Reply className="h-3 w-3 mr-1" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              {/* Recent Threads */}
              <TabsContent value="recent" className="space-y-4">
                {recentThreads.map((thread) => {
                  const categoryInfo = getCategoryInfo(thread.category);
                  return (
                    <Card key={thread.id} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={`text-xs ${categoryInfo.color}`}>
                                {categoryInfo.name}
                              </Badge>
                              {thread.isHot && (
                                <Badge className="text-xs bg-red-100 text-red-700">🔥 Hot</Badge>
                              )}
                            </div>
                            <h3 className="font-semibold hover:text-primary cursor-pointer mb-2">
                              {thread.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Avatar className="h-5 w-5">
                                  <AvatarFallback className="text-xs">
                                    {getInitials(thread.author)}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{thread.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{thread.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{thread.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{thread.lastActive}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              {/* Trending Threads */}
              <TabsContent value="trending" className="space-y-4">
                <Card className="text-center py-12">
                  <CardContent>
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Trending Topics
                    </h3>
                    <p className="text-muted-foreground">
                      Discover the most active discussions in the community
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Quick Access Actions */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Need Support Right Now?
            </h2>
            <p className="text-muted-foreground">
              Access immediate resources and support options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Live Chat Support</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Peer Support Groups</span>
            </Button>
            <Button variant="crisis" className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Crisis Resources</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;