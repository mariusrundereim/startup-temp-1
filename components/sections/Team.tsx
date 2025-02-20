import Image from "next/image";

function TeamSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
              name: "Sarah Johnson",
              position: "CEO",
              bio: "Visionary leader with 15+ years of experience",
            },
            {
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              name: "David Chen",
              position: "CTO",
              bio: "Tech innovator specializing in AI and blockchain",
            },
            {
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              name: "Emily Rodriguez",
              position: "Design Director",
              bio: "Award-winning designer focused on user experience",
            },
            {
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
              name: "Michael Smith",
              position: "Marketing Lead",
              bio: "Digital marketing expert driving growth strategies",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.position}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
