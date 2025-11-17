import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne doit pas dépasser 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne doit pas dépasser 255 caractères"),
  subject: z.string().trim().min(1, "Le sujet est requis").max(200, "Le sujet ne doit pas dépasser 200 caractères"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(2000, "Le message ne doit pas dépasser 2000 caractères")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Ici, vous ajouteriez la logique d'envoi du formulaire
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Erreur de validation",
          description: "Veuillez vérifier les champs du formulaire.",
          variant: "destructive"
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">Contact</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Parlons de votre projet</h2>
              <p className="text-lg leading-relaxed">
                Vous avez un projet d'accessibilité numérique ? Une question sur nos services ? 
                N'hésitez pas à nous contacter, nous serons ravis d'échanger avec vous.
              </p>
            </div>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Adresse</p>
                    <p className="text-muted-foreground">123 Avenue de l'Accessibilité<br />75001 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Téléphone</p>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-muted-foreground">contact@accessplus.fr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground bg-accent">
              <CardHeader>
                <CardTitle>Horaires d'ouverture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  <strong>Lundi - Vendredi :</strong> 9h00 - 18h00<br />
                  <strong>Samedi - Dimanche :</strong> Fermé
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  En cas d'urgence, laissez-nous un message et nous vous recontacterons dans les plus brefs délais.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-3xl">Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.fr"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre demande"
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre question..."
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="w-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
                  size="lg"
                >
                  Envoyer le message
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle 
                  conformément à notre politique de confidentialité.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
