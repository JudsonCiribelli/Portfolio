"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
}
export default function RevealSection({ children }: RevealProps) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="will-change-opacity w-full will-change-transform"
    >
      {children}
    </div>
  );
}
