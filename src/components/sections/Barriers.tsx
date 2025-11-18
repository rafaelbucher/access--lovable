import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Hand, Brain, Ear } from "lucide-react";

export const Barriers = () => {
  const barriers = [
    {
      icon: Eye,
      title: "Handicap visuel",
      description: "Sans textes alternatifs pour les images, contraste insuffisant, ou structure non sémantique, les personnes malvoyantes ou aveugles ne peuvent pas accéder au contenu.",
      examples: [
        "Images sans attribut alt",
        "Texte sur fond de mauvais contraste",
        "Contenus non compatibles lecteurs d'écran",
      ],
    },
    {
      icon: Hand,
      title: "Handicap moteur",
      description: "Sans navigation au clavier, boutons trop petits, ou délais trop courts, les personnes avec mobilité réduite sont bloquées.",
      examples: [
        "Interactions nécessitant la souris uniquement",
        "Zones cliquables trop petites",
        "Absence d'indicateurs de focus",
      ],
    },
    {
      icon: Brain,
      title: "Handicap cognitif",
      description: "Une navigation complexe, du contenu dense, ou des animations distrayantes rendent la compréhension difficile.",
      examples: [
        "Navigation confuse et non intuitive",
        "Textes trop longs sans structure",
        "Animations sans possibilité de pause",
      ],
    },
    {
      icon: Ear,
      title: "Handicap auditif",
      description: "Sans sous-titres pour les vidéos ou transcriptions pour l'audio, le contenu multimédia est inaccessible.",
      examples: [
        "Vidéos sans sous-titres",
        "Contenus audio sans transcription",
        "Alertes sonores uniquement",
      ],
    },
  ];

  return (
    <section id="barriers" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
          Pourquoi l'accessibilité ?
        </h2>
        
        <div className="max-w-3xl mb-16">
          <p className="text-md text-muted-foreground font-normal mb-6">
            Un site web accessible bénéficie à tous : meilleur référencement SEO, 
            expérience utilisateur améliorée, image de marque renforcée, et conformité légale.
          </p>
          <p className="text-md text-muted-foreground font-normal">
            Voici les principales barrières que rencontrent les utilisateurs en situation de handicap 
            sur des sites non accessibles :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {barriers.map((barrier, index) => (
            <Card key={index} className="border-2 border-accent bg-background">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-foreground rounded-full">
                    <barrier.icon className="h-8 w-8 text-background" />
                  </div>
                  <CardTitle className="text-2xl font-display">{barrier.title}</CardTitle>
                </div>
                <p className="text-md text-muted-foreground font-normal">{barrier.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Exemples de barrières :</h4>
                <ul className="space-y-2">
                  {barrier.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
