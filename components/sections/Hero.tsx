import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroContent from "@/data/heroContent.json";

function HeroSection() {
  const { title, description, buttons } = heroContent;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="lg"
              variant={
                button.variant as
                  | "link"
                  | "default"
                  | "outline"
                  | "destructive"
                  | "secondary"
                  | "ghost"
                  | null
                  | undefined
              }
              className={index === 0 ? "mr-4" : ""}
            >
              {button.label}
              {index === 0 && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    </section>
  );
}

export default HeroSection;
