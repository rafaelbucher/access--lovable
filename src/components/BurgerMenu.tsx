import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { useIsMobile } from "../hooks/use-mobile";

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
        <div className={`fixed inset-0 bg-white z-40 overflow-y-auto transition-opacity duration-300 ${
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
            <div className="flex-1 flex flex-col justify-center py-8">
              <div className="space-y-8">
                {menuItems.map((item, index) => (
                  <div 
                    key={item.to} 
                    className={`pb-6 transition-all duration-500 ${
                      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${200 + (index * 100)}ms`
                    }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className="block text-2xl font-display font-bold mb-3 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </NavLink>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer dans la modale */}
              <div className={`mt-auto pt-8 text-sm font-display text-muted-foreground text-white transition-all duration-600 delay-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <p>© 2025 access+</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};