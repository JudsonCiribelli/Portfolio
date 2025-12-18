import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const InventoryDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">
        Inventory Manager
      </h1>
      <p className="text-white text-sm">
        Este projeto foi desenvolvido para facilitar o controle de produtos e
        acompanhar o desempenho das vendas de forma prática e visual. O sistema
        permite adicionar, editar e excluir produtos com informações como nome,
        valor e quantidade em estoque. Além disso, há uma seção de vendas, onde
        é possível registrar novas vendas com base nos produtos cadastrados,
        editar ou remover registros quando necessário. A aplicação também conta
        com uma dashboard interativa, que apresenta gráficos dinâmicos com dados
        em tempo real exibindo o lucro total diário e mensal, além de
        informações detalhadas sobre o valor e a data de cada venda. O foco do
        projeto é oferecer uma interface intuitiva e organizada, unindo gestão
        de estoque eficiente e acompanhamento visual dos resultados financeiros,
        de forma simples e acessível.
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
            className="text-white"
            target="_blank"
            href="https://github.com/JudsonCiribelli/Inventory-Manager"
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
            className="text-white"
            target="_blank"
            href="https://github.com/JudsonCiribelli/Inventory-Manager"
          >
            Veja o projeto em tempo real
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InventoryDescription;
