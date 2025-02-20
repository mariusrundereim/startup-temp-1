import Image from "next/image";
import { CheckCircle } from "lucide-react";
import aboutContent from "@/data/aboutContent.json";

function AboutSection() {
  const { title, description, highlights, image } = aboutContent;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
