"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import ProductsCenter from "@/components/ProductsCenter";
import SocialSidebar from "@/components/SocialSidebar";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-background">
          <Header />
          <SocialSidebar />
          <HeroSection />
          <FeaturesSection />
          <ProductsCenter />
          <Footer />
        </div>
      )}
    </>
  );
}
