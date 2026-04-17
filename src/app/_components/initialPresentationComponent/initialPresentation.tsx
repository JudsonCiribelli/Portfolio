import Link from "next/link";

import { ShinyButton } from "@/app/magicui/shiny-button";

const InitalPresentation = () => {
  return (
    <div className="flex max-w-[400px] flex-col gap-4 xl:max-w-[800px]">
      <h1 className="text-4xl font-normal text-white">Sobre mim</h1>
      <p className="text-lg font-normal text-white xl:text-lg">
        Mais do que apenas escrever código, sou um profissional movido pela
        resolução de problemas. Graduado em Interdisciplinar em Ciências e
        Tecnologia , trago para a tecnologia a mesma disciplina inegociável que
        aplico na minha vida pessoal: organização, pontualidade e atenção aos
        detalhes. Como Desenvolvedor Fullstack, atuo construindo a experiência
        completa. Tenho facilidade em transitar entre o desenvolvimento de
        interfaces visuais e a arquitetura de regras de negócio complexas no
        servidor. Meu foco é garantir que o sistema não seja apenas bonito por
        fora, mas estruturado, seguro e eficiente por dentro. Minhas
        experiências são fundamentadas na prática intensa. Desenvolvi aplicações
        completas do zero.
      </p>
      <div className="flex gap-2">
        <Link
          href="https://www.linkedin.com/in/judson-ciribelli-a23867234/"
          target="_blank"
        >
          <ShinyButton className="mt-2 flex text-white">LinkedIn</ShinyButton>
        </Link>

        <Link href="https://github.com/JudsonCiribelli" target="_blank">
          <ShinyButton className="mt-2 flex text-white">GitHub</ShinyButton>
        </Link>
        <Link href="./Curriculo[Judson_Ciribelli].pdf" target="_blank">
          <ShinyButton className="mt-2 text-white">Download CV</ShinyButton>
        </Link>
      </div>
    </div>
  );
};

export default InitalPresentation;
