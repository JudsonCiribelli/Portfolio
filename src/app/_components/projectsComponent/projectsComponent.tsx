import { BorderBeam } from "@/app/magicui/border-beam";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProjectsDescription, {
  TechIcon,
} from "@/app/projects/_components/ProjectDescription/ProjectsDescription";
import ProjectCarousel, {
  CarouselImage,
} from "@/app/projects/_components/ProjectCarousel/ProjectsCarousel";

const ProjectsComponents = () => {
  const QuickBiteTechs: TechIcon[] = [
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    {
      id: "next",
      src: "/Icons/Nextjs.png",
      alt: "Next.js",
      className: "bg-white rounded-lg",
    },
    { id: "pg", src: "/Icons/Postgresql.png", alt: "PostgreSQL" },
    { id: "auth", src: "/Icons/auth-js-seeklogo.png", alt: "Auth.js" },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
  ];

  const QuickBiteImages: CarouselImage[] = [
    { src: "/Quick-Bite/DesktopDesign/Dashboard.png", alt: "Dashboard" },
    { src: "/Quick-Bite/DesktopDesign/Cart.png", alt: "Cart" },
    { src: "/Quick-Bite/DesktopDesign/Product.png", alt: "Product" },
    { src: "/Quick-Bite/DesktopDesign/Order.png", alt: "Order" },
  ];

  const SportCarsTechs: TechIcon[] = [
    { id: "react", src: "/Icons/React.png", alt: "React" },
    { id: "vite", src: "/Icons/Vitejs.png", alt: "Vite" },
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    { id: "firebase", src: "/Icons/Firebase.png", alt: "Firebase" },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
    { id: "zod", src: "/Icons/Zod.png", alt: "Zod" },
  ];

  const SportCarsImages: CarouselImage[] = [
    { src: "/SportCars/Desktop/HOME.png", alt: "Home" },
    { src: "/SportCars/Desktop/CAR.png", alt: "Cars" },
    { src: "/SportCars/Desktop/REGISTER-CAR.png", alt: "Register Form" },
    { src: "/SportCars/Desktop/DASHBOARD.png", alt: "Dashboard" },
    { src: "/SportCars/Desktop/SELLS.png", alt: "Sales" },
  ];

  const InventoryManagerTechs: TechIcon[] = [
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    {
      id: "next",
      src: "/Icons/Nextjs.png",
      alt: "Next.js",
      className: "bg-white rounded-lg",
    },
    { id: "pg", src: "/Icons/Postgresql.png", alt: "PostgreSQL" },
    {
      id: "prisma",
      src: "/Icons/Prisma.png",
      alt: "Prisma",
      className: "bg-white rounded-lg",
    },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
    { id: "zod", src: "/Icons/Zod.png", alt: "Zod" },
  ];

  const InventoryManagerImages: CarouselImage[] = [
    { src: "/Inventory-Manager/Desktop/DASHBOARD.png", alt: "Dashboard" },
    { src: "/Inventory-Manager/Desktop/PRODUCT.png", alt: "Product" },
    { src: "/Inventory-Manager/Desktop/ADD-PRODUCT.png", alt: "New Product" },
    {
      src: "/Inventory-Manager/Desktop/DELETE-PRODUCT.png",
      alt: "Delete Product",
    },
    { src: "/Inventory-Manager/Desktop/EDIT-PRODUCT.png", alt: "Edit Product" },
    { src: "/Inventory-Manager/Desktop/SALES.png", alt: "Sales" },
    { src: "/Inventory-Manager/Desktop/NEW-SALES.png", alt: "New Sale" },
  ];

  const BarberProTechs: TechIcon[] = [
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    {
      id: "next",
      src: "/Icons/Nextjs.png",
      alt: "Next.js",
      className: "bg-white rounded-lg",
    },
    { id: "pg", src: "/Icons/Postgresql.png", alt: "PostgreSQL" },
    { id: "auth", src: "/Icons/auth-js-seeklogo.png", alt: "Auth.js" },
    {
      id: "prisma",
      src: "/Icons/Prisma.png",
      alt: "Prisma",
      className: "bg-white rounded-lg",
    },
    { id: "neon", src: "/Icons/NeonIcon.png", alt: "Neon DB" },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
  ];

  const BarberProImages: CarouselImage[] = [
    { src: "/Barber-Pro/Desktop/Dashboard.png", alt: "Dashboard" },
    { src: "/Barber-Pro/Desktop/book.png", alt: "Book" },
    { src: "/Barber-Pro/Desktop/Barber.png", alt: "Barber" },
    { src: "/Barber-Pro/Desktop/Login.png", alt: "Login" },
  ];

  const McProcessimTechs: TechIcon[] = [
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    {
      id: "next",
      src: "/Icons/Nextjs.png",
      alt: "Next.js",
      className: "bg-white rounded-lg",
    },
    { id: "pg", src: "/Icons/Postgresql.png", alt: "PostgreSQL" },
    {
      id: "prisma",
      src: "/Icons/Prisma.png",
      alt: "Prisma",
      className: "bg-white rounded-lg",
    },
    { id: "stripe", src: "/Icons/Stripe.png", alt: "Stripe" },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
  ];

  const McProcessimImages: CarouselImage[] = [
    { src: "/McProcessim/Mobile/INITIAL.png", alt: "Home" },
    { src: "/McProcessim/Mobile/RESTAURANT.png", alt: "Restaurant" },
    { src: "/McProcessim/Mobile/PRODUCT.png", alt: "Product" },
    { src: "/McProcessim/Mobile/ORDERS.png", alt: "Orders" },
    { src: "/McProcessim/Mobile/ORDER-SUCCESS.png", alt: "Orders Sucess" },
  ];

  const ClothingTechs: TechIcon[] = [
    { id: "react", src: "/Icons/React.png", alt: "React" },
    { id: "ts", src: "/Icons/Typescript.png", alt: "TypeScript" },
    { id: "firebase", src: "/Icons/Firebase.png", alt: "Firebase" },
    {
      id: "styledComponent",
      src: "/Icons/Styledcomponents.png",
      alt: "Styled Component",
      className: "bg-white rounded-lg",
    },
    { id: "tailwind", src: "/Icons/Tailwindcss.png", alt: "Tailwind CSS" },
    { id: "stripe", src: "/Icons/Stripe.png", alt: "Stripe" },
    { id: "zod", src: "/Icons/Zod.png", alt: "Zod" },
  ];

  const ClothingImages: CarouselImage[] = [
    { src: "/Ecommerce/Desktop/HOME.png", alt: "Home" },
    { src: "/Ecommerce/Desktop/HAT.png", alt: "Hat" },
    { src: "/Ecommerce/Desktop/CART.png", alt: "Cart" },
    { src: "/Ecommerce/Desktop/LOGIN.png", alt: "Login" },
    { src: "/Ecommerce/Desktop/REGISTER.png", alt: "Register" },
  ];

  return (
    <>
      <Carousel className="flex flex-col w-full max-w-[1400px] max-h-[900px] p-4 rounded-lg">
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={QuickBiteImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="Quick Bite - Ecossistema de Delivery"
                  description="Este projeto é uma reprodução funcional do iFood, criada com o objetivo
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
                  delivery."
                  technologies={QuickBiteTechs}
                  githubUrl="https://github.com/JudsonCiribelli/QuickBiteClone"
                  liveUrl=""
                  isLiveDisabled={true}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={SportCarsImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="SportCars - Marketplace"
                  description="Marketplace completo de automóveis focado em proporcionar uma
                  experiência fluida entre compradores e vendedores. O projeto simula um
                  ecossistema real de e-commerce, permitindo desde a navegação intuitiva
                  de anúncios até a gestão completa de inventário pelos usuários. Possui
                  Autenticação Segura, Implementação de login via E-mail/Senha e Social
                  Login (Google), garantindo flexibilidade e segurança no acesso. Sistema
                  completo onde o usuário autenticado pode cadastrar, editar e remover
                  seus próprios veículos, com upload dinâmico de imagens e dados técnicos.
                  Canal direto de comunicação entre interessados e vendedores para
                  agilizar o processo de venda."
                  technologies={SportCarsTechs}
                  githubUrl="https://github.com/JudsonCiribelli/WebCars"
                  liveUrl="https://web-cars-drab.vercel.app/"
                  isLiveDisabled={false}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={InventoryManagerImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="Inventory Manager - Gestão de estoque"
                  description="Este projeto foi desenvolvido para facilitar o controle de produtos e
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
                  de forma simples e acessível."
                  technologies={InventoryManagerTechs}
                  githubUrl="https://github.com/JudsonCiribelli/Inventory-Manager"
                  liveUrl="https://inventory-manager-green-psi.vercel.app/"
                  isLiveDisabled={false}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={BarberProImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="Barber Pro - Sistema de Gestão e Agendamento"
                  description="Um sistema robusto de agendamento que resolve o atrito entre clientes e
                  prestadores de serviço. O projeto foca em fluxos de autenticação seguros
                  e uma experiência de usuário fluida para dispositivos móveis e desktop.
                  Autenticação Multi-OAuth integração com Google e GitHub para um acesso
                  rápido e seguro. Dynamic Booking sistema de reserva com validação de
                  horários, impedindo conflitos na agenda do profissional. Self-Service
                  autonomia total para o usuário gerenciar suas reservas, incluindo
                  cancelamentos."
                  technologies={BarberProTechs}
                  githubUrl="https://github.com/JudsonCiribelli/fsw-barber"
                  liveUrl="https://fsw-barber-4hnk47lhq-judsons-projects-d573a9e8.vercel.app/"
                  isLiveDisabled={true}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={McProcessimImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="McProcessim - Sistema de autoatendimento"
                  description="Este projeto foi desenvolvido para simular a experiência completa de
                  autoatendimento, reproduzindo a jornada real de compra em grandes
                  franquias de fast-food. O sistema permite que o usuário realize login,
                  personalize seu método de consumo, escolhendo entre retirada, delivery
                  ou mesa e montando seu pedido de forma dinâmica. Além disso, a aplicação
                  se destaca pela integração segura com pagamentos via Stripe, processando
                  transações reais e validando o checkout financeiro instantaneamente.
                  Todos os pedidos realizados ficam salvos em um histórico detalhado,
                  permitindo consulta posterior. O foco do projeto é demonstrar um fluxo
                  de e-commerce de ponta a ponta, unindo uma navegação intuitiva com a
                  complexidade e segurança necessária para transações financeiras."
                  technologies={McProcessimTechs}
                  githubUrl="https://github.com/JudsonCiribelli/McProcessSim"
                  liveUrl="https://mc-process-sim.vercel.app/fsw-donalds"
                  isLiveDisabled={true}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <ProjectCarousel images={ClothingImages} />

              <div className="w-[40%] h-[600px] mb-12">
                <ProjectsDescription
                  title="Ecommerce - Marketplace"
                  description="O Clothing é uma plataforma de e-commerce moderna focada em vestuário,
                  construída com foco em performance e experiência do usuário (UX). A
                  aplicação permite que usuários naveguem por coleções, gerenciem um
                  carrinho de compras em tempo real e finalizem pedidos através de um
                  fluxo de checkout seguro e profissional."
                  technologies={ClothingTechs}
                  githubUrl="https://github.com/JudsonCiribelli/Ecommerce"
                  liveUrl="https://ecommerce-one-lake-72.vercel.app/"
                  isLiveDisabled={true}
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <BorderBeam duration={12} size={80} className="via-white" />
      </Carousel>
    </>
  );
};

export default ProjectsComponents;
