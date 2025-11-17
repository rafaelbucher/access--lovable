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
    <section id="legislation" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-16">
          La législation française
        </h2>
        
        <div className="max-w-3xl mb-16">
          <p className="text-lg mb-6">
            Depuis la loi du <strong>11 février 2005</strong> pour l'égalité des droits et des chances, 
            l'accessibilité numérique est une obligation légale en France.
          </p>
          <p className="text-lg mb-6">
            Le <strong>Référentiel Général d'Amélioration de l'Accessibilité (RGAA)</strong> définit 
            les critères techniques à respecter pour garantir l'accès aux contenus numériques pour tous.
          </p>
          <p className="text-lg">
            La directive européenne sur l'accessibilité des sites internet et des applications mobiles 
            des organismes du secteur public impose également la conformité aux normes WCAG 2.1 niveau AA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 border-2 bg-white">
              <stat.icon className="h-12 w-12 mb-6 text-foreground" />
              <div className="text-4xl font-display font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-foreground/80">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
