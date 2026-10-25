import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice, type ServicePlan } from "@/datas/services";

interface PlanCardProps {
  plan: ServicePlan;
  variant: "compact" | "full";
  onChoose?: (plan: ServicePlan) => void;
}

export function PlanCard({ plan, variant, onChoose }: PlanCardProps) {
  return (
    <Card
      data-plan={plan.id}
      className={`h-full flex flex-col ${
        plan.featured ? "border-2 border-primary" : ""
      }`}
    >
      <CardHeader>
        {plan.featured && (
          <Badge className="w-fit mb-2">Le plus populaire</Badge>
        )}
        <CardTitle>{plan.name}</CardTitle>
        <p className="text-muted-foreground">{plan.tagline}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {variant === "compact" ? (
          <p className="text-sm text-muted-foreground">{plan.summary}</p>
        ) : (
          <>
            <div>
              <p className="text-sm text-muted-foreground">à partir de</p>
              <p className="text-3xl font-bold">{formatPrice(plan.price)}</p>
              <p className="text-sm text-muted-foreground">
                {plan.priceSuffix ? `${plan.priceSuffix} · ` : ""}taxes en sus
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        {plan.delay && (
          <p className="text-sm font-medium">{plan.delay}</p>
        )}
        {variant === "full" && onChoose && (
          <Button className="mt-auto w-full" onClick={() => onChoose(plan)}>
            Choisir ce forfait
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
