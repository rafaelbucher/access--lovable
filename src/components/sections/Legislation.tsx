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
        {/* Titre sur toute la largeur */}
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-16">
          La législation française
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Colonne 1 : Texte */}
          <div className="space-y-6">
            <p className="text-md text-muted-foreground font-normal">
              Depuis la loi du <strong className="text-black">11 février 2005</strong> pour l'égalité des droits et des chances, 
              l'accessibilité numérique est une obligation légale en France.
            </p>
            <p className="text-md text-muted-foreground font-normal">
              Le <strong className="text-black">Référentiel Général d'Amélioration de l'Accessibilité (RGAA)</strong> définit 
              les critères techniques à respecter pour garantir l'accès aux contenus numériques pour tous.
            </p>
            <p className="text-md text-muted-foreground font-normal">
              La directive européenne sur l'accessibilité des sites internet et des applications mobiles 
              des organismes du secteur public impose également la conformité aux normes WCAG 2.1 niveau AA.
            </p>
          </div>

          {/* Colonne 2 : Chiffres clés - Design minimaliste */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="pl-0">
                <div className="flex items-center gap-4 mb-3">
                  <stat.icon className="h-8 w-8 text-foreground" />
                  <div className="text-4xl font-display font-bold text-foreground">
                    {stat.number}
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
