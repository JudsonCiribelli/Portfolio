import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectsComponents from "../projectsComponent/projectsComponent";

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
      className="flex flex-col items-center py-10 w-full max-w-7xl mx-auto px-4"
      id="projects"
    >
      <h2 className="text-2xl text-white font-semibold xl:text-5xl mb-8 text-center">
        Projetos
      </h2>

      <div className="flex flex-col w-full max-w-md items-center p-6 bg-neutral-950/80 backdrop-blur-sm space-y-6 border border-gray-800 rounded-xl xl:hidden">
        {/* Título e Descrição */}
        <div className="text-center space-y-3">
          <h3 className="text-blue-500 text-3xl font-bold tracking-tight">
            McProcessSim
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            Simulação completa de um ecossistema de autoatendimento para
            fast-food. A aplicação gerencia desde a autenticação do usuário e
            escolha do método de consumo (Delivery/Mesa) até o checkout
            financeiro seguro integrado via Stripe, persistindo todo o histórico
            de pedidos.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Image
            src="/Main-Project/Mobile/MOBILE.png"
            alt="Tela inicial do aplicativo McProcessSim"
            width={450}
            height={650}
            quality={100}
            className="object-cover rounded-xl shadow-lg border border-gray-800 w-full h-auto"
          />
          <Image
            src="/Main-Project/Mobile/MOBILE-2.png"
            alt="Tela de cardápio do aplicativo McProcessSim"
            width={450}
            height={650}
            quality={100}
            className="object-cover rounded-xl shadow-lg border border-gray-800 w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          {techStack.map((tech) => (
            <Button
              key={tech.name}
              variant="outline"
              className={`shadow-md bg-gray-800 hover:bg-gray-700 border ${tech.borderColor} h-12`}
            >
              <div className="flex items-center justify-center gap-2 w-full">
                <span className="text-white font-medium text-sm">
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

        <div className="flex gap-3 w-full pt-2">
          <Button
            asChild
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium flex-1 h-12"
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium flex-1 h-12"
          >
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Deploy
            </Link>
          </Button>
        </div>

        <Button
          asChild
          className="w-full h-14 bg-white hover:bg-gray-200 text-black font-bold text-lg mt-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
        >
          <Link href="/projects">Ver Todos os Projetos</Link>
        </Button>
      </div>

      <div className="hidden xl:block w-full">
        <ProjectsComponents />
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
