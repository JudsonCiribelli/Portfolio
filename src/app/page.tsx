"use client";

import { Particles } from "@/app/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ImageComponent from "./_components/imageComponent/imageComponent";
import { TextAnimate } from "./magicui/text-animate";
import InitalApresentation from "./_components/initialApresentationComponent/initialApresentation";
import { BorderBeam } from "./magicui/border-beam";
import TechnologiesComponent from "./_components/technologiesComponent/technologiesComponent";
import { IconCloud } from "./magicui/icon-cloud";
import DialogComponent from "./_components/dialogComponent/dialogComponent";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import Link from "next/link";
import { ShimmerButton } from "./magicui/shimmer-button";
import { BookOpen, Code2, GraduationCap } from "lucide-react";
import ContactComponent from "./_components/contactComponent/contactComponent";
// import ProjectsComponents from "./_components/projectsComponent/projectsComponent";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#00000" : "#ffffff");
  }, [resolvedTheme]);

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css",
    "node",
    "next",
    "prisma",
    "postgresql",
    "firebase",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "github",
    "visualstudiocode",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <main className=" bg-black w-full flex flex-col space-y-5">
      <Particles
        className="absolute inset-0 z-0 w-full"
        quantity={30}
        staticity={100}
        size={1}
        ease={50}
        color={color}
      />
      <section className="flex h-[750px] w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Nome */}
          <h1 className="text-white text-2xl font-normal xl:text-7xl">
            Judson Ciribelli
          </h1>
          <TextAnimate
            animation="slideUp"
            as="h1"
            by="word"
            duration={1}
            className="text-white text-2xl xl:text-7xl"
          >
            {`i'm a software engineer`}
          </TextAnimate>
        </div>
      </section>

      {/* ABOUT */}
      <section className="my-12 w-full p-2 flex items-center justify-center h-[700px]">
        <div className="flex flex-col relative  w-[1800px] items-center justify-evenly gap-4 rounded-lg p-10 [box-shadow:-4px_-43px_49px_-5px_rgba(148,96,10,0.24)]  xl:flex-row mb-10">
          <InitalApresentation />
          <ImageComponent />
          <BorderBeam duration={12} size={80} className="via-white" />
        </div>
      </section>

      <section className="w-full h-[600px]items-center my-10 p-3 xl:p-0">
        <h1 className="text-white text-2xl text-center mb-2 xl:text-7xl xl:mb-4">
          Tecnologias
        </h1>
        <div className="flex flex-col items-center justify-center gap-1 rounded-sm bg-white xl:flex-row xl:rounded-none">
          <div className="space-y-2">
            <TechnologiesComponent />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <IconCloud images={images} />
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="h-[1000px] items-center mb-4 flex flex-col space-y-2 m-2 xl:h-[550px]">
        <h1 className="text-2xl text-white font-semibold xl:text-7xl mb-4">
          Projetos
        </h1>

        <div className="w-full flex flex-col items-center justify-center gap-3 xl:flex-row ">
          {/* Image project */}
          <Image
            src="/api-image.png"
            alt="api-image"
            width={650}
            height={650}
            quality={100}
            className="object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[650px]"
          />
          {/* About project */}
          <div className="flex flex-col items-center justify-center space-y-4 h-auto p-7 w-full xl:w-[50%] gap-2 xl:items-start xl:border border-solid rounded-xs border-white">
            <h1 className="text-blue-500 text-2xl font-semibold">LanchApp</h1>

            <p className="text-white">
              Backend completo para gestão de pedidos de uma
              lanchonete/pizzaria, focado em segurança, testes automatizados e
              arquitetura escalável. Este projeto simula um cenário real de Food
              Delivery. A aplicação permite que clientes façam pedidos
              (Delivery, Retirada ou Mesa), acompanhem o status em tempo real e
              gerenciem seus endereços. Para o estabelecimento, o sistema
              oferece controle total do cardápio e um fluxo de pedidos otimizado
              para a cozinha. O foco principal foi aplicar Clean Code,
              arquitetura em camadas, testes de integração e validações
              rigorosas de segurança.
            </p>

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
            <Button
              asChild
              className="text-white w-full p-2 bg-blue-500"
              variant="secondary"
            >
              <Link
                href="https://github.com/JudsonCiribelli/LanchApp"
                target="_blank"
              >
                Codigo
              </Link>
            </Button>
          </div>
        </div>
        <Button
          className="w-[360px] mt-0 mb-0 p-4 bg-blue-500  text-white xl:w-[85%] xl:mt-4 xl:p-6"
          asChild
          variant="secondary"
        >
          <Link href="/projects">Veja mais</Link>
        </Button>
      </section>

      {/* Educação */}
      <section className="w-full h-[900px] mt-10 p-3 bg-white">
        <h1 className="text-black font-semibold text-2xl text-center mb-2 xl:text-7xl xl:mb-4">
          Educação & Certificações
        </h1>

        <div className="flex flex-col items-center w-full justify-center space-y-5 ">
          {/* Faculdade */}
          <div className="flex flex-col  w-[95%] xl: border border-black border-solid p-2 rounded-lg">
            <h1 className="text-xl font-semibold">
              <GraduationCap className="w-6 h-6" />
              Formação Acadêmica
            </h1>

            <h2 className="text-lg">
              Interdisciplinar em Ciências e Tecnologia
            </h2>
            <h4 className="text-sm">UFMA - Concluído em Agosto de 2025</h4>

            <div className="mt-1">
              <DialogComponent />
            </div>
          </div>

          {/* Cursos */}

          <div className="flex flex-col w-[95%] xl: border border-black border-solid p-2 rounded-lg">
            <h1 className="text-xl font-semibold">
              <Code2 className="w-6 h-6" />
              Especializações
            </h1>

            <h2 className="text-lg">Fullstack Club</h2>
            <h4 className="text-sm font-semibold">Instrutor: Felipe Rocha</h4>
            <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/20">
              Em andamento
            </span>
            <p className="text-gray-500 text-xs mt-2">
              Foco avançado em React, Next.js, Tailwind e boas práticas de clean
              code.
            </p>
            <div className="flex flex-col my-2 w-[95%] border-none xl:border border-black xl:border-solid rounded-lg">
              <h2 className="text-lg">Fábrica de Aplicativos</h2>
              <h4 className="text-sm font-semibold">
                Sujeito Programador - Matheus Fraga
              </h4>
              <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/20">
                Em andamento
              </span>
              <p className="text-gray-500 text-xs mt-2">
                Desenvolvimento Mobile com React Native e integrações nativas.
              </p>
            </div>
          </div>

          {/* Cursos complementares */}
          <div className="flex flex-col w-[95%] gap-4 xl: border border-black border-solid p-2 rounded-lg">
            <h1 className="text-xl font-semibold">
              <BookOpen className="w-6 h-6" />
              Cursos Complementares
            </h1>

            <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex flex-col gap-2">
              <span className="text-yellow-500 font-bold">Java</span>
              <span className="text-xs text-gray-900">Udemy</span>
            </div>
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex flex-col gap-2">
              <span className="text-blue-400 font-bold">SQL Avançado</span>
              <span className="text-xs text-gray-900">Udemy</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-5 h-[480px] w-full xl:h-[400px] ">
        <h1 className="text-white text-center text-2xl xl:text-7xl">Contato</h1>
        <div>
          <ContactComponent />
        </div>
      </footer>
    </main>
  );
};
export default Home;
