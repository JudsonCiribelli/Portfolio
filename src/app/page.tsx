"use client";

import { Particles } from "@/app/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeaderComponent from "@/app/_components/headerComponent/headerComponent";
import { TextAnimate } from "@/app/magicui/text-animate";
import ImageComponent from "@/app/_components/imageComponent/imageComponent";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#00000" : "#ffffff");
  }, [resolvedTheme]);

  return (
    <>
      <HeaderComponent />
      <main className="w-full">
        <section className="flex h-[900px] w-full overflow-hidden bg-black">
          <Particles
            className="absolute inset-0 z-0"
            quantity={30}
            ease={50}
            color={color}
          />
          <div className="flex items-center justify-evenly  w-full">
            {/* Nome */}
            <div>
              <TextAnimate
                animation="fadeIn"
                by="line"
                as="h1"
                duration={0.6}
                className="text-5xl text-white"
              >
                {`Judson Ciribelli\n\nDesenvolvedor Full-Stack\n\n`}
              </TextAnimate>
              <TextAnimate
                animation="blurIn"
                as="p"
                by="character"
                duration={0.6}
                className="text-white text-xs"
              >
                {`Transformando ideias em soluções inovadoras e funcionais.`}
              </TextAnimate>
            </div>
            <ImageComponent />
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
