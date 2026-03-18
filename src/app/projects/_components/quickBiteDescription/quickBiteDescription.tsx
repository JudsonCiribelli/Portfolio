import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QuickBiteDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">
        Quick Bite - Ecossistema de Delivery
      </h1>
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
              src="/Icons/Typescript.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl ">
            <Image
              src="/Icons/Nextjs.png"
              alt="tec-icons"
              width={20}
              height={20}
              className="bg-white rounded-lg"
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/Postgresql.png"
              alt="tec-icons"
              width={20}
              height={20}
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/auth-js-seeklogo.png"
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
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button asChild className="bg-blue-600 text-lg hover:bg-blue-600">
          <Link
            className="text-white"
            target="_blank"
            href="https://github.com/JudsonCiribelli/QuickBiteClone"
          >
            Link do código
          </Link>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-blue-600 text-lg cursor-pointer text-white hover:bg-blue-600">
              Veja o projeto em tempo real
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white text-black">
            <AlertDialogHeader>
              <div className="flex flex-col items-center justify-center space-y-4">
                <TriangleAlert size={60} />
                <AlertDialogTitle>Projeto em Manutenção</AlertDialogTitle>
                <AlertDialogDescription>
                  Este deploy está temporariamente offline para manutenção
                  programada e atualização de banco de dados. O código continua
                  disponível para revisão técnica no meu GitHub. Agradeço a
                  compreensão!
                </AlertDialogDescription>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Fechar</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default QuickBiteDescription;
