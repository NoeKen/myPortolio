import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { processSteps } from "@/datas/services";

export function ProcessSteps() {
  return (
    <section id="deroulement" className="py-16 md:py-24 scroll-mt-20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Comment ça se passe
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Quatre étapes simples, de notre premier appel à la mise en ligne.
            </p>
          </div>

          <ol className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.title} className="border-t-2 border-primary pt-4">
                <p className="text-primary text-sm">{step.when}</p>
                <h3 className="text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </SectionAnimation>
    </section>
  );
}
