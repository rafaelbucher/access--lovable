import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FlashAudit = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url || !email) {
      toast({
        title: "Champs requis",
        description: "Veuillez renseigner l'URL et votre email",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate audit processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Audit flash lancé !",
        description: "Vous recevrez le rapport par email dans quelques instants.",
      });
      setUrl("");
      setEmail("");
    }, 2000);
  };

  return (
    <section id="flash-audit" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 text-center">
            Audit flash gratuit
          </h2>
          
          <p className="text-md mb-12 text-center">
            Obtenez une première évaluation de l'accessibilité de votre site en quelques minutes. 
            Entrez l'URL d'une page et recevez un rapport PDF par email.
          </p>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="url" className="block text-sm font-medium mb-2">
                  URL de la page à auditer
                </label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://exemple.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="h-12"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Votre email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Lancer l'audit flash
                  </>
                )}
              </Button>
            </form>
          </Card>

          <p className="text-sm text-muted-foreground text-center mt-6">
            L'audit flash est une évaluation préliminaire. Pour un audit complet et conforme RGAA, 
            contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};
