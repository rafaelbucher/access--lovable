import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Mentions légales"
        description="Informations légales et conditions d'utilisation du site access+"
      />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Éditeur du site</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <strong>Raison sociale :</strong> access+<br />
                <strong>Forme juridique :</strong> Auto-entrepreneur<br />
                <strong>Siège social :</strong> 16 rue Candale, 93500 Pantin, France<br />
                <strong>SIRET :</strong> [À remplir]<br />
                <strong>Email :</strong> <a href="mailto:contact@accessplus.fr" className="text-primary hover:underline">contact@accessplus.fr</a><br />
                <strong>Téléphone :</strong> <a href="tel:+33753160432" className="text-primary hover:underline">+33 7 53 16 04 32</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Hébergement</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Le site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, États-Unis<br />
                Site web : <a href="https://vercel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Propriété intellectuelle</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Protection des données personnelles</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@accessplus.fr" className="text-primary hover:underline">contact@accessplus.fr</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Cookies</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Ce site n'utilise pas de cookies de traçage ou de cookies publicitaires. Seuls les cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Accessibilité</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Ce site est conçu pour être accessible à tous les utilisateurs, y compris les personnes en situation de handicap. Nous nous efforçons de respecter les critères d'accessibilité du RGAA (Référentiel Général d'Amélioration de l'Accessibilité).
              </p>
              <p>
                Si vous rencontrez des difficultés d'accès à certains contenus, n'hésitez pas à nous contacter pour que nous puissions vous aider ou améliorer l'accessibilité de notre site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Limitation de responsabilité</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse <a href="mailto:contact@accessplus.fr" className="text-primary hover:underline">contact@accessplus.fr</a>, en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;