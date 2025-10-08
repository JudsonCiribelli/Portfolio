import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const QuickBiteDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">Quick Bite</h1>
      <p className="text-white text-sm">
        Este projeto é uma reprodução funcional do iFood, criada com o objetivo
        de praticar e demonstrar o desenvolvimento de uma aplicação completa de
        delivery. O sistema permite o cadastro de restaurantes e produtos, login
        de usuários, adição de itens ao carrinho, finalização de pedidos e
        marcação de restaurantes favoritos. Entre as principais funções estão:
        Autenticação e criação de contas de usuário. Exibição dos restaurantes
        disponíveis e seus respectivos cardápios. Adição e remoção de produtos
        no carrinho com cálculo automático do total. Confirmação de pedidos e
        acompanhamento básico do status. Possibilidade de favoritar restaurantes
        para acesso rápido. O projeto foi pensado para unir boa estrutura de
        código, organização e experiência do usuário, buscando oferecer uma
        navegação fluida e próxima do funcionamento real de um aplicativo de
        delivery.
      </p>
      <div className="space-y-2">
        <h2 className="text-blue-500 text-lg font-semibold">
          Tecnologias utilizadas
        </h2>
        <div className="flex gap-1">
          <ShimmerButton className="shadow-2xl">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              width={20}
              height={20}
              alt="ts icon"
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              width={20}
              height={20}
              alt="next icon"
              className="bg-white rounded-full p-0.4"
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              width={20}
              height={20}
              alt="Postgres icon"
            />
          </ShimmerButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button asChild className="bg-blue-600 text-lg hover:bg-blue-600">
          <Link
            target="_blank"
            href="https://github.com/JudsonCiribelli/QuickBiteClone"
          >
            Link do código
          </Link>
        </Button>

        <Button
          disabled
          asChild
          className="bg-blue-600 text-lg hover:bg-blue-600"
        >
          <Link
            target="_blank"
            href="https://github.com/JudsonCiribelli/QuickBiteClone"
          >
            Veja o projeto em tempo real
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickBiteDescription;
