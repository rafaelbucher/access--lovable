import { ChevronDown } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export const PageHero = ({ title, description, className = "" }: PageHeroProps) => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('main, [id]:not([id="hero"])');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Animation plus lente avec timeout
      setTimeout(() => {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section className={`min-h-[70svh] flex items-end relative overflow-hidden bg-accent ${className}`}>
      <div className="container mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-6 md:mb-8">
            {title}
          </h1>
          <p className="text-md text-muted-foreground font-normal md:text-xl mb-8 md:mb-12 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      
      {/* Scroll indicator - bottom right of hero section */}
      <div className="absolute bottom-8 right-8 md:hidden">
        <button
          onClick={scrollToContent}
          className="transition-opacity duration-300 hover:opacity-70"
          aria-label="Défiler vers le contenu suivant"
        >
          <ChevronDown className="h-8 w-8 text-foreground animate-pulse" />
        </button>
      </div>
    </section>
  );
};