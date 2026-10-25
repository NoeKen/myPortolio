import { Check } from "lucide-react";
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { PlanCard } from "@/components/services/PlanCard";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice, servicePlans, type ServicePlan } from "@/datas/services";

interface PlansGridProps {
  onChoose: (plan: ServicePlan) => void;
}

export function PlansGrid({ onChoose }: PlansGridProps) {
  const oneOff = servicePlans.filter((plan) => plan.id !== "entretien");
  const maintenance = servicePlans.find((plan) => plan.id === "entretien");

  return (
    <section id="forfaits" className="py-16 md:py-24 scroll-mt-20 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Les forfaits
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Des prix clairs, sans surprise. Choisissez le forfait qui
              correspond à votre entreprise.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {oneOff.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                variant="full"
                onChoose={onChoose}
              />
            ))}
          </div>

          {maintenance && (
            <Card className="mt-6" data-plan={maintenance.id}>
              <CardContent className="flex flex-col md:flex-row md:items-center gap-6 pt-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold">{maintenance.name}</h3>
                  <p className="text-muted-foreground">{maintenance.tagline}</p>
                  <p className="mt-3 text-2xl font-bold">
                    {formatPrice(maintenance.price)}{" "}
                    <span className="text-base font-normal text-muted-foreground">
                      {maintenance.priceSuffix}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">taxes en sus</p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 md:flex-1">
                  {maintenance.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </SectionAnimation>
    </section>
  );
}
