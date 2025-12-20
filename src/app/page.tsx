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
    <main className="bg-black w-full flex flex-col items-center justify-center space-y-5">
      <Particles
        className="absolute inset-0 z-0 w-full"
        quantity={30}
        staticity={100}
        size={1}
        ease={50}
        color={color}
      />
      {/* Texto */}
      <section className="flex h-[750px] items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
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
      <section className="w-full my-8 p-2 flex items-center justify-center h-[850px]">
        <div className="flex flex-col relative w-[400px] items-center justify-evenly gap-4 rounded-lg p-10 [box-shadow:-4px_-43px_49px_-5px_rgba(148,96,10,0.24)]  xl:flex-row mb-10 xl:w-[1400px]">
          <InitalApresentation />
          <ImageComponent />
          <BorderBeam duration={12} size={80} className="via-white" />
        </div>
      </section>

      {/* Tecnologias */}
      <section className="w-full h-[800px] mt-10 items-center p-3 xl:p-0 xl:h-[560px]">
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
      <section className="flex flex-col items-center justify-center  space-y-2 xl:w-[800px] h-[850px]">
        <h1 className="text-2xl text-white font-semibold xl:text-6xl mb-4 text-center">
          Projeto destaque
        </h1>

        <div className="flex flex-col w-[400px] items-center justify-center p-3 space-y-4 border border-solid border-white rounded-sm xl:w-[1200px]">
          <h1 className="text-blue-500 text-2xl font-semibold">McProcessSim</h1>
          <div className="xl:w-[50%]">
            <p className="text-white">
              Simulação completa de um ecossistema de autoatendimento para
              fast-food. A aplicação gerencia desde a autenticação do usuário e
              escolha do método de consumo (Delivery/Mesa) até o checkout
              financeiro seguro integrado via Stripe, persistindo todo o
              histórico de pedidos.
            </p>
          </div>
          <div className="flex flex-col xl:flex xl:flex-row items-center justify-evenly gap-6">
            <Image
              src="/McProcessim/TelaInicial.png"
              alt="api-image"
              width={450}
              height={650}
              quality={100}
              className="mb-2 object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[450px]"
            />
            <Image
              src="/McProcessim/TelaInicial.png"
              alt="tela inicial"
              width={650}
              height={650}
              quality={100}
              className="mb-2 object-cover rounded-xs w-full max-w-[400px] h-auto xl:max-w-[450px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-1 xl:grid-cols-4 xl:gap-4">
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
          <div className="flex gap-2 w-full items-center justify-center">
            <Button asChild className="bg-white w-[50%] xl:w-[20%]">
              <Link
                href="https://github.com/JudsonCiribelli/McProcessSim"
                target="_blank"
              >
                Repositório
              </Link>
            </Button>
            <Button asChild className="bg-white w-[50%] xl:w-[20%]">
              <Link href="/">Projeto</Link>
            </Button>
          </div>
          <Button
            className="w-full mt-0 mb-0 p-4 bg-blue-500  text-white xl:w-full xl:mt-4 xl:p-6"
            asChild
            variant="secondary"
          >
            <Link href="/projects">Veja mais</Link>
          </Button>
        </div>
      </section>

      {/* Educação */}
      <section className="w-full h-[900px] mt-10 p-3 bg-white mb-5">
        <h1 className="text-black font-semibold text-2xl text-center mb-2 xl:text-6xl xl:my-4">
          Educação & Certificações
        </h1>

        <div className="flex flex-col items-center justify-center space-y-5 ">
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
            <div className="flex flex-col my-2 w-[95%] border-none">
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
    </main>
  );
};
export default Home;
