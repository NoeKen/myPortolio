import Link from "next/link";
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { PlanCard } from "@/components/services/PlanCard";
import { Button } from "@/components/ui/button";
import { servicePlans } from "@/datas/services";

export function ServicesPreview() {
  return (
    <section id="services" className="py-16 md:py-24 scroll-mt-20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Services pour PME
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Vous êtes une PME ? En parallèle, j&apos;aide les entreprises
              d&apos;ici à avoir un site qui fait appeler.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicePlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} variant="compact" />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild>
              <Link href="/services">Voir les détails</Link>
            </Button>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
