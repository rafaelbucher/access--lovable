import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BudgetEstimation = () => {
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
    
    // Simulate processing
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
    }, 2000);
  };

  return (
    <section id="budget" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 text-center">
            Estimez votre budget
          </h2>
          
          <p className="text-md text-muted-foreground font-normal mb-12 text-center">
            Répondez à quelques questions pour recevoir une estimation de budget 
            personnalisée pour votre audit d'accessibilité.
          </p>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <>
                  <div>
                    <label htmlFor="estimation-email" className="block text-sm font-medium mb-2">
                      Votre email
                    </label>
                    <Input
                      id="estimation-email"
                      type="email"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-4 block">Type de site</Label>
                    <RadioGroup 
                      value={formData.siteType}
                      onValueChange={(value) => setFormData({ ...formData, siteType: value })}
                      required
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="vitrine" id="vitrine" />
                        <Label htmlFor="vitrine" className="font-normal cursor-pointer">
                          Site vitrine (présentation, blog)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="ecommerce" id="ecommerce" />
                        <Label htmlFor="ecommerce" className="font-normal cursor-pointer">
                          Site e-commerce
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="application" id="application" />
                        <Label htmlFor="application" className="font-normal cursor-pointer">
                          Application web complexe
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="administration" id="administration" />
                        <Label htmlFor="administration" className="font-normal cursor-pointer">
                          Site public / administration
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full"
                    onClick={() => setStep(2)}
                    disabled={!formData.email || !formData.siteType}
                  >
                    Continuer
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <Label className="text-sm font-medium mb-4 block">Nombre de pages à auditer</Label>
                    <RadioGroup 
                      value={formData.pageCount}
                      onValueChange={(value) => setFormData({ ...formData, pageCount: value })}
                      required
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="1-10" id="pages-1-10" />
                        <Label htmlFor="pages-1-10" className="font-normal cursor-pointer">
                          1 à 10 pages
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="11-50" id="pages-11-50" />
                        <Label htmlFor="pages-11-50" className="font-normal cursor-pointer">
                          11 à 50 pages
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="51-100" id="pages-51-100" />
                        <Label htmlFor="pages-51-100" className="font-normal cursor-pointer">
                          51 à 100 pages
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100+" id="pages-100plus" />
                        <Label htmlFor="pages-100plus" className="font-normal cursor-pointer">
                          Plus de 100 pages
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-4 block">Votre site nécessite-t-il une authentification ?</Label>
                    <RadioGroup 
                      value={formData.hasAuth}
                      onValueChange={(value) => setFormData({ ...formData, hasAuth: value })}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="yes" id="auth-yes" />
                        <Label htmlFor="auth-yes" className="font-normal cursor-pointer">
                          Oui
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="auth-no" />
                        <Label htmlFor="auth-no" className="font-normal cursor-pointer">
                          Non
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-4 block">Votre site contient-il des formulaires complexes ?</Label>
                    <RadioGroup 
                      value={formData.hasForms}
                      onValueChange={(value) => setFormData({ ...formData, hasForms: value })}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <RadioGroupItem value="yes" id="forms-yes" />
                        <Label htmlFor="forms-yes" className="font-normal cursor-pointer">
                          Oui
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="forms-no" />
                        <Label htmlFor="forms-no" className="font-normal cursor-pointer">
                          Non
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="w-full"
                      onClick={() => setStep(1)}
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={loading || !formData.pageCount}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-4 w-4" />
                          Recevoir l'estimation
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </Card>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Les estimations sont données à titre indicatif. Un devis détaillé vous sera fourni 
            après analyse de vos besoins spécifiques.
          </p>
        </div>
      </div>
    </section>
  );
};
