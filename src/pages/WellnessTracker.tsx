import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TrendingUp, Heart, Brain, Sun, Moon, Activity, Target, CheckCircle, Plus, BarChart3, Smile, Frown, Meh, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WellnessTracker = () => {
  const [selectedMood, setSelectedMood] = useState("good");
  const [currentStreak, setCurrentStreak] = useState(7);

  const moodOptions = [
    { id: "excellent", emoji: "😄", label: "Excellent", color: "text-green-500" },
    { id: "good", emoji: "😊", label: "Good", color: "text-blue-500" },
    { id: "okay", emoji: "😐", label: "Okay", color: "text-yellow-500" },
    { id: "low", emoji: "😔", label: "Low", color: "text-orange-500" },
    { id: "struggling", emoji: "😢", label: "Struggling", color: "text-red-500" }
  ];

  const weeklyMoods = [
    { day: "Mon", mood: "good", activities: 3 },
    { day: "Tue", mood: "excellent", activities: 4 },
    { day: "Wed", mood: "okay", activities: 2 },
    { day: "Thu", mood: "good", activities: 3 },
    { day: "Fri", mood: "excellent", activities: 4 },
    { day: "Sat", mood: "good", activities: 2 },
    { day: "Sun", mood: "good", activities: 3 }
  ];

  const goals = [
    {
      id: 1,
      title: "Daily Mindfulness",
      description: "Practice 10 minutes of mindfulness daily",
      progress: 85,
      streak: 6,
      target: 30,
      category: "mindfulness",
      icon: Brain
    },
    {
      id: 2,
      title: "Physical Activity",
      description: "Get 30 minutes of movement each day",
      progress: 60,
      streak: 4,
      target: 7,
      category: "physical",
      icon: Activity
    },
    {
      id: 3,
      title: "Sleep Schedule",
      description: "Maintain consistent 8-hour sleep routine",
      progress: 75,
      streak: 5,
      target: 14,
      category: "sleep",
      icon: Moon
    },
    {
      id: 4,
      title: "Social Connection",
      description: "Connect with friends or family daily",
      progress: 90,
      streak: 8,
      target: 21,
      category: "social",
      icon: Heart
    }
  ];

  const insights = [
    {
      title: "Mood Patterns",
      description: "Your mood tends to be highest on weekends and Fridays",
      trend: "positive",
      action: "Consider what makes these days special and incorporate those elements into weekdays"
    },
    {
      title: "Sleep & Mood Connection",
      description: "Days with 7+ hours of sleep correlate with better mood ratings",
      trend: "positive",
      action: "Prioritize maintaining your bedtime routine for consistent mood"
    },
    {
      title: "Activity Impact",
      description: "Physical activities show strong correlation with mood improvements",
      trend: "positive",
      action: "Try to include at least one physical activity on lower mood days"
    }
  ];

  const todaysActivities = [
    { name: "Morning meditation", completed: true, time: "7:00 AM", category: "mindfulness" },
    { name: "30-min walk", completed: true, time: "8:30 AM", category: "physical" },
    { name: "Call friend", completed: false, time: "2:00 PM", category: "social" },
    { name: "Gratitude journal", completed: false, time: "9:00 PM", category: "mindfulness" },
    { name: "Bedtime routine", completed: false, time: "10:00 PM", category: "sleep" }
  ];

  const wellnessMetrics = [
    { label: "Mood Score", value: "7.2/10", change: "+0.5", trend: "up" },
    { label: "Sleep Quality", value: "8.1/10", change: "+0.3", trend: "up" },
    { label: "Energy Level", value: "6.8/10", change: "-0.2", trend: "down" },
    { label: "Stress Level", value: "4.2/10", change: "-0.8", trend: "down" }
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

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Wellness Tracker</h1>
              <p className="text-muted-foreground mt-1">Track your mental health journey</p>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {currentStreak} day streak! 🔥
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          {/* Today Tab */}
          <TabsContent value="today" className="space-y-6">
            {/* Quick Mood Check */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smile className="h-5 w-5 text-primary" />
                  <span>How are you feeling today?</span>
                </CardTitle>
                <CardDescription>
                  Tap your current mood to log your daily check-in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4 mb-6">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
                        selectedMood === mood.id 
                          ? 'bg-primary/10 border-2 border-primary' 
                          : 'bg-muted/50 border border-border hover:bg-muted'
                      }`}
                    >
                      <span className="text-2xl mb-1">{mood.emoji}</span>
                      <span className={`text-xs font-medium ${mood.color}`}>{mood.label}</span>
                    </button>
                  ))}
                </div>
                <Button variant="default" className="w-full">
                  Log Mood Check-in
                </Button>
              </CardContent>
            </Card>

            {/* Today's Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wellnessMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                    <div className={`text-xs mt-1 flex items-center justify-center space-x-1 ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      <TrendingUp className={`h-3 w-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span>{metric.change}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Today's Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Today's Activities</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </CardTitle>
                <CardDescription>
                  Complete your daily wellness activities to maintain your streak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaysActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <button className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        activity.completed 
                          ? 'bg-primary border-primary text-white' 
                          : 'border-muted-foreground'
                      }`}>
                        {activity.completed && <CheckCircle className="h-3 w-3" />}
                      </button>
                      <div className="flex-1">
                        <div className={`font-medium ${activity.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                          {activity.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">{activity.category}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span>Today's Progress</span>
                    <span className="font-medium">2/5 completed</span>
                  </div>
                  <Progress value={40} className="mt-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            {/* Weekly Mood Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Weekly Mood Trends</span>
                </CardTitle>
                <CardDescription>
                  Your mood patterns over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-2 mb-6">
                  {weeklyMoods.map((day, index) => {
                    const mood = moodOptions.find(m => m.id === day.mood);
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-16 bg-muted/50 rounded-lg p-2 mb-2 flex flex-col items-center justify-center">
                          <span className="text-lg">{mood?.emoji}</span>
                          <div className="w-full bg-primary/20 rounded-full h-1 mt-1">
                            <div 
                              className="bg-primary h-1 rounded-full" 
                              style={{ width: `${(day.activities / 4) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{day.day}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">7.2</div>
                    <div className="text-sm text-muted-foreground">Avg Mood</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary">21</div>
                    <div className="text-sm text-muted-foreground">Activities</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-foreground">6</div>
                    <div className="text-sm text-muted-foreground">Good Days</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sleep Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Average Sleep</span>
                      <span className="font-medium">7.5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sleep Quality</span>
                      <span className="font-medium">8.1/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Bedtime Consistency</span>
                      <span className="font-medium">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Activity Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Daily Activities</span>
                      <span className="font-medium">3.2 avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Mindfulness Sessions</span>
                      <span className="font-medium">18 this month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Physical Activities</span>
                      <span className="font-medium">22 this month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <goal.icon className="h-5 w-5 text-primary" />
                        <span>{goal.title}</span>
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {goal.streak} day streak
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {goal.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} />
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Target: {goal.target} days</span>
                        <span className="text-primary font-medium">{Math.round(goal.progress * goal.target / 100)} completed</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Update Progress
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-primary" />
                  <span>Create New Goal</span>
                </CardTitle>
                <CardDescription>
                  Set a new wellness goal to track your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Custom Goal
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Personal Insights</span>
                </CardTitle>
                <CardDescription>
                  AI-powered insights based on your wellness patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="p-3 bg-primary/5 rounded border-l-4 border-primary">
                        <p className="text-sm font-medium text-foreground">💡 Suggested Action:</p>
                        <p className="text-sm text-muted-foreground mt-1">{insight.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Achievement Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl mb-1">🏆</div>
                      <div className="text-xs font-medium">7-Day Streak</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/10 rounded-lg">
                      <div className="text-2xl mb-1">🧘</div>
                      <div className="text-xs font-medium">Mindful Week</div>
                    </div>
                    <div className="text-center p-3 bg-accent/20 rounded-lg">
                      <div className="text-2xl mb-1">💪</div>
                      <div className="text-xs font-medium">Active Lifestyle</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wellness Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8.2</div>
                    <div className="text-sm text-muted-foreground mb-4">Out of 10</div>
                    <Badge className="bg-green-100 text-green-800">
                      Excellent Progress
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      You're doing great! Keep up the consistent habits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WellnessTracker;