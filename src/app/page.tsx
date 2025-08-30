"use client";

import { Particles } from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeaderComponent from "@/components/headerComponent/headerComponent";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <HeaderComponent />
      <div className="flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-background">
        <Particles
          className="absolute inset-0 z-0"
          quantity={1000}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </>
  );
};
export default Home;
