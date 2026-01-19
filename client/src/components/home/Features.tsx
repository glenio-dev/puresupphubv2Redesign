import { Search, Zap, DollarSign, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "We Research & Curate",
    text: "Our team spends weeks vetting natural supplement suppliers based on FDA registration & 3rd-party testing.",
    benefit: "You get a pre-filtered list of only the best."
  },
  {
    icon: Zap,
    title: "Your Express Lane",
    text: "Instead of 2+ hours comparing sites, click the supplement you want and land directly on the checkout.",
    benefit: "2-minute access vs 2-hour search."
  },
  {
    icon: DollarSign,
    title: "Direct Pricing",
    text: "Buying straight from suppliers cuts out the middlemen (and their markups).",
    benefit: "Premium quality at source prices."
  }
];

const trustChecks = [
  { title: "FDA-Registered Suppliers Only", desc: "We only list manufacturers with certified facilities in the USA." },
  { title: "Zero Data Storage", desc: "We never ask for your email or credit card. Your privacy is absolute." },
  { title: "SSL Direct Link", desc: "You are securely redirected to the official encrypted checkout page." },
  { title: "Money-Back Guarantees", desc: "All listed partners offer 60-180 day protections on your purchase." }
];

export function Features() {
  return (
    <>
      <section className="py-24 bg-white" id="why-us">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-primary mb-4">Why PuresuppHub?</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="p-10 rounded-3xl bg-white border border-border/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F1F3EE] flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <pillar.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-primary">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{pillar.text}</p>
                <div className="pt-6 border-t border-border/40 flex items-center gap-2">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">The Result:</span>
                  <span className="text-sm font-medium text-primary italic">{pillar.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F1F3EE]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-[32px] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Why Smart Shoppers Trust Us</h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  We bridge the gap between you and the laboratory. No marketing fluff, just direct access to verified health products.
                </p>
              </div>
              <div className="grid gap-6">
                {trustChecks.map((check, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{check.title}</h4>
                      <p className="text-sm text-white/60 leading-snug">{check.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
