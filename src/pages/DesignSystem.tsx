import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-6xl font-display font-bold mb-4">Design System</h1>
        <h3 className="text-2xl font-display mb-12">
          Système de design d'access+
        </h3>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Typographie</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-6xl font-display font-bold">Heading 1 - Display Font</h1>
              <p className="text-sm text-muted-foreground">text-6xl font-display font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl font-display font-bold">Heading 2 - Display Font</h2>
              <p className="text-sm text-muted-foreground">text-4xl font-display font-bold</p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold">Heading 3 - Display Font</h3>
              <p className="text-sm text-muted-foreground">text-2xl font-display font-bold</p>
            </div>
            <div>
              <p className="text-base">
                Texte courant - Système serif. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-muted-foreground">text-base (font system serif)</p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-24 bg-background border-2 border-foreground mb-2"></div>
              <p className="font-bold">Background</p>
              <p className="text-sm text-muted-foreground">hsl(0 0% 100%)</p>
            </div>
            <div>
              <div className="h-24 bg-foreground mb-2"></div>
              <p className="font-bold">Foreground</p>
              <p className="text-sm text-muted-foreground">hsl(0 0% 0%)</p>
            </div>
            <div>
              <div className="h-24 bg-primary mb-2"></div>
              <p className="font-bold">Primary</p>
              <p className="text-sm text-muted-foreground">hsl(0 0% 0%)</p>
            </div>
            <div>
              <div className="h-24 bg-secondary mb-2"></div>
              <p className="font-bold">Secondary</p>
              <p className="text-sm text-muted-foreground">hsl(94 85% 93%)</p>
            </div>
            <div>
              <div className="h-24 bg-accent mb-2"></div>
              <p className="font-bold">Accent</p>
              <p className="text-sm text-muted-foreground">hsl(94 85% 93%)</p>
            </div>
            <div>
              <div className="h-24 bg-muted mb-2"></div>
              <p className="font-bold">Muted</p>
              <p className="text-sm text-muted-foreground">hsl(0 0% 96%)</p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Boutons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4">CTA Styles (Designers Éthiques)</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  Primary CTA
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-foreground bg-secondary text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  Secondary CTA
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Cards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area with sample text.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Card with Bold Border</CardTitle>
                <CardDescription>Enhanced card style</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card with stronger visual presence.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Formulaires</h2>
          <div className="max-w-md space-y-6">
            <div>
              <Label htmlFor="input-demo">Input</Label>
              <Input id="input-demo" placeholder="Placeholder text" />
            </div>
            <div>
              <Label htmlFor="textarea-demo">Textarea</Label>
              <Textarea id="textarea-demo" placeholder="Enter your message..." />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox-demo" />
              <Label htmlFor="checkbox-demo">Checkbox label</Label>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DesignSystem;
