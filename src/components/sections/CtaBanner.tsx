import { Button } from "@/components/ui/button";
import { Phone, PersonStanding } from "lucide-react";

interface CtaBannerProps {
  onFlashAuditClick: () => void;
  onContactClick: () => void;
}

export const CtaBanner = ({ onFlashAuditClick, onContactClick }: CtaBannerProps) => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Prêt à rendre votre site accessible ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Que vous souhaitiez discuter de votre projet ou obtenir un audit rapide, 
            nous sommes là pour vous accompagner dans votre démarche d'accessibilité.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="default"
              className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 transition-all flex items-center justify-center gap-3"
              onClick={onContactClick}
            >
              <PersonStanding className="h-5 w-5" />
              Lancer votre audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full md:w-auto border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-3"
              onClick={onContactClick}
            >
              <Phone className="h-5 w-5" />
              Discutons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};