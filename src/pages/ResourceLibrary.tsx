import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Download, Eye, Search, Filter, Heart, Star, Clock, User, Play, Headphones, FileText, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", name: "All Resources", count: 48 },
    { id: "anxiety", name: "Anxiety", count: 12 },
    { id: "depression", name: "Depression", count: 10 },
    { id: "stress", name: "Stress Management", count: 8 },
    { id: "relationships", name: "Relationships", count: 7 },
    { id: "self-care", name: "Self-Care", count: 6 },
    { id: "crisis", name: "Crisis Support", count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Beginner's Guide",
      description: "Comprehensive guide to understanding and managing anxiety symptoms in daily life.",
      category: "anxiety",
      type: "article",
      duration: "15 min read",
      rating: 4.8,
      views: 1250,
      bookmarked: true,
      author: "Dr. Sarah Banda",
      difficulty: "Beginner",
      thumbnail: "/api/placeholder/300/200",
      tags: ["anxiety", "coping", "beginner"]
    },
    {
      id: 2,
      title: "Breathing Techniques for Panic Attacks",
      description: "Audio-guided breathing exercises specifically designed for managing panic attacks.",
      category: "anxiety",
      type: "audio",
      duration: "8 min",
      rating: 4.9,
      views: 980,
      bookmarked: false,
      author: "James Mwale",
      difficulty: "Beginner",
      thumbnail: "/api/placeholder/300/200",
      tags: ["panic", "breathing", "techniques"]
    },
    {
      id: 3,
      title: "Coping with Depression: Daily Strategies",
      description: "Practical strategies and tools for managing depression symptoms on a day-to-day basis.",
      category: "depression",
      type: "video",
      duration: "22 min",
      rating: 4.7,
      views: 2100,
      bookmarked: true,
      author: "Grace Phiri",
      difficulty: "Intermediate",
      thumbnail: "/api/placeholder/300/200",
      tags: ["depression", "daily habits", "strategies"]
    },
    {
      id: 4,
      title: "Stress Management Workbook",
      description: "Interactive workbook with exercises and worksheets for identifying and managing stress.",
      category: "stress",
      type: "workbook",
      duration: "45 min",
      rating: 4.6,
      views: 750,
      bookmarked: false,
      author: "Youth Connect Team",
      difficulty: "Intermediate",
      thumbnail: "/api/placeholder/300/200",
      tags: ["stress", "workbook", "exercises"]
    },
    {
      id: 5,
      title: "Building Healthy Relationships",
      description: "Guide to developing and maintaining healthy relationships with friends, family, and partners.",
      category: "relationships",
      type: "article",
      duration: "20 min read",
      rating: 4.5,
      views: 1100,
      bookmarked: false,
      author: "Dr. Mary Kumwenda",
      difficulty: "Beginner",
      thumbnail: "/api/placeholder/300/200",
      tags: ["relationships", "communication", "boundaries"]
    },
    {
      id: 6,
      title: "Self-Care Routine Planner",
      description: "Customizable planner to help you develop and maintain a personal self-care routine.",
      category: "self-care",
      type: "tool",
      duration: "30 min",
      rating: 4.8,
      views: 890,
      bookmarked: true,
      author: "Wellness Team",
      difficulty: "Beginner",
      thumbnail: "/api/placeholder/300/200",
      tags: ["self-care", "planning", "routine"]
    }
  ];

  const featuredResource = {
    title: "Mental Health First Aid: Complete Guide",
    description: "Learn how to recognize, understand, and respond to signs of mental illness and substance use disorders in yourself and others.",
    type: "course",
    duration: "2 hours",
    rating: 4.9,
    students: 3200,
    author: "21st Generation Team",
    thumbnail: "/api/placeholder/400/250",
    modules: 8,
    certificate: true
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article': return <FileText className="h-4 w-4" />;
      case 'video': return <Play className="h-4 w-4" />;
      case 'audio': return <Headphones className="h-4 w-4" />;
      case 'workbook': return <BookOpen className="h-4 w-4" />;
      case 'tool': return <FileText className="h-4 w-4" />;
      case 'course': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              Mental Health Resource Library
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive collection of mental health resources, guides, and tools
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Resource */}
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={featuredResource.thumbnail} 
                alt={featuredResource.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-primary/10 text-primary">Featured</Badge>
                <Badge variant="outline" className="text-xs">
                  {getTypeIcon(featuredResource.type)}
                  <span className="ml-1">{featuredResource.type}</span>
                </Badge>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{featuredResource.title}</h2>
              <p className="text-muted-foreground mb-4">{featuredResource.description}</p>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredResource.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{featuredResource.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{featuredResource.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{featuredResource.modules} modules</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Start Course</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Bookmark</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
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
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Resources Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-sm text-muted-foreground">Bookmarked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-foreground">2.5h</div>
                  <div className="text-sm text-muted-foreground">Time Spent Learning</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Options */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">
                  {resources.length} resources
                </Badge>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={resource.thumbnail} 
                      alt={resource.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {getTypeIcon(resource.type)}
                        <span className="ml-1">{resource.type}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-8 h-8 p-0 ${resource.bookmarked ? 'text-red-500' : 'text-white'}`}
                      >
                        <Heart className={`h-4 w-4 ${resource.bookmarked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{resource.views} views</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      {resource.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="default" size="sm" className="flex-1 text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        Read
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Load More Resources</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;