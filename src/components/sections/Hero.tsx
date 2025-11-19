import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onFlashAuditClick: () => void;
}

export const Hero = ({ onFlashAuditClick }: HeroProps) => {
  return (
    <section id="hero" className="h-[100svh] max-h-[95svh] flex items-end relative overflow-hidden bg-background">
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
      
      {/* Scroll indicator - absolute to hero section */}
      <div className="absolute bottom-4 right-0 left-0 md:hidden pointer-events-none">
        <div className="flex flex-col items-center animate-bounce">

          <ChevronDown className="h-6 w-6 text-foreground" />

        </div>
      </div>
    </section>
  );
};
