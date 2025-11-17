import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BudgetEstimationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BudgetEstimationModal = ({ isOpen, onClose }: BudgetEstimationModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    siteType: "",
    pageCount: "",
    hasAuth: "",
    hasForms: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.siteType || !formData.pageCount) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Estimation envoyée !",
        description: "Vous recevrez votre devis détaillé par email dans quelques instants.",
      });
      setFormData({
        email: "",
        siteType: "",
        pageCount: "",
        hasAuth: "",
        hasForms: "",
      });
      setStep(1);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      email: "",
      siteType: "",
      pageCount: "",
      hasAuth: "",
      hasForms: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6 overflow-y-auto">
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
        aria-label="Fermer"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="w-full max-w-2xl my-8">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-center">
          Estimez votre budget
        </h2>
        
        <p className="text-lg mb-12 text-center text-muted-foreground">
          Répondez à quelques questions pour recevoir une estimation personnalisée.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <label htmlFor="estimation-email" className="block text-sm font-medium">
                  Votre email
                </label>
                <input
                  id="estimation-email"
                  type="email"
                  placeholder="votre@email.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-14 px-4 bg-background border-2 border-foreground focus:outline-none focus:border-accent transition-colors"
                  aria-required="true"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">Type de site</label>
                <div className="space-y-3">
                  {[
                    { value: "vitrine", label: "Site vitrine (présentation, blog)" },
                    { value: "ecommerce", label: "Site e-commerce" },
                    { value: "application", label: "Application web complexe" },
                    { value: "administration", label: "Site public / administration" }
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="siteType"
                          value={value}
                          checked={formData.siteType === value}
                          onChange={(e) => setFormData({ ...formData, siteType: e.target.value })}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 border-2 border-foreground peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
                          <div className="w-3 h-3 bg-foreground"></div>
                        </div>
                      </div>
                      <span className="text-base group-hover:text-muted-foreground transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full h-14 text-base"
                onClick={() => setStep(2)}
                disabled={!formData.email || !formData.siteType}
              >
                Continuer
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-4">
                <label className="text-sm font-medium block">Nombre de pages à auditer</label>
                <div className="space-y-3">
                  {[
                    { value: "1-10", label: "1 à 10 pages" },
                    { value: "11-50", label: "11 à 50 pages" },
                    { value: "51-100", label: "51 à 100 pages" },
                    { value: "100+", label: "Plus de 100 pages" }
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="pageCount"
                          value={value}
                          checked={formData.pageCount === value}
                          onChange={(e) => setFormData({ ...formData, pageCount: e.target.value })}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 border-2 border-foreground peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
                          <div className="w-3 h-3 bg-foreground"></div>
                        </div>
                      </div>
                      <span className="text-base group-hover:text-muted-foreground transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">Votre site nécessite-t-il une authentification ?</label>
                <div className="space-y-3">
                  {[
                    { value: "yes", label: "Oui" },
                    { value: "no", label: "Non" }
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="hasAuth"
                          value={value}
                          checked={formData.hasAuth === value}
                          onChange={(e) => setFormData({ ...formData, hasAuth: e.target.value })}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 border-2 border-foreground peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
                          <div className="w-3 h-3 bg-foreground"></div>
                        </div>
                      </div>
                      <span className="text-base group-hover:text-muted-foreground transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">Votre site contient-il des formulaires complexes ?</label>
                <div className="space-y-3">
                  {[
                    { value: "yes", label: "Oui" },
                    { value: "no", label: "Non" }
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="hasForms"
                          value={value}
                          checked={formData.hasForms === value}
                          onChange={(e) => setFormData({ ...formData, hasForms: e.target.value })}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 border-2 border-foreground peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
                          <div className="w-3 h-3 bg-foreground"></div>
                        </div>
                      </div>
                      <span className="text-base group-hover:text-muted-foreground transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="w-full h-14 text-base"
                  onClick={() => setStep(1)}
                >
                  Retour
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 text-base"
                  disabled={loading || !formData.pageCount}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Recevoir l'estimation"
                  )}
                </Button>
              </div>
            </>
          )}
        </form>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Les estimations sont données à titre indicatif.
        </p>
      </div>
    </div>
  );
};
