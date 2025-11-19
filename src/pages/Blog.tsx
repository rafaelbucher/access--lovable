import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const blogPosts = [
  {
    id: 1,
    title: "Les 10 erreurs d'accessibilité les plus courantes",
    excerpt: "Découvrez les erreurs les plus fréquemment rencontrées lors de nos audits et comment les éviter facilement.",
    date: "15 Mars 2024",
    category: "Bonnes pratiques",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "RGAA 4.1 : Ce qui change pour votre site",
    excerpt: "La nouvelle version du RGAA apporte son lot de changements. Voici ce que vous devez savoir pour rester conforme.",
    date: "8 Mars 2024",
    category: "Réglementation",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "L'accessibilité mobile : enjeux et solutions",
    excerpt: "Les applications mobiles représentent un défi particulier en termes d'accessibilité. Nos conseils pour réussir.",
    date: "1 Mars 2024",
    category: "Mobile",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Tests utilisateurs avec des personnes en situation de handicap",
    excerpt: "Comment organiser et mener des tests utilisateurs inclusifs pour améliorer l'accessibilité de vos produits.",
    date: "22 Février 2024",
    category: "UX Research",
    readTime: "8 min"
  },
  {
    id: 5,
    title: "Accessibilité et design system : un duo gagnant",
    excerpt: "Intégrer l'accessibilité dès la conception de votre design system permet d'éviter bien des problèmes.",
    date: "15 Février 2024",
    category: "Design",
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Les lecteurs d'écran en 2024 : panorama",
    excerpt: "État des lieux des principaux lecteurs d'écran utilisés et leurs particularités à connaître.",
    date: "8 Février 2024",
    category: "Technologie",
    readTime: "10 min"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="default" />
      <PageHero 
        title="Blog"
        description="Articles, guides et conseils sur l'accessibilité web. Restez informé des dernières tendances et bonnes pratiques pour un numérique inclusif."
      />
      <main className="container mx-auto px-6 py-16 bg-background">
        
        <div className="max-w-4xl mb-16">
          <p className="text-md text-muted-foreground font-normal leading-relaxed">
            Retrouvez nos articles, guides et actualités sur l'accessibilité numérique. 
            Nous partageons notre expertise pour vous aider à créer des expériences inclusives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-2 border-foreground flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base mb-4 flex-1">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <span className="text-sm text-muted-foreground">{post.readTime} de lecture</span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-bold"
                  >
                    Lire l'article →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
