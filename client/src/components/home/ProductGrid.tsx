import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  title: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-24 bg-[#F8F9F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-accent font-medium tracking-wide uppercase text-sm mb-2 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-medium text-primary">
              {title.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "italic font-normal text-accent" : ""}> {word}</span>
              ))}
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="relative aspect-square bg-[#F1F3EE] p-8 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-[#FFD60A] text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                
                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide opacity-70">
                  {product.category}
                </div>
                <h3 className="text-lg font-medium text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
