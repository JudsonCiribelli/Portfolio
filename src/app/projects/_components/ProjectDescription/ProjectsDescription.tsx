import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";

export interface TechIcon {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

interface ProjectsDescriptionProps {
  title: string;
  description: string;
  technologies: TechIcon[];
  githubUrl: string;
  liveUrl: string;
  isLiveDisabled?: boolean;
}

const ProjectsDescription = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  isLiveDisabled,
}: ProjectsDescriptionProps) => {
  return (
    <div className="flex flex-col space-y-6 p-4">
      <h1 className="mb-2 text-xl font-semibold text-blue-500">{title}</h1>

      <p className="text-sm text-white">{description}</p>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-blue-500">
          Tecnologias utilizadas
        </h2>
        <div className="flex flex-wrap gap-1">
          {/* Aqui iteramos sobre as tecnologias recebidas por prop */}
          {technologies.map((tech) => (
            <ShimmerButton key={tech.id} className="shadow-2xl">
              <Image
                src={tech.src}
                alt={tech.alt}
                width={20}
                height={20}
                className={tech.className}
              />
            </ShimmerButton>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button asChild className="bg-blue-600 text-lg hover:bg-blue-600">
          <Link className="text-white" target="_blank" href={githubUrl}>
            Link do código
          </Link>
        </Button>

        {isLiveDisabled ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="cursor-pointer bg-blue-600 text-lg text-white hover:bg-blue-600">
                Veja o projeto em tempo real
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white text-black">
              <AlertDialogHeader>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <TriangleAlert size={60} />
                  <AlertDialogTitle>Projeto em Manutenção</AlertDialogTitle>
                  <AlertDialogDescription>
                    Este deploy está temporariamente offline para manutenção
                    programada e atualização de banco de dados. O código
                    continua disponível para revisão técnica no meu GitHub.
                    Agradeço a compreensão!
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button asChild className="bg-blue-600 text-lg hover:bg-blue-600">
            <Link className="text-white" target="_blank" href={liveUrl}>
              Veja o projeto em tempo real
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectsDescription;
