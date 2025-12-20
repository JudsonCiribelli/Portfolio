import Image from "next/image";
import { ShimmerButton } from "../magicui/shimmer-button";
import { Button } from "../_components/ui/button";
import Link from "next/link";
import ProjectsComponents from "../_components/projectsComponent/projectsComponent";

const ProjectsPage = () => {
  return (
    <section className="bg-black my-2 w-full xl:flex items-center flex-col justify-center">
      <h1 className="text-white text-lg text-center font-semibold py-2 my-5 xl:text-2xl">
        Meus Projetos
      </h1>
      <div className="w-full block flex-col space-y-4 xl:hidden xl:space-y-8">
        {/* McProcessim */}
        <div className="flex flex-col p-3 space-y-4 border border-solid border-white rounded-sm m-1">
          <h1 className="text-blue-500 text-2xl font-semibold">McProcessSim</h1>
          <p className="text-white">
            Simulação completa de um ecossistema de autoatendimento para
            fast-food. A aplicação gerencia desde a autenticação do usuário e
            escolha do método de consumo (Delivery/Mesa) até o checkout
            financeiro seguro integrado via Stripe, persistindo todo o histórico
            de pedidos.
          </p>
          <Image
            src="/McProcessim/imageMcProcessim.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <Image
            src="/McProcessim/TelaInicial.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <Image
            src="/McProcessim/TelaDoProduto.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <Image
            src="/McProcessim/TelaDoPedido.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <div className="grid grid-cols-2 gap-1 xl:flex">
            <ShimmerButton className="shadow-2xl">
              <div className="flex gap-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  React
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  width={20}
                  height={20}
                  alt="Node icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Typerscript
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  width={20}
                  height={20}
                  alt="ts icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Postgres
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  NextJs
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                  className="bg-white rounded-full p-0.4"
                />
              </div>
            </ShimmerButton>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-white w-[50%]">
              <Link
                href="https://github.com/JudsonCiribelli/McProcessSim"
                target="_blank"
              >
                Repositório
              </Link>
            </Button>
            <Button asChild className="bg-white w-[50%]">
              <Link href="/">Projeto</Link>
            </Button>
          </div>
        </div>
        {/* LanchApp */}
        <div className="flex flex-col p-3 space-y-4 border border-solid border-white rounded-sm m-1">
          <h1 className="text-blue-500 text-2xl font-semibold">LanchApp</h1>
          <p className="text-white">
            Backend completo para gestão de pedidos de uma lanchonete/pizzaria,
            focado em segurança, testes automatizados e arquitetura escalável.
            Este projeto simula um cenário real de Food Delivery. A aplicação
            permite que clientes façam pedidos (Delivery, Retirada ou Mesa),
            acompanhem o status em tempo real e gerenciem seus endereços. Para o
            estabelecimento, o sistema oferece controle total do cardápio e um
            fluxo de pedidos otimizado para a cozinha. O foco principal foi
            aplicar Clean Code, arquitetura em camadas, testes de integração e
            validações rigorosas de segurança.
          </p>
          <Image
            src="/api-image.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />

          <h2 className="text-white text-sm font-semibold">
            Tecnologias utilizadas
          </h2>
          <div className="grid grid-cols-2 gap-1 xl:flex">
            <ShimmerButton className="shadow-2xl">
              <div className="flex gap-2">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Node
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  width={20}
                  height={20}
                  alt="Node icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Typerscript
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  width={20}
                  height={20}
                  alt="ts icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Postgres
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Express
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                  className="bg-white rounded-full p-0.4"
                />
              </div>
            </ShimmerButton>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-white w-[50%]">
              <Link
                href="https://github.com/JudsonCiribelli/LanchApp"
                target="_blank"
              >
                Repositório
              </Link>
            </Button>
            <Button asChild className="bg-white w-[50%]">
              <Link href="/">Projeto</Link>
            </Button>
          </div>
        </div>

        {/* BarberPro */}
        <div className="flex flex-col p-3 space-y-4 border border-solid border-white rounded-sm m-1">
          <h1 className="text-blue-500 text-2xl font-semibold">BarberPro</h1>
          <p className="text-white">
            Plataforma completa de agendamento online para barbearias. O sistema
            conecta clientes a estabelecimentos, permitindo a personalização de
            serviços (cabelo, barba), gestão total da agenda (marcação e
            cancelamento) e um sistema de avaliação pós-serviço para garantir a
            qualidade do atendimento.
          </p>
          <Image
            src="/Barber-Pro/HomePage.png"
            alt="Barber pro home page"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <Image
            src="/Barber-Pro/agendamentos.png"
            alt="Agendamentos"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          <Image
            src="/Barber-Pro/avaliacao.png"
            alt="Avaliação"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />

          <Image
            src="/Barber-Pro/login&logout.png"
            alt="login page e logout page"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />

          <h2 className="text-white text-sm font-semibold">
            Tecnologias utilizadas
          </h2>
          <div className="grid grid-cols-3 gap-1 xl:flex">
            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Typerscript
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  width={20}
                  height={20}
                  alt="ts icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Postgres
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                />
              </div>
            </ShimmerButton>

            <ShimmerButton className="shadow-2xl">
              <div className="flex items-center justify-center gap-1 ml-0">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  NextJs
                </span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  width={20}
                  height={20}
                  alt="Postgres icon"
                  className="bg-white rounded-full p-0.4"
                />
              </div>
            </ShimmerButton>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-white w-[50%]">
              <Link
                href="https://github.com/JudsonCiribelli/fsw-barber"
                target="_blank"
              >
                Repositório
              </Link>
            </Button>
            <Button asChild className="bg-white w-[50%]">
              <Link href="/">Projeto</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden my-8 xl:block">
        <div className=" flex items-center justify-center">
          <ProjectsComponents />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
