import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ScrollIndicator = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Considérer qu'on est "en bas" si on est à moins de 100px du bas
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 100;
      setIsNearBottom(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isNearBottom) {
      // Scroll vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll vers le bas
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="hidden md:block fixed bottom-8 right-8 z-30 animate-bounce hover:text-accent transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg border"
      aria-label={isNearBottom ? "Remonter en haut" : "Défiler vers le bas"}
    >
      {isNearBottom ? (
        <ChevronUp className="h-6 w-6 text-foreground" />
      ) : (
        <ChevronDown className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};