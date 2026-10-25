import { SectionAnimation } from "@/components/animations/SectionAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/datas/services";

export function ServicesFaq() {
  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Questions fréquentes
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="max-w-3xl mx-auto"
          >
            {faq.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionAnimation>
    </section>
  );
}
