import { ShinyButton } from "@/app/magicui/shiny-button";
import Link from "next/link";

const InitalApresentation = () => {
  return (
    <div className="flex flex-col max-w-[400px] gap-4 xl:max-w-[800px]">
      <h1 className="text-white text-4xl font-normal">Sobre mim</h1>
      <p className="text-white text-sm xl:text-2xl">
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
          <ShinyButton className="text-white mt-2 flex">LinkedIn</ShinyButton>
        </Link>

        <Link href="https://github.com/JudsonCiribelli" target="_blank">
          <ShinyButton className="text-white mt-2 flex">GitHub</ShinyButton>
        </Link>
        <Link href="https://github.com/JudsonCiribelli" target="_blank">
          <ShinyButton className="text-white mt-2">Download CV</ShinyButton>
        </Link>
      </div>
    </div>
  );
};

export default InitalApresentation;
