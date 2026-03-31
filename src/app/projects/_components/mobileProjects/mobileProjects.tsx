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
    <div className="flex flex-col space-y-6 rounded-xl border border-gray-800 bg-neutral-950/50 p-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-500">{project.title}</h2>
        <p className="text-sm leading-relaxed text-gray-300">
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
            className="h-auto w-full rounded-lg border border-gray-800 object-cover shadow-md"
          />
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="border-b border-gray-800 pb-2 text-sm font-semibold text-white">
          Tecnologias utilizadas
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.technologies.map((tech) => (
            <ShimmerButton key={tech.name} className="h-10 shadow-lg">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-medium tracking-tight text-white">
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
          className="flex-1 bg-gray-100 font-semibold text-black hover:bg-gray-300"
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
          className="flex-1 bg-blue-600 font-semibold text-white hover:bg-blue-700"
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
