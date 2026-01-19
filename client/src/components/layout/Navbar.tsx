import { Link } from "wouter";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-medium tracking-tighter text-primary">PuresuppHub</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Home</a></Link>
          <button onClick={scrollToCatalog} className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Categories</button>
          <button onClick={scrollToCatalog} className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Top Products</button>
          <button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">About</button>
          <button onClick={scrollToContact} className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-primary/70 hover:text-accent hover:bg-muted/50">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            className="bg-accent hover:bg-primary text-white font-bold uppercase tracking-widest text-[10px] px-6 rounded-full hidden sm:flex"
            onClick={scrollToCatalog}
          >
            Find My Supp
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-primary/70">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
