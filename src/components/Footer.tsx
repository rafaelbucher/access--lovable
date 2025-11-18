import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and tagline */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">access+</h3>
            <p className="text-sm text-muted-foreground max-w-md">
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

          {/* Quick Links */}
          <div>
            <div className="space-y-2 mt-12 text-left md:text-right">
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                services
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                blog
              </Link>
              <Link to="/a-propos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                à propos
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                contact
              </Link>
              <Link to="/design-system" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                système de design
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-left">
          <p className="text-xs text-black text-muted-foreground">
            © {new Date().getFullYear()} access+ - audit et conseil en accessibilité numérique - Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
};
