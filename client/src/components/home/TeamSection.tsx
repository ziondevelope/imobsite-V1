import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Agent, agents } from "@/lib/data";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<Agent[]>([]);

  useEffect(() => {
    setTeamMembers(agents);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Nossa Equipe
          </h2>
          <p className="text-secondary">
            Profissionais dedicados a encontrar o imóvel ideal para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-accent rounded-lg overflow-hidden text-center shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-montserrat font-semibold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-secondary text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-secondary hover:text-primary">
                      <Facebook size={18} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-secondary hover:text-primary">
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-secondary hover:text-primary">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
