import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const faqs = [
  {
    question: "Is PuresuppHub a supplement store?",
    answer: "No. We are a 'Direct-to-Consumer' Affiliate Hub. We don't stock products ourselves; instead, we connect you directly to the verified official suppliers so you can buy at factory prices without middlemen."
  },
  {
    question: "How do I get the direct pricing?",
    answer: "Simply find your supplement in our catalog and click 'Get Direct Access'. You will be securely redirected to the official supplier's checkout page where the direct price is applied."
  },
  {
    question: "Do you store my personal or payment data?",
    answer: "Never. We don't even have a signup process. Your privacy is absolute because you only provide your details on the official, SSL-encrypted checkout pages of our verified partners."
  },
  {
    question: "What if I need a refund?",
    answer: "All our verified partners offer generous money-back guarantees (usually 60 to 180 days). You would handle any returns directly with the official supplier using the contact information provided in your order confirmation."
  }
];

export function Support() {
  return (
    <section className="py-24 bg-white" id="support">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* FAQ Section */}
          <div id="faq">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Common Questions</span>
            <h2 className="text-4xl font-medium text-primary mb-12">Frequently Asked <em className="italic font-normal text-accent">Questions</em></h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/40 rounded-2xl px-6 bg-[#F8F9F5]/30">
                  <AccordionTrigger className="text-left font-medium text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <div id="contact" className="bg-primary rounded-[32px] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-medium mb-6">Need <em className="italic font-normal text-accent">Assistance?</em></h2>
              <p className="text-white/60 mb-10 text-sm leading-relaxed">
                Have questions about a specific supplier or how our hub works? Send us a message and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 h-14 focus:border-accent transition-colors text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/10 h-14 focus:border-accent transition-colors text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you today?" 
                    className="bg-white/5 border-white/10 min-h-[120px] focus:border-accent transition-colors text-white placeholder:text-white/20 resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-white hover:text-primary text-white h-14 font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg group">
                  Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Us</p>
                    <p className="text-xs font-medium">support@puresupphub.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Response Time</p>
                    <p className="text-xs font-medium">Under 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
