import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onFlashAuditClick: () => void;
}

export const Hero = ({ onFlashAuditClick }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-none mb-8">
            Accessible ensemble!
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">
            Votre agence d'audit et de conseil en accessibilité numérique en Île-de-France. 
            Rendez votre site web conforme RGAA et accessible à tous.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={onFlashAuditClick}
            >
              Demander un audit flash
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - desktop only */}
      <button 
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="hidden md:block absolute bottom-8 right-8 animate-bounce hover:text-accent transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="h-8 w-8 text-foreground" />
      </button>
    </section>
  );
};
