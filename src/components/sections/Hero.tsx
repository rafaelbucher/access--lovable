import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onFlashAuditClick: () => void;
}

export const Hero = ({ onFlashAuditClick }: HeroProps) => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#hero + section, #hero + main');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-[100svh] max-h-[100svh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-6 md:mb-8">
            Rendre le web accessible à chacun, sans exception.
          </h1>
          <p className="text-md text-muted-foreground font-normal md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            access+ réalise vos audits, accompagne vos équipes et vous guide vers la mise en conformité légale et durable de vos interfaces numériques.
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
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - only on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden">
        <button
          onClick={scrollToContent}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-bounce"
          aria-label="Défiler vers le contenu suivant"
        >
          <ChevronDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};
