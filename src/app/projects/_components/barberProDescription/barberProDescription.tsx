import { Button } from "@/app/_components/ui/button";
import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";

const BarberProDescription = () => {
  return (
    <div className="p-4 space-y-6 flex flex-col">
      <h1 className="text-blue-500 text-xl mb-2 font-semibold">
        Barber Pro - Sistema de Gestão e Agendamento
      </h1>
      <p className="text-white text-sm">
        Um sistema robusto de agendamento que resolve o atrito entre clientes e
        prestadores de serviço. O projeto foca em fluxos de autenticação seguros
        e uma experiência de usuário fluida para dispositivos móveis e desktop.
        Autenticação Multi-OAuth integração com Google e GitHub para um acesso
        rápido e seguro. Dynamic Booking sistema de reserva com validação de
        horários, impedindo conflitos na agenda do profissional. Self-Service
        autonomia total para o usuário gerenciar suas reservas, incluindo
        cancelamentos.
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

          <ShimmerButton className="shadow-2xl">
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
              src="/Icons/Prisma.png"
              alt="tec-icons"
              width={20}
              height={20}
              className="bg-white rounded-lg"
            />
          </ShimmerButton>

          <ShimmerButton className="shadow-2xl">
            <Image
              src="/Icons/NeonIcon.png"
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

export default BarberProDescription;
