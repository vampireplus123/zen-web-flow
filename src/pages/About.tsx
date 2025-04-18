
import { Navbar } from "@/components/ui/navbar";
import { Heart, Lotus, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mindful Practice",
      description: "We believe in cultivating awareness through thoughtful, intentional movement and breath.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Our studio welcomes practitioners of all levels, backgrounds, and experiences.",
    },
    {
      icon: Lotus,
      title: "Holistic Wellness",
      description: "We focus on nurturing both body and mind for complete well-being.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-earth text-center mb-8">
          About ZenFlow
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-charcoal/80 text-center mb-12">
            Founded with a vision to create a nurturing space for mind-body wellness,
            ZenFlow has grown into a vibrant community of dedicated practitioners and
            experienced instructors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-sage/20"
              >
                <value.icon className="w-8 h-8 text-sage mx-auto mb-4" />
                <h3 className="text-xl font-serif text-earth mb-2">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg mx-auto text-charcoal/80">
            <p className="mb-6">
              Our experienced instructors bring years of practice and study to every
              class, ensuring that you receive expert guidance on your yoga journey.
              Whether you're a complete beginner or an advanced practitioner, we
              provide modifications and variations to suit your level.
            </p>
            <p>
              We believe that yoga is more than just physical exercise—it's a path
              to self-discovery and inner peace. Our studio provides a serene
              environment where you can disconnect from the outside world and focus
              on your practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
