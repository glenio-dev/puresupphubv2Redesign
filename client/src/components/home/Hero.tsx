import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import collagenImg from "@assets/advanced_collagen_pouch_realistic_1768701522740_1768800552469.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-white to-[#F8F9F5]">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8EDE7]/30 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-primary text-white rounded-sm">
              🚀 NOT A SUPPLEMENT STORE
            </span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#E8EDE7] text-primary rounded-sm">
              NOT A REVIEW SITE
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 text-primary"
          >
            The Fastest Way to Buy Natural Supplements— <em className="font-normal italic text-accent underline decoration-accent/30 underline-offset-8">Direct</em> from Verified Suppliers
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Skip the endless browsing, account signups, and retail markups. PuresuppHub connects you straight to premium suppliers in 2 clicks—so you save time AND money.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-[#2D6A4F] text-white px-8 h-16 text-lg rounded-lg shadow-[0_8px_20px_rgba(27,67,50,0.25)] hover:translate-y-[-2px] transition-all duration-300 group"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find My Supplement (2 Clicks) <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              No signup required. Direct to supplier in 60 seconds.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Visual Concept: Product Card Floating with Arrows */}
            <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center">
              <div className="relative p-8 bg-white rounded-3xl shadow-2xl border border-border/50 max-w-sm">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-lg rotate-12">
                  <span className="text-xs font-bold text-center">FACTORY<br/>DIRECT</span>
                </div>
                <img src={collagenImg} alt="Direct Connection" className="w-full h-auto object-contain mb-6" />
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#F1F3EE] flex items-center justify-center mx-auto mb-2">👤</div>
                    <span className="text-[10px] font-bold text-primary">YOU</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="h-0.5 w-full bg-gradient-to-r from-accent to-accent/20 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-accent rotate-45" />
                    </div>
                    <span className="text-[8px] font-bold text-accent uppercase tracking-tighter italic">2 Clicks Access</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#E8EDE7] flex items-center justify-center mx-auto mb-2">🏢</div>
                    <span className="text-[10px] font-bold text-primary">SUPPLIER</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#E8EDE7] to-white rounded-full -z-10 blur-3xl opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
