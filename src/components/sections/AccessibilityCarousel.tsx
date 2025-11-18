import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AccessibilityCarousel = () => {
  const rules = [
    {
      title: "Texte alternatif des images",
      description: "Chaque image doit avoir un texte alternatif descriptif pour les lecteurs d'écran",
      do: {
        label: "À faire",
        code: `<img 
  src="chart.png" 
  alt="Graphique montrant 
  une augmentation de 25% 
  des ventes en 2024"
/>`
      },
      dont: {
        label: "À éviter",
        code: `<img 
  src="chart.png" 
  alt="image"
/>`
      }
    },
    {
      title: "Contrastes de couleurs",
      description: "Le contraste entre le texte et l'arrière-plan doit être suffisant (ratio 4.5:1 minimum)",
      do: {
        label: "À faire",
        code: `.button {
  background: #000;
  color: #fff;
  /* Contraste 21:1 ✓ */
}`
      },
      dont: {
        label: "À éviter",
        code: `.button {
  background: #ccc;
  color: #ddd;
  /* Contraste 1.4:1 ✗ */
}`
      }
    },
    {
      title: "Focus clavier visible",
      description: "Les éléments interactifs doivent avoir un indicateur de focus visible",
      do: {
        label: "À faire",
        code: `a:focus {
  outline: 3px solid #000;
  outline-offset: 2px;
}`
      },
      dont: {
        label: "À éviter",
        code: `a:focus {
  outline: none;
  /* Invisible ! */
}`
      }
    },
    {
      title: "Navigation au clavier",
      description: "Toutes les fonctionnalités doivent être accessibles au clavier uniquement",
      do: {
        label: "À faire",
        code: `<button 
  onClick={handleClick}
  onKeyPress={handleKeyPress}
>
  Action
</button>`
      },
      dont: {
        label: "À éviter",
        code: `<div 
  onClick={handleClick}
>
  Action
</div>`
      }
    },
    {
      title: "Hiérarchie des titres",
      description: "Utiliser les balises de titre (h1-h6) dans l'ordre logique",
      do: {
        label: "À faire",
        code: `<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Section</h3>`
      },
      dont: {
        label: "À éviter",
        code: `<h1>Titre principal</h1>
<h4>Sous-titre</h4>
<h2>Section</h2>`
      }
    }
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            5 règles essentielles d'accessibilité
        </h2>
        <div className="max-w-3xl mb-16">
            <p className="text-lg mb-6">
                Découvrez les bonnes pratiques pour rendre votre site accessible à tous
            </p>
        </div>

        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {rules.map((rule, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <Card className="border-2 border-border shadow-sm bg-card h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Title & Description */}
                    <div className="space-y-3 mb-6">
                      <h3 className="text-xl font-display text-foreground">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm">{rule.description}</p>
                    </div>

                    {/* Do & Don't Stacked */}
                    <div className="space-y-4 flex-1">
                      {/* Do Example */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 pb-2 border-b-2 border-secondary">
                          <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-secondary-foreground" />
                          </div>
                          <span className="font-display text-sm font-semibold text-secondary-foreground">
                            {rule.do.label}
                          </span>
                        </div>
                        <pre className="bg-secondary/20 p-3 rounded overflow-x-auto text-xs border border-secondary/40">
                          <code className="text-foreground font-mono not-italic font-normal">
                            {rule.do.code}
                          </code>
                        </pre>
                      </div>

                      {/* Don't Example */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 pb-2 border-b-2 border-destructive">
                          <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-destructive" />
                          </div>
                          <span className="font-display text-sm font-semibold text-destructive">
                            {rule.dont.label}
                          </span>
                        </div>
                        <pre className="bg-destructive/5 p-3 rounded overflow-x-auto text-xs border border-destructive/20">
                          <code className="text-foreground font-mono not-italic font-normal">
                            {rule.dont.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="container mx-auto px-4 mt-8">
            <div className="flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
