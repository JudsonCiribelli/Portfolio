import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Link from "next/link";
import Image from "next/image";

const EcommerceDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">
        Ecommerce - Marketplace
      </h1>
      <p className="text-white text-sm">
        O Clothing é uma plataforma de e-commerce moderna focada em vestuário,
        construída com foco em performance e experiência do usuário (UX). A
        aplicação permite que usuários naveguem por coleções, gerenciem um
        carrinho de compras em tempo real e finalizem pedidos através de um
        fluxo de checkout seguro e profissional.
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
              src="/Icons/Styledcomponents.png"
              alt="tec-icons"
              width={20}
              height={20}
              className="bg-white rounded-lg"
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Stripe.png"
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
            href="https://github.com/JudsonCiribelli/Ecommerce"
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
            href="https://ecommerce-one-lake-72.vercel.app/"
          >
            Veja o projeto em tempo real
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EcommerceDescription;
