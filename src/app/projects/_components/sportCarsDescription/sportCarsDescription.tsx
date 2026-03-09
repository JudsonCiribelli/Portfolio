import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
const SportCarsDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">
        SportCars - Marketplace
      </h1>
      <p className="text-white text-sm">
        Marketplace completo de automóveis focado em proporcionar uma
        experiência fluida entre compradores e vendedores. O projeto simula um
        ecossistema real de e-commerce, permitindo desde a navegação intuitiva
        de anúncios até a gestão completa de inventário pelos usuários. Possui
        Autenticação Segura, Implementação de login via E-mail/Senha e Social
        Login (Google), garantindo flexibilidade e segurança no acesso. Sistema
        completo onde o usuário autenticado pode cadastrar, editar e remover
        seus próprios veículos, com upload dinâmico de imagens e dados técnicos.
        Canal direto de comunicação entre interessados e vendedores para
        agilizar o processo de venda.
      </p>
      <div className="space-y-2">
        <h2 className="text-blue-500 text-lg font-semibold">
          Tecnologias utilizadas
        </h2>

        <div className="flex gap-1">
          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/React.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Vitejs.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Typescript.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Firebase.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Tailwindcss.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Zod.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button asChild className="bg-blue-600 text-lg hover:bg-blue-600">
          <Link
            className="text-white"
            target="_blank"
            href="https://github.com/JudsonCiribelli/WebCars"
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

export default SportCarsDescription;
