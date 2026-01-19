import { Leaf, ShieldCheck, Truck, Zap } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "Sourced from pristine environments, our ingredients are pure, potent, and free from artificial fillers."
  },
  {
    icon: ShieldCheck,
    title: "Lab Tested Quality",
    description: "Every batch is rigorously tested for purity and potency in FDA-registered facilities."
  },
  {
    icon: Zap,
    title: "Fast-Acting Formulas",
    description: "Bioavailable nutrients designed for maximum absorption and quick results."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8EDE7] flex items-center justify-center mb-6 text-accent">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
