import { Button } from "@/components/ui/button";

interface HeroProps {
  onFlashAuditClick: () => void;
}

export const Hero = ({ onFlashAuditClick }: HeroProps) => {
  return (
    <section id="hero" className="h-[100svh] max-h-[100svh] flex items-end relative overflow-hidden">
      <div className="container mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-6 md:mb-8">
            Accessible ensemble!
          </h1>
          <p className="text-md md:text-xl mb-8 md:mb-12 max-w-2xl">
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
