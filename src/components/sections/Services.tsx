import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const packages = [
    {
      name: "Audit Express",
      price: "1 500€",
      description: "Pour une première évaluation rapide",
      features: [
        "Audit de 5 pages clés",
        "Rapport de conformité RGAA",
        "Recommandations prioritaires",
        "1 heure de consultation",
      ],
    },
    {
      name: "Audit Complet",
      price: "4 500€",
      description: "Analyse exhaustive de votre site",
      features: [
        "Audit de l'ensemble du site",
        "Tests avec utilisateurs",
        "Rapport détaillé RGAA",
        "Plan d'action correctif",
        "3 heures de consultation",
        "Suivi pendant 3 mois",
      ],
      highlighted: true,
    },
    {
      name: "Accompagnement",
      price: "Sur devis",
      description: "Support continu pour la conformité",
      features: [
        "Formation des équipes",
        "Revue de code",
        "Intégration dans le workflow",
        "Tests automatisés",
        "Support illimité",
        "Certification RGAA",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-16">
          Nos services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`${pkg.highlighted ? "border-4 border-accent" : "border-2"} flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-display">{pkg.name}</CardTitle>
                <CardDescription className="text-lg">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col h-full">
                <div>
                  <span className="text-sm text-muted-foreground">À partir de </span>
                  <span className="text-xl font-display font-bold">{pkg.price}</span>
                </div>
                <ul className="space-y-3 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={pkg.highlighted 
                    ? "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-auto" 
                    : "w-full mt-auto"
                  }
                  variant={pkg.highlighted ? "default" : "outline"}
                >
                  Choisir cette offre
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
