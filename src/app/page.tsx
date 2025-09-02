"use client";

import { Particles } from "@/app/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeaderComponent from "@/app/_components/headerComponent/headerComponent";
import ImageComponent from "./_components/imageComponent/imageComponent";
import { TextAnimate } from "./magicui/text-animate";
import InitalApresentation from "./_components/initialApresentationComponent/initialApresentation";

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
          ease={50}
          color={color}
        />
        <section className="flex h-[900px] w-full overflow-hidden ">
          <div className="flex items-center justify-center  w-full">
            {/* Nome */}
            <TextAnimate
              animation="slideUp"
              as="h1"
              by="word"
              duration={1}
              className="text-white text-5xl"
            >
              Olá, me chamo Judson Ciribelli sou desenvolvedor Front-end.
            </TextAnimate>
          </div>
        </section>

        {/* ABOUT */}
        <section className="w-full flex items-center justify-evenly h-[900px]">
          <InitalApresentation />
          <ImageComponent />
        </section>
      </main>
    </>
  );
};
export default Home;
