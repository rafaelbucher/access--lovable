import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccessibilityCarousel = () => {
  const rules = [
    {
      title: "Texte alternatif des images",
      description: "Chaque image doit avoir un texte alternatif descriptif pour les lecteurs d'écran",
      content: "Le texte alternatif (attribut alt) doit décrire le contenu et la fonction de l'image. Il permet aux utilisateurs de lecteurs d'écran de comprendre l'information véhiculée par l'image.",
      code: `<img 
  src="chart.png" 
  alt="Graphique montrant une augmentation de 25% des ventes en 2024"
/>`
    },
    {
      title: "Contrastes de couleurs",
      description: "Le contraste entre le texte et l'arrière-plan doit être suffisant (ratio 4.5:1 minimum)",
      content: "Un contraste suffisant entre le texte et son arrière-plan garantit la lisibilité pour tous, notamment pour les personnes malvoyantes ou dans des conditions d'éclairage difficiles.",
      code: `.button {
  background: #000000;
  color: #ffffff;
  /* Contraste optimal 21:1 */
}`
    },
    {
      title: "Hiérarchie des titres",
      description: "Utiliser les balises de titre (h1-h6) dans l'ordre logique",
      content: "Une hiérarchie de titres logique structure le contenu et facilite la navigation pour les utilisateurs de technologies d'assistance. Les niveaux ne doivent pas être sautés.",
      code: `<h1>Titre principal</h1>
<h2>Sous-section</h2>
<h3>Détail de la section</h3>`
    },
    {
      title: "Navigation au clavier",
      description: "Toutes les fonctionnalités doivent être accessibles au clavier uniquement",
      content: "Les utilisateurs qui ne peuvent pas utiliser une souris doivent pouvoir accéder à toutes les fonctionnalités via le clavier. Utilisez des éléments sémantiques appropriés.",
      code: `<button 
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Action accessible
</button>`
    },
    {
      title: "Focus clavier visible",
      description: "Les éléments interactifs doivent avoir un indicateur de focus visible",
      content: "L'indicateur de focus permet aux utilisateurs naviguant au clavier de savoir quel élément est actuellement sélectionné. Il doit être clairement visible et contrasté.",
      code: `a:focus, button:focus {
  outline: 3px solid #000000;
  outline-offset: 2px;
}`
    }
  ];

  return (
    <section id="accessibility-rules" className="py-16 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
          5 règles essentielles d'accessibilité
        </h2>
        <div className="max-w-3xl mb-12">
          <p className="text-md text-muted-foreground font-normal">
            Découvrez les bonnes pratiques fondamentales pour rendre votre site accessible à tous
          </p>
        </div>

        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {rules.map((rule, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="hover:no-underline pt-4 pb-2">
                  <div className="text-left">
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {rule.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      {rule.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-2">
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      {rule.content}
                    </p>
                    <pre className="bg-muted p-3 text-sm overflow-x-auto">
                      <code className="font-mono">
                        {rule.code}
                      </code>
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
