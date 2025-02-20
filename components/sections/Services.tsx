import { Globe2, Laptop, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe2 className="h-8 w-8" />,
              title: "Digital Strategy",
              description:
                "Comprehensive digital strategies tailored to your business goals",
            },
            {
              icon: <Laptop className="h-8 w-8" />,
              title: "Web Development",
              description:
                "Custom web solutions built with cutting-edge technologies",
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Growth Marketing",
              description:
                "Data-driven marketing strategies to accelerate your growth",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
