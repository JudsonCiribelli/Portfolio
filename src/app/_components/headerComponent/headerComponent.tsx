"use client";

import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LinkComponent from "../linksComponent/linkComponent";

const navLinks = [
  { href: "#about", name: "Sobre" },
  { href: "#technologies", name: "Tecnologias" },
  { href: "#projects", name: "Projetos" },
  { href: "#education", name: "Educação" },
];

const HeaderComponent = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className="left-0 top-0 z-50 flex w-[430px] items-center justify-center border-b border-gray-700 bg-black py-4 lg:w-full xl:fixed xl:w-full">
      {isHomePage ? (
        <nav className="m-1 w-full max-w-3xl">
          <div className="grid list-none grid-cols-4 gap-1 xl:flex xl:items-center xl:justify-between xl:gap-8">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className={`flex justify-center ${
                  index === 4 ? "col-span-2" : "col-span-1"
                }`}
              >
                <div className="w-full max-w-[160px]">
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    className="w-full text-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </nav>
      ) : (
        <div className="flex w-full max-w-6xl items-center justify-start px-4">
          <Link
            href="/"
            className="group flex items-center gap-2 text-white transition-colors hover:text-blue-500"
          >
            <div className="rounded-full bg-slate-800 p-2 transition-colors group-hover:bg-slate-700">
              <ArrowBigLeft className="h-5 w-5" />
            </div>
            <span className="text-lg font-medium">Voltar ao Início</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
