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

        <section className="w-[100%] h-[900px] items-center justify-center flex flex-col p-3 space-y-4">
          <h1 className="text-white text-7xl text-center ">Projetos</h1>
          <Carousel className="w-full max-w-[1600px] max-h-[900px] border border-white ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center">
                    <div className="w-[60%] h-[600px] border border-white"></div>
                    <div className="w-[40%] h-[600px] border border-blue-600"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <footer className="mt-8 h-[600px] w-full "></footer>
      </main>
    </>
  );
};
export default Home;
