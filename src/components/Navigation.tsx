import { NavLink } from "./NavLink";
import { BurgerMenu } from "./BurgerMenu";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-t border-border" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <NavLink 
              to="/" 
              className="text-3xl font-display font-bold italic hover:no-underline"
            >
              access+
            </NavLink>
            <span className="text-xs text-muted-foreground font-normal mt-1">
              audit et conseil en accessibilité numérique
            </span>
          </div>
          
          {/* Navigation links - cachés sur mobile */}
          <div className="hidden md:flex gap-8 text-base">
            <NavLink to="/services" className="hover:text-primary font-display transition-colors">
              services
            </NavLink>
            <NavLink to="/blog" className="hover:text-primary font-display transition-colors">
              blog
            </NavLink>
            <NavLink to="/a-propos" className="hover:text-primary font-display transition-colors">
              à propos
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary font-display transition-colors">
              contact
            </NavLink>
          </div>

          {/* Menu burger - visible uniquement sur mobile */}
          <BurgerMenu />
        </div>
      </div>
    </nav>
  );
};
