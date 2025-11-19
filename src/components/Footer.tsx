import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-accent py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and tagline */}
          <div>
            <h3 className="text-3xl font-inter font-extrabold italic mb-1">access+</h3>
            <p className="text-xs text-muted-foreground max-w-md">
              audit et conseil en accessibilité numérique
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-muted-foreground mt-12 text-sm">
              <p>
                16 rue Candale<br />
                93500 Pantin, France<br />
                <a href="mailto:contact@accessplus.fr" className="hover:text-foreground transition-colors">
                  contact@accessplus.fr
                </a><br />
                <a href="tel:+33753160432" className="hover:text-foreground transition-colors">
                  +33 7 53 16 04 32
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-left flex justify-between items-center">
          <p className="text-xs text-foreground">
            © {new Date().getFullYear()} access+ - <Link to="/mentions-legales" className="hover:text-muted-foreground transition-colors">Mentions légales</Link>
          </p>
          <div className="hidden md:flex gap-4">
            <Link to="/services" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              services
            </Link>
            <Link to="/blog" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              blog
            </Link>
            <Link to="/a-propos" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              à propos
            </Link>
            <Link to="/contact" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
