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
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-center">
          5 règles essentielles d'accessibilité
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez les bonnes pratiques pour rendre votre site accessible à tous
        </p>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {rules.map((rule, index) => (
              <CarouselItem key={index}>
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-10">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                      {/* Left: Title & Description */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-display">{rule.title}</h3>
                        <p className="text-muted-foreground text-lg">{rule.description}</p>
                      </div>

                      {/* Right: Do & Don't in Row */}
                      <div className="space-y-8">
                        {/* Do Example */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 pb-3 border-b-2 border-primary">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-display text-lg font-semibold text-primary">
                              {rule.do.label}
                            </span>
                          </div>
                          <pre className="bg-primary/5 p-5 rounded-lg overflow-x-auto text-sm border-2 border-primary/20">
                            <code className="text-foreground font-mono not-italic font-normal">
                              {rule.do.code}
                            </code>
                          </pre>
                        </div>

                        {/* Don't Example */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 pb-3 border-b-2 border-destructive">
                            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                              <X className="w-5 h-5 text-destructive" />
                            </div>
                            <span className="font-display text-lg font-semibold text-destructive">
                              {rule.dont.label}
                            </span>
                          </div>
                          <pre className="bg-destructive/5 p-5 rounded-lg overflow-x-auto text-sm border-2 border-destructive/20">
                            <code className="text-foreground font-mono not-italic font-normal">
                              {rule.dont.code}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
