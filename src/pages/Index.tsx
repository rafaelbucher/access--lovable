import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Legislation } from "@/components/sections/Legislation";
import { Services } from "@/components/sections/Services";
import { Barriers } from "@/components/sections/Barriers";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FlashAuditModal } from "@/components/modals/FlashAuditModal";

const Index = () => {
  const [isFlashAuditOpen, setIsFlashAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      <main>
        <Hero 
          onFlashAuditClick={() => setIsFlashAuditOpen(true)}
        />
        <Legislation />
        <Services />
        <Barriers />
        <BlogPreview />
      </main>
      <Footer />
      
      <FlashAuditModal 
        isOpen={isFlashAuditOpen} 
        onClose={() => setIsFlashAuditOpen(false)} 
      />
    </div>
  );
};

export default Index;
