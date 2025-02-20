import Image from "next/image";
import { CheckCircle } from "lucide-react";

function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-muted-foreground mb-6">
              Since 2020, we've been at the forefront of digital innovation,
              helping businesses transform their operations and achieve
              remarkable growth through cutting-edge technology solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
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
