import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { useIsMobile } from "../hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, PersonStanding } from "lucide-react";

interface MenuItem {
  to: string;
  label: string;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    to: "/services",
    label: "services",
    description: "Découvrez nos services d'accessibilité web et de conformité RGAA pour rendre votre site accessible à tous."
  },
  {
    to: "/blog",
    label: "blog",
    description: "Articles, guides et conseils sur l'accessibilité web, les bonnes pratiques et les dernières tendances."
  },
  {
    to: "/a-propos",
    label: "à propos",
    description: "Apprenez-en plus sur notre mission, notre équipe et notre engagement pour l'accessibilité numérique."
  },
  {
    to: "/contact",
    label: "contact",
    description: "Contactez-nous pour discuter de vos besoins en accessibilité web et obtenir un devis personnalisé."
  }
];

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    if (!isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsOpen(true), 10);
    } else {
      setIsOpen(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder la position actuelle du scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaurer le scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup au démontage du composant
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // N'afficher le burger menu que sur mobile
  if (!isMobile) {
    return null;
  }

  return (
    <>
      {/* Bouton burger */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-start items-center w-4 h-8 relative z-50"
        aria-label="Menu de navigation"
        aria-expanded={isOpen}
      >
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
          isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`} />
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`} />
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
          isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`} />
      </button>

      {/* Modale full screen */}
      {isVisible && (
        <div className={`fixed inset-0 bg-accent z-40 overflow-y-auto transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="min-h-full flex flex-col px-6">
            {/* Header avec logo */}
            <div className={`flex items-center py-4 ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              <div className="flex flex-col">
                <NavLink 
                  to="/" 
                  onClick={closeMenu}
                  className="text-3xl font-display font-bold italic hover:no-underline"
                >
                  access+
                </NavLink>
                <span className="text-xs text-muted-foreground text-whitefont-normal mt-1">
                    audit et conseil en accessibilité numérique
                </span>
              </div>
            </div>

            {/* Items de navigation */}
            <div className="flex-1 flex flex-col justify-center py-6">
              <div className="space-y-8">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  
                  return (
                    <div 
                      key={item.to} 
                      className={`transition-all duration-500 ${
                        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${200 + (index * 100)}ms`
                      }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={closeMenu}
                        className={`block rounded-lg transition-all duration-200 hover:bg-accent/5 ${
                          isActive ? 'bg-accent/10' : ''
                        }`}
                      >
                        <div 
                          className={`border-black inline pb-1 text-2xl font-display leading-relaxed hover:text-primary font-bold mb-1 transition-colors ${
                            isActive ? 'border-black border-b-4' : ''
                          }`}>
                          {item.label}
                        </div>
                        <p className="text-xs mt-2 text-muted-foreground leading-relaxed hover:text-primary">
                          {item.description}
                        </p>
                      </NavLink>
                    </div>
                  );
                })}
              </div>

              {/* Footer dans la modale */}
              <div className={`mt-auto pt-8 text-sm font-display text-muted-foreground text-white transition-all duration-600 delay-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <p>© 2025 access+</p>
              </div>
            </div>

            {/* CTA Section - Fixed bottom */}
            <div className={`fixed bottom-0 left-0 right-0 w-full bg-accent p-6 space-y-4 transition-all duration-600 delay-600 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              <Button 
                variant="outline" 
                className="w-full border-2 border-foreground bg-accent text-foreground hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-3"
                size="lg"
                onClick={closeMenu}
              >
                <Phone className="h-5 w-5" />
                Discutons de votre projet
              </Button>
              <Button 
                variant="default"
                className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all flex items-center justify-center gap-3"
                size="lg"
                onClick={closeMenu}
              >
                <PersonStanding className="h-5 w-5" />
                Lancer votre audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};