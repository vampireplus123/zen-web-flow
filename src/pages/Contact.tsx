
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/ui/navbar";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-earth text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto text-center mb-12">
          Have a question or want to join our community? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="bg-white/50 backdrop-blur-sm border-sage/20">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input type="text" placeholder="Your Name" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px] bg-white"
                  />
                </div>
                <Button className="w-full bg-sage hover:bg-sage/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 text-earth text-lg font-serif mb-2">
                <MapPin className="h-5 w-5 text-sage" />
                Visit Us
              </div>
              <p className="text-charcoal/70">
                123 Zen Street<br />
                Mindful Valley, CA 94123
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-earth text-lg font-serif mb-2">
                <Phone className="h-5 w-5 text-sage" />
                Call Us
              </div>
              <p className="text-charcoal/70">(555) 123-4567</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-earth text-lg font-serif mb-2">
                <Mail className="h-5 w-5 text-sage" />
                Email Us
              </div>
              <p className="text-charcoal/70">info@zenflow.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
