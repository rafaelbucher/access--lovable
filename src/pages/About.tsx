import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">À propos</h1>
        
        <div className="max-w-4xl space-y-12">
          <section>
            <h2 className="text-4xl font-display font-bold mb-6">Notre mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              Access+ est votre agence d'audit et de conseil en accessibilité numérique en Île-de-France. 
              Nous croyons fermement que le numérique doit être accessible à tous, sans exception.
            </p>
            <p className="text-lg leading-relaxed">
              Notre mission est d'accompagner les organisations dans leur démarche d'accessibilité numérique, 
              en leur fournissant des solutions concrètes et adaptées à leurs besoins spécifiques.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-display font-bold mb-6">Nos valeurs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nous nous engageons à fournir des audits rigoureux et des recommandations de haute qualité.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Pédagogie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nous transmettons notre expertise pour permettre à nos clients de devenir autonomes.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nous plaçons l'inclusion au cœur de notre approche pour un numérique accessible à tous.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-display font-bold mb-6">Notre expertise</h2>
            <p className="text-lg leading-relaxed mb-4">
              Avec plusieurs années d'expérience en accessibilité numérique, notre équipe maîtrise 
              les standards internationaux (WCAG, RGAA) et accompagne les organisations de toutes tailles.
            </p>
            <p className="text-lg leading-relaxed">
              Nous intervenons sur tous types de projets : sites web, applications mobiles, documents PDF, 
              et bien plus encore. Notre approche combine expertise technique et sensibilité humaine 
              pour créer des solutions véritablement inclusives.
            </p>
          </section>

          <section className="bg-accent p-8 border-2 border-foreground">
            <h2 className="text-4xl font-display font-bold mb-6">Coordonnées</h2>
            <div className="space-y-2 text-lg">
              <p><strong>Adresse :</strong> 123 Avenue de l'Accessibilité, 75001 Paris</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Email :</strong> contact@accessplus.fr</p>
              <p><strong>Horaires :</strong> Lundi - Vendredi, 9h00 - 18h00</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
