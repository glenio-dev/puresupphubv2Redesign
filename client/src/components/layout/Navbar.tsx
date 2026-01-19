import { Link } from "wouter";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-medium tracking-tight text-primary">PuresuppHub</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Shop</a></Link>
          <Link href="/"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Best Sellers</a></Link>
          <Link href="/"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Our Story</a></Link>
          <Link href="/"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Blog</a></Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-muted/50">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-muted/50 relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent"></span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-foreground/80">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
