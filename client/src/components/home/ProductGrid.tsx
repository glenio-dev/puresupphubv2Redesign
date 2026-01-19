import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

interface ProductGridProps {
  products: Product[];
  title: string;
}

const categories = [
  "All",
  "Oral Health",
  "Brain & Hearing",
  "Blood Sugar",
  "Physical Performance",
  "General Wellness",
  "Skin, Hair & Nails",
  "Men's Vitality",
  "Weight Management"
];

export function ProductGrid({ products, title }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <section className="py-24 bg-[#F8F9F5]" id="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Direct from verified manufacturers</span>
          <h2 className="text-4xl md:text-6xl font-medium text-primary mb-8">
            {title}
          </h2>
          
          {/* Search and Filter UI */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <Input 
                type="text"
                placeholder="Search by product name or health goal..."
                className="w-full h-16 pl-14 pr-14 bg-white border-border/40 rounded-2xl shadow-sm focus:ring-accent focus:border-accent text-lg placeholder:text-muted-foreground/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-6 flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    selectedCategory === category 
                    ? "bg-accent text-white shadow-lg shadow-accent/20 scale-105" 
                    : "bg-white text-primary/60 border border-border/40 hover:border-accent/40 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-[32px] border border-border/40 overflow-hidden hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] hover:border-accent/30 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] bg-white p-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F1F3EE]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {product.badge && (
                      <span className="absolute top-6 left-6 z-10 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-sm shadow-lg">
                        {product.badge}
                      </span>
                    )}
                    
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    <div className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm border border-border/20 px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-10 pt-4">
                    <h3 className="text-2xl font-medium text-primary mb-3 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed h-10 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-y-3 mb-10">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-primary/70 uppercase tracking-tight">
                          <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-[#2D6A4F] hover:bg-primary text-white h-14 text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1"
                    >
                      <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        Get Direct Access <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-border/60">
            <div className="w-20 h-20 bg-[#F1F3EE] rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-medium text-primary mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
            <Button 
              variant="link" 
              className="mt-4 text-accent font-bold uppercase tracking-widest text-xs"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="inline-block p-10 md:p-12 rounded-[40px] bg-primary text-white relative overflow-hidden w-full max-w-4xl shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to skip the markup?</h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
                Find your supplement now and get the official direct price. Connect with verified suppliers in 60 seconds.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white border-white text-primary hover:bg-white/90 hover:text-primary px-10 h-16 text-lg rounded-xl font-bold transition-all"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Browse Verified List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
