
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Calendar, Clock, Dumbbell, Heart, Sun, Wind } from "lucide-react";

const Classes = () => {
  const yogaClasses = [
    {
      title: "Hatha Yoga",
      description: "Perfect for beginners, focusing on basic postures and breathing",
      schedule: "Mon, Wed, Fri - 8:00 AM",
      duration: "60 minutes",
      level: "Beginner",
      icon: Heart,
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamic sequences that synchronize breath with movement",
      schedule: "Tue, Thu - 9:30 AM",
      duration: "75 minutes",
      level: "Intermediate",
      icon: Sun,
    },
    {
      title: "Meditation",
      description: "Guided sessions for mental clarity and inner peace",
      schedule: "Daily - 7:00 AM",
      duration: "45 minutes",
      level: "All Levels",
      icon: Wind,
    },
    {
      title: "Power Yoga",
      description: "High-intensity practice focusing on strength and flexibility",
      schedule: "Mon, Wed, Fri - 5:30 PM",
      duration: "90 minutes",
      level: "Advanced",
      icon: Dumbbell,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-earth text-center mb-8">
          Our Classes
        </h1>
        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto text-center mb-12">
          Discover our range of yoga classes designed to help you find balance,
          strength, and inner peace.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {yogaClasses.map((yogaClass) => (
            <Card key={yogaClass.title} className="bg-white/50 backdrop-blur-sm border-sage/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-earth">
                  <yogaClass.icon className="h-6 w-6 text-sage" />
                  {yogaClass.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">{yogaClass.description}</p>
                <div className="space-y-2 text-charcoal/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{yogaClass.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{yogaClass.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
