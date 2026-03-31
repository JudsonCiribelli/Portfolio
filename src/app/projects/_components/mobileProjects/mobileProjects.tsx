import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import { Button } from "@/app/_components/ui/button";

interface Tech {
  name: string;
  icon: string;
  className?: string;
}

interface MobileProjectProps {
  project: {
    title: string;
    description: string;
    images: string[];
    technologies: Tech[];
    repoUrl: string;
    liveUrl: string;
  };
}

const MobileProjectCard = ({ project }: MobileProjectProps) => {
  return (
    <div className="flex flex-col p-5 space-y-6 border border-gray-800 rounded-xl bg-neutral-950/50">
      <div className="space-y-2">
        <h2 className="text-blue-500 text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {project.images.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt={`Tela do projeto ${project.title}`}
            width={650}
            height={650}
            quality={90}
            className="object-cover rounded-lg w-full h-auto shadow-md border border-gray-800"
          />
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-white text-sm font-semibold border-b border-gray-800 pb-2">
          Tecnologias utilizadas
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.technologies.map((tech) => (
            <ShimmerButton key={tech.name} className="shadow-lg h-10">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-xs font-medium tracking-tight">
                  {tech.name}
                </span>
                <Image
                  src={tech.icon}
                  width={16}
                  height={16}
                  alt={`Ícone do ${tech.name}`}
                  className={tech.className || ""}
                />
              </div>
            </ShimmerButton>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          asChild
          className="bg-gray-100 hover:bg-gray-300 text-black font-semibold flex-1"
        >
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </Link>
        </Button>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-1"
        >
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projeto
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileProjectCard;
