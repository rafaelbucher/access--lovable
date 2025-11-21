import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Mail, User, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  siteUrl: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  siteUrl?: string;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    siteUrl: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation du nom complet
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom complet est requis";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation de l'URL du site
    if (!formData.siteUrl.trim()) {
      newErrors.siteUrl = "L'URL du site est requise";
    } else {
      try {
        const url = new URL(formData.siteUrl.startsWith('http') ? formData.siteUrl : `https://${formData.siteUrl}`);
        if (!url.hostname.includes('.')) {
          newErrors.siteUrl = "URL du site invalide";
        }
      } catch {
        newErrors.siteUrl = "URL du site invalide";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi d'email - en réalité, vous devriez utiliser un service d'email
      // comme EmailJS, Formspree, ou un endpoint backend
      const emailBody = `
Nouvelle demande d'audit d'accessibilité

Nom complet: ${formData.fullName}
Email: ${formData.email}
Site URL: ${formData.siteUrl}

Envoyé depuis le formulaire de contact access+
      `;

      // Pour l'instant, on simule l'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour votre audit d'accessibilité.",
      });

      // Réinitialiser le formulaire
      setFormData({ fullName: "", email: "", siteUrl: "" });
      setErrors({});
      onClose();

    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none m-0 p-0 rounded-none border-none bg-accent">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-foreground/10">
            <div>
              <h2 className="text-3xl font-display font-bold">Lancer votre audit</h2>
              <p className="text-muted-foreground mt-2">
                Remplissez ce formulaire pour recevoir votre audit d'accessibilité personnalisé
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom complet */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base font-medium flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nom complet *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className={`text-base p-3 h-12 ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="Votre nom et prénom"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Adresse email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`text-base p-3 h-12 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="votre@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* URL du site */}
                <div className="space-y-2">
                  <Label htmlFor="siteUrl" className="text-base font-medium flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    URL de votre site *
                  </Label>
                  <Input
                    id="siteUrl"
                    type="url"
                    value={formData.siteUrl}
                    onChange={(e) => handleChange("siteUrl", e.target.value)}
                    className={`text-base p-3 h-12 ${errors.siteUrl ? 'border-red-500' : ''}`}
                    placeholder="https://votresite.com"
                    disabled={isSubmitting}
                  />
                  {errors.siteUrl && (
                    <p className="text-sm text-red-500">{errors.siteUrl}</p>
                  )}
                </div>

                {/* Bouton de soumission */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander mon audit"}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Vos informations seront traitées confidentiellement et utilisées uniquement pour vous contacter concernant votre audit d'accessibilité.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};