import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { BurgerMenu } from "./BurgerMenu";

interface NavigationProps {
  variant?: "default" | "cream";
}

export const Navigation = ({ variant = "cream" }: NavigationProps) => {
  const [currentBg, setCurrentBg] = useState("bg-background");

  useEffect(() => {
    const handleScroll = () => {
      // Récupérer toutes les sections ET les éléments principaux (PageHero, main)
      const elements = document.querySelectorAll('section, main');
      const navHeight = 80; // Hauteur de la navigation
      
      let currentElement = null;
      let topPosition = Infinity;
      
      // Trouver l'élément qui est le plus proche du haut de l'écran
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        
        // Si l'élément est visible et proche du haut
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          if (Math.abs(rect.top) < Math.abs(topPosition)) {
            currentElement = element;
            topPosition = rect.top;
          }
        }
      });
      
      // Fallback: si aucun élément n'est trouvé, prendre le premier visible
      if (!currentElement) {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom > navHeight && rect.top < window.innerHeight) {
            if (!currentElement || rect.top < currentElement.getBoundingClientRect().top) {
              currentElement = element;
            }
          }
        });
      }
      
      if (currentElement) {
        const classList = Array.from(currentElement.classList);
        const elementId = currentElement.id || currentElement.tagName.toLowerCase();
        const elementTag = currentElement.tagName.toLowerCase();
        
        console.log('Élément actif:', elementId, 'Tag:', elementTag, 'Classes:', classList);
        
        // Logique de détection du background
        const hasAccentBg = classList.some(cls => typeof cls === 'string' && 
          (cls.includes('bg-accent') || cls.includes('bg-secondary')));
        const hasBackgroundBg = classList.some(cls => typeof cls === 'string' && 
          cls.includes('bg-background'));
        
        if (hasAccentBg) {
          setCurrentBg("bg-accent");
        } else if (hasBackgroundBg || elementTag === 'main') {
          // Si c'est un main ou explicitement bg-background
          setCurrentBg("bg-background");
        } else {
          // Par défaut pour les éléments sans classe explicite (comme les sections dans main)
          setCurrentBg("bg-background");
        }
      }
    };
    
    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);
    
    // Appeler une première fois pour l'état initial
    setTimeout(handleScroll, 100); // Petit délai pour laisser le DOM se charger
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgClass = variant === "default" ? currentBg : "bg-accent";
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgClass} border-t border-border transition-all duration-500 ease-in-out`} role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <NavLink 
              to="/" 
              className="text-3xl font-inter font-extrabold italic hover:no-underline"
            >
              access+
            </NavLink>
            <span className="text-xs text-muted-foreground font-normal mt-1">
              audit et conseil en accessibilité numérique
            </span>
          </div>
          
          {/* Navigation links - cachés sur mobile */}
          <div className="hidden md:flex gap-4">
            <NavLink to="/services" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              services
            </NavLink>
            <NavLink to="/blog" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              blog
            </NavLink>
            <NavLink to="/a-propos" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
              à propos
            </NavLink>
            <NavLink to="/contact" className="nav-accessible text-sm text-foreground hover:text-foreground transition-colors">
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
