import { Card } from "@/components/ui/card";
import { Scale, Users, FileText } from "lucide-react";

export const Legislation = () => {
  const stats = [
    {
      icon: Users,
      number: "12 millions",
      label: "de Français en situation de handicap",
    },
    {
      icon: FileText,
      number: "100%",
      label: "des sites publics doivent être conformes RGAA",
    },
    {
      icon: Scale,
      number: "25 000€",
      label: "d'amende maximum pour non-conformité",
    },
  ];

  return (
    <section id="legislation" className="py-16 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-16">
          La législation <br />française
        </h2>
        
        <div className="max-w-3xl mb-16">
          <p className="text-md text-muted-foreground font-normal mb-6">
            Depuis la loi du <strong>11 février 2005</strong> pour l'égalité des droits et des chances, 
            l'accessibilité numérique est une obligation légale en France.
          </p>
          <p className="text-md text-muted-foreground font-normal mb-6">
            Le <strong>Référentiel Général d'Amélioration de l'Accessibilité (RGAA)</strong> définit 
            les critères techniques à respecter pour garantir l'accès aux contenus numériques pour tous.
          </p>
          <p className="text-md text-muted-foreground font-normal">
            La directive européenne sur l'accessibilité des sites internet et des applications mobiles 
            des organismes du secteur public impose également la conformité aux normes WCAG 2.1 niveau AA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <stat.icon className="h-8 w-8 text-foreground flex-shrink-0" />
                <div className="text-3xl font-display font-bold">
                  {stat.number}
                </div>
              </div>
              <p className="text-foreground/80">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
