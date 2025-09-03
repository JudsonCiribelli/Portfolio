"use client";

import { Particles } from "@/app/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeaderComponent from "@/app/_components/headerComponent/headerComponent";
import ImageComponent from "./_components/imageComponent/imageComponent";
import { TextAnimate } from "./magicui/text-animate";
import InitalApresentation from "./_components/initialApresentationComponent/initialApresentation";
// import { BorderBeam } from "./magicui/border-beam";
import TechnologiesComponent from "./_components/technologiesComponent/technologiesComponent";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#00000" : "#ffffff");
  }, [resolvedTheme]);

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
            <h1 className="text-white text-7xl">Judson Ciribelli</h1>
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
            {/* <BorderBeam duration={12} size={80} className="via-white" /> */}
          </div>
        </section>

        <section className="w-full h-[900px] mt-6">
          <h1 className="text-white text-7xl text-center">Tecnologias</h1>
          <div className="flex items-center justify-between w-full mt-10">
            <TechnologiesComponent />
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
