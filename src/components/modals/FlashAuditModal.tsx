import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FlashAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlashAuditModal = ({ isOpen, onClose }: FlashAuditModalProps) => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

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
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Audit flash lancé !",
        description: "Vous recevrez le rapport par email dans quelques instants.",
      });
      setUrl("");
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
        aria-label="Fermer"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="w-full max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-center">
          Audit flash gratuit
        </h2>
        
        <p className="text-lg mb-12 text-center text-muted-foreground">
          Obtenez une première évaluation de l'accessibilité de votre site en quelques minutes.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="url" className="block text-sm font-medium">
              URL de la page à auditer
            </label>
            <input
              id="url"
              type="url"
              placeholder="https://exemple.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="w-full h-14 px-4 bg-background border-2 border-foreground focus:outline-none focus:border-accent transition-colors"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Votre email
            </label>
            <input
              id="email"
              type="email"
              placeholder="votre@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-14 px-4 bg-background border-2 border-foreground focus:outline-none focus:border-accent transition-colors"
              aria-required="true"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 text-base"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyse en cours...
              </>
            ) : (
              "Lancer l'audit flash"
            )}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-8">
          L'audit flash est une évaluation préliminaire. Pour un audit complet et conforme RGAA, 
          contactez-nous pour un devis personnalisé.
        </p>
      </div>
    </div>
  );
};
