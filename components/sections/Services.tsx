import { Globe2, Laptop, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesContent from "@/data/servicesContent.json";

const iconMap: { [key: string]: JSX.Element } = {
  Globe2: <Globe2 className="h-8 w-8" />,
  Laptop: <Laptop className="h-8 w-8" />,
  Rocket: <Rocket className="h-8 w-8" />,
};

function ServicesSection() {
  const { title, services } = servicesContent;

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(
            (
              {
                icon,
                title,
                description,
              }: {
                icon: keyof typeof iconMap;
                title: string;
                description: string;
              },
              index
            ) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{iconMap[icon]}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <Button variant="outline" size="sm">
                  Les mer
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
