import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Nos Services"
        description="Une gamme complète de services en accessibilité numérique, adaptés aux besoins de votre organisation. De l'audit initial à l'accompagnement complet."
      />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">

        {/* Service Packages */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-12">Nos Offres</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-foreground flex flex-col">
              <CardHeader>
                <CardTitle className="text-3xl">Audit Flash</CardTitle>
                <CardDescription className="text-lg">Évaluation rapide</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm">À partir de</span>
                  <span className="text-4xl font-bold">350€</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Analyse de 5 pages représentatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Rapport synthétique sous 3 jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Recommandations prioritaires</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
                >
                  Demander un audit flash
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground flex flex-col bg-accent">
              <CardHeader>
                <CardTitle className="text-3xl">Audit Complet</CardTitle>
                <CardDescription className="text-lg">Conformité RGAA</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm">À partir de</span>
                  <span className="text-4xl font-bold">1 500€</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Audit selon le référentiel RGAA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Rapport détaillé avec captures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Plan d'action priorisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Déclaration d'accessibilité</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
                >
                  Demander un devis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground flex flex-col">
              <CardHeader>
                <CardTitle className="text-3xl">Accompagnement</CardTitle>
                <CardDescription className="text-lg">Sur-mesure</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm">À partir de</span>
                  <span className="text-4xl font-bold">3 000€</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Formation de vos équipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Assistance à la correction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Validation finale et attestation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Suivi personnalisé</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-12">Notre Méthodologie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">1. Analyse et Cadrage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Nous commençons par comprendre votre contexte, vos objectifs et vos contraintes. 
                  Nous définissons ensemble le périmètre de l'audit et les échantillons de pages à analyser.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">2. Audit Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Notre équipe d'experts réalise un audit complet selon les référentiels RGAA et WCAG. 
                  Nous utilisons des outils automatisés et effectuons des tests manuels approfondis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">3. Tests Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Nous validons nos constats avec des utilisateurs en situation de handicap, 
                  pour identifier les problèmes réels d'usage et prioriser les corrections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">4. Rapport et Accompagnement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Nous vous remettons un rapport détaillé avec un plan d'action priorisé. 
                  Nous restons à vos côtés pour vous accompagner dans la mise en conformité.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-accent p-12 border-2 border-foreground">
          <h2 className="text-4xl font-display font-bold mb-8">Pourquoi choisir Access+ ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Expertise Reconnue</h3>
              <p className="leading-relaxed">
                Notre équipe est formée et certifiée aux dernières normes d'accessibilité. 
                Nous intervenons régulièrement auprès d'organisations publiques et privées.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Approche Pragmatique</h3>
              <p className="leading-relaxed">
                Nous privilégions des solutions concrètes et réalistes, adaptées à vos contraintes 
                techniques et budgétaires, sans compromis sur la qualité.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Accompagnement Humain</h3>
              <p className="leading-relaxed">
                Au-delà de l'expertise technique, nous vous formons et vous conseillons 
                pour développer une culture de l'accessibilité au sein de vos équipes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Réactivité</h3>
              <p className="leading-relaxed">
                Nous nous engageons à respecter les délais convenus et à rester disponibles 
                pour répondre à vos questions tout au long de notre collaboration.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
