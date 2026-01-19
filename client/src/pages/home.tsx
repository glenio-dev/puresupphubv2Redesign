import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGrid products={products} title="Explore Wellness" />
      </main>
      <Footer />
    </div>
  );
}
