"use client";

import Link from "next/link";
import LinkComponent from "../linksComponent/linkComponent";
import { ArrowBigLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className="w-full py-4 fixed top-0 left-0 z-50 bg-black border-b border-gray-700 xl:flex items-center justify-center">
      {isHomePage ? (
        <div className="grid grid-cols-6 gap-4 list-none xl:gap-8 w-full max-w-2xl px-4 xl:flex flex-row  items-center justify-between">
          <div className="col-span-2 flex justify-center">
            <LinkComponent href="#about" name="Sobre" />
          </div>

          <div className="col-span-2 flex justify-center">
            <LinkComponent href="#technologies" name="Tecnologias" />
          </div>

          <div className="col-span-3 flex justify-center">
            <LinkComponent href="#projects" name="Projetos" />
          </div>

          <div className="col-span-3 flex justify-center">
            <LinkComponent href="#education" name="Educação" />
          </div>

          <div className="col-span-3 flex justify-center">
            <LinkComponent href="#contact" name="Contato" />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl px-4 flex items-center justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors group"
          >
            <div className="p-2 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
              <ArrowBigLeft className="w-5 h-5" />
            </div>
            <span className="font-medium text-lg">Voltar ao Início</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
