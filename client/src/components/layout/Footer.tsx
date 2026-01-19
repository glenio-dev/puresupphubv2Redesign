export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-medium tracking-tight">PuresuppHub</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Your direct-to-consumer affiliate hub for premium natural supplements. 
              Pure ingredients, potent results.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Shop</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">Subscribe for wellness tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded px-4 py-2 w-full focus:outline-none focus:border-white/40 text-sm placeholder:text-white/40"
              />
              <button className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 PuresuppHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
