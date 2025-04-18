
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Wind } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-earth mb-6 animate-fade-in">
            Find Your Inner Peace
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 animate-fade-in">
            Join our mindful community and discover the transformative power of yoga
          </p>
          <Button className="bg-sage hover:bg-sage/90 text-white">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-sand/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-earth text-center mb-12">
            Our Classes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Hatha Yoga",
                description: "Perfect for beginners, focusing on basic postures and breathing",
              },
              {
                icon: Sun,
                title: "Vinyasa Flow",
                description: "Dynamic sequences that synchronize breath with movement",
              },
              {
                icon: Wind,
                title: "Meditation",
                description: "Guided sessions for mental clarity and inner peace",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="text-xl font-serif text-earth text-center mb-2">{item.title}</h3>
                <p className="text-charcoal/80 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-earth mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-charcoal/80 mb-8">
              At ZenFlow, we believe in creating a nurturing environment where everyone can explore the beautiful practice of yoga. Our experienced instructors guide you through a journey of self-discovery, helping you find balance in both body and mind.
            </p>
            <Button variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl mb-4">ZenFlow</h3>
              <p className="text-cream/80">Your journey to inner peace begins here</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Contact</h4>
              <p className="text-cream/80">info@zenflow.com</p>
              <p className="text-cream/80">123-456-7890</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Follow Us</h4>
              <div className="space-x-4">
                <a href="#" className="text-cream/80 hover:text-cream">Instagram</a>
                <a href="#" className="text-cream/80 hover:text-cream">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
