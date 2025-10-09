"use client";

import { Particles } from "@/app/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeaderComponent from "@/app/_components/headerComponent/headerComponent";
import ImageComponent from "./_components/imageComponent/imageComponent";
import { TextAnimate } from "./magicui/text-animate";
import InitalApresentation from "./_components/initialApresentationComponent/initialApresentation";
import { BorderBeam } from "./magicui/border-beam";
import TechnologiesComponent from "./_components/technologiesComponent/technologiesComponent";
import { IconCloud } from "./magicui/icon-cloud";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/ui/carousel";
import InventoryDescription from "./_components/Inventory-Description/inventoryDescription";
import QuickBiteDescription from "./_components/quickBiteDescription/quickBiteDescription";
import InvetoryComponent from "./_components/inventoryComponent/inventoryComponent";
import QuickBiteComponent from "./_components/quickBiteComponent/quickBiteComponent";
import DialogComponent from "./_components/dialogComponent/dialogComponent";

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
    <>
      <HeaderComponent />
      <main className="bg-black">
        <Particles
          className="absolute inset-0 z-0"
          quantity={50}
          staticity={1000}
          size={1}
          ease={50}
          color={color}
        />
        <section className="flex h-[850px] w-full overflow-hidden  ">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Nome */}
            <h1 className="text-white text-7xl font-normal">
              Judson Ciribelli
            </h1>
            <TextAnimate
              animation="slideUp"
              as="h1"
              by="word"
              duration={1}
              className="text-white text-6xl"
            >
              {`i'm a software engineer`}
            </TextAnimate>
            {/* <p>Quem é voce? </p>
            <p>O que voce faz</p>
            <p>O que voce ja fez</p> */}
          </div>
        </section>

        {/* ABOUT */}
        <section className=" y-8 w-full flex items-center justify-center h-[800px]">
          <div className="flex relative w-[1800px] items-center justify-evenly rounded-lg p-10 [box-shadow:-4px_-43px_49px_-5px_rgba(148,96,10,0.24)]">
            <InitalApresentation />
            <ImageComponent />
            <BorderBeam duration={12} size={80} className="via-white" />
          </div>
        </section>

        <section className="w-full h-[600px] mt-10 p-3">
          <h1 className="text-white text-7xl text-center">Tecnologias</h1>
          <div className="flex items-center justify-evenly mt-10 bg-white">
            <div>
              <TechnologiesComponent />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </section>

        <section className="w-[100%] h-[900px] items-center justify-center flex flex-col p-3 space-y-10">
          <h1 className="text-white text-7xl text-center ">Projetos</h1>
          <Carousel className="w-full max-w-[1400px] max-h-[900px]  p-4 rounded-lg">
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <>
                  <CarouselItem>
                    <div className="flex items-center justify-evenly">
                      <QuickBiteComponent />

                      <div className="w-[40%] h-[600px] ">
                        <QuickBiteDescription />
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem key={index}>
                    <div className="flex items-center justify-evenly">
                      <InvetoryComponent />

                      <div className="w-[40%] h-[600px] ">
                        <InventoryDescription />
                      </div>
                    </div>
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <BorderBeam duration={12} size={80} className="via-white" />
          </Carousel>
        </section>

        {/* Educação */}
        <section className="w-full h-[600px] mt-10 p-3 bg-white">
          <h1 className="font-semibold text-7xl text-center mt-2">Educação</h1>

          <div className="flex items-center justify-evenly space-y-5">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Formação Acadêmica</h1>
              <h2 className="text-lg">
                Interdisciplinar em Ciências e Tecnologia
              </h2>
              <h4 className="text-sm">UFMA - Concluído em Agosto de 2025</h4>

              <div className=" mt-2">
                <DialogComponent />
              </div>
            </div>

            <div></div>
          </div>
        </section>

        <footer className="mt-8 h-[600px] w-full ">
          <h1 className="text-white">Contato</h1>
        </footer>
      </main>
    </>
  );
};
export default Home;
