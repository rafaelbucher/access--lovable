interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export const PageHero = ({ title, description, className = "" }: PageHeroProps) => {
  return (
    <section className={`h-[100svh] max-h-[100svh] flex items-end relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-6 md:mb-8">
            {title}
          </h1>
          <p className="text-md md:text-xl mb-8 md:mb-12 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};