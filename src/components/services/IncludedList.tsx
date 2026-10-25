import { Check, X } from "lucide-react";
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { included, notIncluded, paymentTerms } from "@/datas/services";

export function IncludedList() {
  return (
    <section id="inclus" className="py-16 md:py-24 scroll-mt-20 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Ce qui est inclus
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Ce que vous obtenez, et ce qui est facturé à part.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Inclus</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Non inclus</h3>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <X className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Modalités</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{paymentTerms}</p>
            </CardContent>
          </Card>
        </div>
      </SectionAnimation>
    </section>
  );
}
