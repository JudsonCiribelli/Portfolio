"use client";

import Link from "next/link";
import LinkComponent from "../linksComponent/linkComponent";
import { ArrowBigLeft } from "lucide-react";
import { usePathname } from "next/navigation";

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
    <header className="w-[430px] py-4 flex top-0 left-0 z-50 bg-black border-b border-gray-700 xl:fixed items-center justify-center  lg:w-full xl:w-full">
      {isHomePage ? (
        <nav className="w-full max-w-3xl m-1">
          <div className="grid grid-cols-4 gap-1 xl:flex xl:items-center xl:justify-between xl:gap-8 list-none">
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
