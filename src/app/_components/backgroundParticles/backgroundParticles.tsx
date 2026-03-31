"use client";
import { Particles } from "@/app/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const BackgroundParticles = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#000000" : "#ffffff");
  }, [resolvedTheme]);

  return (
    <Particles
      className="absolute inset-0 z-0 w-full"
      quantity={30}
      size={1}
      ease={50}
      staticity={100}
      color={color}
    />
  );
};
