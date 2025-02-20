import Image from "next/image";
import teamContent from "@/data/teamContent.json";

function TeamSection() {
  const { title, members } = teamContent;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {members.map(({ image, name, position, bio }, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-primary text-sm mb-2">{position}</p>
                <p className="text-muted-foreground text-sm">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
