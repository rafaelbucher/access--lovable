import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  }
];

export const BlogPreview = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">
            Actualités & Ressources
          </h2>
          <p className="text-md text-muted-foreground font-normal leading-relaxed">
            Découvrez nos derniers articles sur l'accessibilité numérique, 
            les bonnes pratiques et les évolutions réglementaires.
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
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
                  <Button variant="link" className="p-0 h-auto font-bold">
                    Lire →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {blogPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <Card className="border-2 border-foreground flex flex-col h-full">
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
                        <Button variant="link" className="p-0 h-auto font-bold">
                          Lire →
                        </Button>
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

        <div className="text-center">
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
            >
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
