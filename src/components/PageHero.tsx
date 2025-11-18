interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export const PageHero = ({ title, description, className = "" }: PageHeroProps) => {
  return (
    <section className={`min-h-screen flex items-end relative ${className}`}>
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-display font-bold leading-none mb-8">
            {title}
          </h1>
          <p className="text-md md:text-xl mb-12 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};