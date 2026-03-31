import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProjectsComponents from "../projectsComponent/projectsComponent";
import { Button } from "../ui/button";

const FeaturedProjectSection = () => {
  const techStack = [
    {
      name: "React",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      borderColor: "border-blue-300",
    },
    {
      name: "TypeScript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      borderColor: "border-blue-500",
    },
    {
      name: "Postgres",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      borderColor: "border-blue-400",
    },
    {
      name: "Next.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      borderColor: "border-yellow-500",
      imageClass: "bg-white rounded-full p-0.5",
    },
  ];
  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-10"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-semibold text-white xl:text-5xl">
        Projetos
      </h2>

      <div className="flex w-full max-w-md flex-col items-center space-y-6 rounded-xl border border-gray-800 bg-neutral-950/80 p-6 backdrop-blur-sm xl:hidden">
        {/* Título e Descrição */}
        <div className="space-y-3 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-blue-500">
            McProcessSim
          </h3>
          <p className="text-base leading-relaxed text-gray-300">
            Simulação completa de um ecossistema de autoatendimento para
            fast-food. A aplicação gerencia desde a autenticação do usuário e
            escolha do método de consumo (Delivery/Mesa) até o checkout
            financeiro seguro integrado via Stripe, persistindo todo o histórico
            de pedidos.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <Image
            src="/Main-Project/Mobile/MOBILE.png"
            alt="Tela inicial do aplicativo McProcessSim"
            width={450}
            height={650}
            quality={100}
            className="h-auto w-full rounded-xl border border-gray-800 object-cover shadow-lg"
          />
          <Image
            src="/Main-Project/Mobile/MOBILE-2.png"
            alt="Tela de cardápio do aplicativo McProcessSim"
            width={450}
            height={650}
            quality={100}
            className="h-auto w-full rounded-xl border border-gray-800 object-cover shadow-lg"
          />
        </div>

        <div className="grid w-full grid-cols-2 gap-3">
          {techStack.map((tech) => (
            <Button
              key={tech.name}
              variant="outline"
              className={`border bg-gray-800 shadow-md hover:bg-gray-700 ${tech.borderColor} h-12`}
            >
              <div className="flex w-full items-center justify-center gap-2">
                <span className="text-sm font-medium text-white">
                  {tech.name}
                </span>
                <Image
                  src={tech.iconUrl}
                  width={18}
                  height={18}
                  alt={`Ícone do ${tech.name}`}
                  className={tech.imageClass || ""}
                />
              </div>
            </Button>
          ))}
        </div>

        <div className="flex w-full gap-3 pt-2">
          <Button
            asChild
            className="h-12 flex-1 bg-gray-700 font-medium text-white hover:bg-gray-600"
          >
            <Link
              href="https://github.com/JudsonCiribelli/McProcessSim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Código
            </Link>
          </Button>

          <Button
            asChild
            className="h-12 flex-1 bg-blue-600 font-medium text-white hover:bg-blue-700"
          >
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Deploy
            </Link>
          </Button>
        </div>

        <Button
          asChild
          className="mt-4 h-14 w-full bg-white text-lg font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:bg-gray-200"
        >
          <Link href="/projects">Ver Todos os Projetos</Link>
        </Button>
      </div>

      <div className="hidden w-full xl:block">
        <ProjectsComponents />
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
