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
    <header className="left-0 top-0 z-50 flex w-full items-center justify-center border-b border-gray-700 bg-black py-4 xl:fixed">
      {isHomePage ? (
        <nav className="m-1 w-full max-w-3xl px-4">
          <div className="flex list-none flex-wrap items-center justify-center gap-3 xl:justify-between xl:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="flex w-[45%] justify-center sm:w-auto" // w-[45%] faz criar um grid de 2x2 bem bonito no mobile
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
