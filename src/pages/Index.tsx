import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Legislation } from "@/components/sections/Legislation";
import { Services } from "@/components/sections/Services";
import { Barriers } from "@/components/sections/Barriers";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FlashAuditModal } from "@/components/modals/FlashAuditModal";
import { AccessibilityCarousel } from "@/components/sections/AccessibilityCarousel";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const Index = () => {
  const [isFlashAuditOpen, setIsFlashAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero 
          onFlashAuditClick={() => setIsFlashAuditOpen(true)}
        />
        <Legislation />
        <Services />
        <Barriers />
        <AccessibilityCarousel />
        <BlogPreview />
      </main>
      <Footer />
      
      <ScrollIndicator />
      
      <FlashAuditModal 
        isOpen={isFlashAuditOpen} 
        onClose={() => setIsFlashAuditOpen(false)} 
      />
    </div>
  );
};

export default Index;
