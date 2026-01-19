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
        <div className="lg:col-span-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-[#E8EDE7] text-primary rounded-full">
              New Arrival
            </span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground font-medium">Advanced Bio-Nutritionals</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 text-primary"
          >
            The Fastest Way to Buy <em className="font-normal italic text-accent">Natural</em> Supplements
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed"
          >
            Premium, clinically-researched formulas for your holistic health journey. Pure ingredients, potent results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-[#2D6A4F] text-white px-8 h-14 text-base rounded-lg shadow-[0_8px_20px_rgba(27,67,50,0.25)] hover:translate-y-[-2px] transition-all duration-300">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 text-base rounded-lg transition-all duration-300">
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <p className="font-medium text-primary">Trusted by 10,000+ Customers</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Main Product Image with floating effect */}
            <div className="relative aspect-square md:aspect-[4/3] max-w-[120%] -mr-[20%]">
               <img 
                  src={collagenImg} 
                  alt="Advanced Collagen Plus" 
                  className="w-full h-full object-contain drop-shadow-2xl"
               />
            </div>
          </motion.div>

          {/* Decorative Circle */}
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#E8EDE7] to-white rounded-full -z-10 blur-3xl opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
