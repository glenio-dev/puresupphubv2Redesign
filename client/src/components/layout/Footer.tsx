export function Footer() {
  return (
    <footer className="bg-[#0A1F1A] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-medium tracking-tighter">PuresuppHub</span>
            </div>
            <p className="text-white/40 leading-relaxed mb-8 text-sm max-w-xs">
              Direct-to-Consumer Affiliate Hub for premium natural supplements. We bridge the gap between you and verified laboratories.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Top Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Direct Access</h4>
            <p className="text-sm text-white/40 mb-6 italic">
              "We earn affiliate commissions at no extra cost to you. Your trust is our absolute priority."
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              VERIFIED SUPPLIERS 2026
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 tracking-tight italic max-w-2xl text-center md:text-left">
            Disclaimer: Content is for informational purposes only. Consult a doctor. We connect you directly to official encrypted checkout pages.
          </p>
          <p className="text-xs text-white/20 font-medium whitespace-nowrap">
            © 2026 PuresuppHub. Built for speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
