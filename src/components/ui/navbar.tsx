
import { Menu } from "lucide-react";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-cream/80 backdrop-blur-sm z-50 border-b border-sage/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-serif text-earth hover:text-sage transition-colors">
          ZenFlow
        </a>
        <div className="hidden md:flex space-x-8 text-charcoal">
          <a href="#classes" className="hover:text-sage transition-colors">Classes</a>
          <a href="#about" className="hover:text-sage transition-colors">About</a>
          <a href="#contact" className="hover:text-sage transition-colors">Contact</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};
