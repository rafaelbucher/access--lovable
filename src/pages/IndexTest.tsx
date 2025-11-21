import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="default" />
      <main>
        <div className="py-16 px-6">
          <h1 className="text-4xl font-bold text-center">Test Page</h1>
          <p className="text-center mt-4">Si vous voyez ce message, la page fonctionne.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;