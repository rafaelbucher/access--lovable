import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onFlashAuditClick: () => void;
}

export const Hero = ({ onFlashAuditClick }: HeroProps) => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#hero + section, #hero + main');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Animation plus lente avec timeout
      setTimeout(() => {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="hero" className="h-[100svh] max-h-[100svh] flex items-end relative overflow-hidden">
      <div className="container mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-6 md:mb-8">
            Rendre le web accessible à chacun, sans exception.
          </h1>
          <p className="text-md text-muted-foreground font-normal md:text-xl mb-8 md:mb-12 max-w-2xl">
            access+ réalise vos audits, accompagne vos équipes et vous guide vers la mise en conformité légale et durable de vos interfaces numériques.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto"
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
      
      {/* Scroll indicator - bottom right of hero section */}
      <div className="absolute bottom-8 right-8 md:hidden">
        <button
          onClick={scrollToContent}
          className="transition-opacity duration-300 hover:opacity-70"
          aria-label="Défiler vers le contenu suivant"
        >
          <ChevronDown className="h-8 w-8 text-foreground animate-pulse" />
        </button>
      </div>
    </section>
  );
};
