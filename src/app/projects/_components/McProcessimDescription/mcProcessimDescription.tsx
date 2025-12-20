import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";

const McProcessimDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">McProcessim</h1>
      <p className="text-white text-sm">
        Este projeto foi desenvolvido para simular a experiência completa de
        autoatendimento, reproduzindo a jornada real de compra em grandes
        franquias de fast-food. O sistema permite que o usuário realize login,
        personalize seu método de consumo — escolhendo entre retirada, delivery
        ou mesa — e monte seu pedido de forma dinâmica. Além disso, a aplicação
        se destaca pela integração segura com pagamentos via Stripe, processando
        transações reais e validando o checkout financeiro instantaneamente.
        Todos os pedidos realizados ficam salvos em um histórico detalhado,
        permitindo consulta posterior. O foco do projeto é demonstrar um fluxo
        de e-commerce de ponta a ponta, unindo uma navegação intuitiva com a
        complexidade e segurança necessária para transações financeiras.
      </p>
      <div className="space-y-2">
        <h2 className="text-blue-500 text-lg font-semibold">
          Tecnologias utilizadas
        </h2>
        <div className="flex gap-1">
          <ShimmerButton className="shadow-2xl">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width={20}
              height={20}
              alt="Node icon"
            />
          </ShimmerButton>
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
          <ShimmerButton className="shadow-2xl">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              width={20}
              height={20}
              alt="Node icon"
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

export default McProcessimDescription;
