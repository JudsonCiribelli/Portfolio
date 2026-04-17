import ProjectsComponents from "../_components/projectsComponent/projectsComponent";
import MobileProjectCard from "./_components/mobileProjects/mobileProjects";

const mobileProjectsData = [
  {
    id: "mcprocessim",
    title: "McProcessSim",
    description:
      "Simulação completa de um ecossistema de autoatendimento para fast-food. A aplicação gerencia desde a autenticação do usuário e escolha do método de consumo (Delivery/Mesa) até o checkout financeiro seguro integrado via Stripe, persistindo todo o histórico de pedidos.",
    images: [
      "/McProcessim/Mobile/INITIAL.png",
      "/McProcessim/Mobile/RESTAURANT.png",
      "/McProcessim/Mobile/PRODUCT.png",
      "/McProcessim/Mobile/ORDERS.png",
      "/McProcessim/Mobile/ORDER-SUCCESS.png",
    ],
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        className: "bg-white rounded-full p-0.5",
      },
    ],
    repoUrl: "https://github.com/JudsonCiribelli/McProcessSim",
    liveUrl: "https://mc-process-sim.vercel.app/fsw-donalds",
  },
  {
    id: "lanchApp API",
    title: "Lanch App API",
    description:
      "Backend completo para gestão de pedidos de uma lanchonete/pizzaria, focado em segurança, testes automatizados e arquitetura escalável. Este projeto simula um cenário real de Food Delivery. A aplicação permite que clientes façam pedidos (Delivery, Retirada ou Mesa), acompanhem o status em tempo real e gerenciem seus endereços. Para o estabelecimento, o sistema oferece controle total do cardápio e um fluxo de pedidos otimizado para a cozinha. O foco principal foi aplicar Clean Code, arquitetura em camadas, testes de integração validações rigorosas de segurança",
    images: ["/api-image.png"],
    technologies: [
      {
        name: "Node",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        className: "bg-white rounded-full p-0.5",
      },
    ],
    repoUrl: "https://github.com/JudsonCiribelli/LanchApp",
    liveUrl: "/",
  },
  {
    id: "Barber pro",
    title: "Barber pro",
    description:
      "Plataforma completa de agendamento online para barbearias. O sistema conecta clientes a estabelecimentos, permitindo a personalização de serviços (cabelo, barba), gestão total da agenda (marcação e cancelamento) e um sistema de avaliação pós-serviço para garantir a qualidade do atendimento.",
    images: [
      "/Barber-Pro/Mobile/Barber.png",
      "/Barber-Pro/Mobile/Book.png",
      "/Barber-Pro/Mobile/Book-info.png",
      "/Barber-Pro/Mobile/Dashboard.png",
    ],
    technologies: [
      {
        name: "Typerscript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "NextJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        className: "bg-white rounded-full p-0.5",
      },
      {
        name: "Tailwind",
        icon: "/Icons/Tailwindcss.png",
      },
      {
        name: "Auth",
        icon: "/Icons/auth-js-seeklogo.png",
      },
      {
        name: "Neon DB",
        icon: "/Icons/NeonIcon.png",
      },
    ],
    repoUrl: "https://github.com/JudsonCiribelli/fsw-barber",
    liveUrl:
      "https://fsw-barber-4hnk47lhq-judsons-projects-d573a9e8.vercel.app/",
  },
  {
    id: "Clothing",
    title: "Clothing - Marketplace",
    description:
      "O Clothing é uma plataforma de e-commerce moderna focada em vestuário, construída com foco em performance e experiência do usuário (UX). A aplicação permite que usuários naveguem por coleções, gerenciem um carrinho de compras em tempo real e finalizem pedidos através de um fluxo de checkout seguro e pro",
    images: [
      "/Ecommerce/Mobile/CART.png",
      "/Ecommerce/Mobile/HOME.png",
      "/Ecommerce/Mobile/LOGIN.png",
      "/Ecommerce/Mobile/REGISTER.png",
      "/Ecommerce/Mobile/SHOES.png",
    ],
    technologies: [
      {
        name: "React",
        icon: "/Icons/React.png",
      },
      {
        name: "TypeScript",
        icon: "/Icons/Typescript.png",
      },
      {
        name: "Firebase",
        icon: "/Icons/Firebase.png",
      },
      {
        name: "Styled Component",
        icon: "/Icons/Styledcomponents.png",
        className: "bg-white rounded-full p-0.5",
      },
      {
        name: "Tailwind",
        icon: "/Icons/Tailwindcss.png",
      },
      {
        name: "Stripe",
        icon: "/Icons/Stripe.png",
      },
    ],
    repoUrl: "https://github.com/JudsonCiribelli/Ecommerce",
    liveUrl: "https://ecommerce-one-lake-72.vercel.app/",
  },
  {
    id: "SportCars",
    title: "SportCars - Marketplace",
    description:
      "Marketplace completo de automóveis focado em proporcionar uma experiência fluida entre compradores e vendedores. O projeto simula um ecossistema real de e-commerce, permitindo desde a navegação intuitiva de anúncios até a gestão completa de inventário pelos usuários. Possui Autenticação Segura, Implementação de login via E-mail/Senha e Social Login (Google), garantindo flexibilidade e segurança no acesso. Sistema  completo onde o usuário autenticado pode cadastrar, editar e remover seus próprios veículos, com upload dinâmico de imagens e dados técnicos.  Canal direto de comunicação entre interessados e vendedores para agilizar o processo de venda.",
    images: [
      "/SportCars/Mobile/CAR.png",
      "/SportCars/Mobile/REGISTER-CAR.png",
      "/SportCars/Mobile/DASHBOARD.png",
      "/SportCars/Mobile/SELLS.png",
    ],
    technologies: [
      {
        name: "React",
        icon: "/Icons/React.png",
      },
      {
        name: "Vite",
        icon: "/Icons/Vitejs.png",
      },
      {
        name: "TypeScript",
        icon: "/Icons/Typescript.png",
      },
      {
        name: "Firebase",
        icon: "/Icons/Firebase.png",
      },
      {
        name: "Tailwind",
        icon: "/Icons/Tailwindcss.png",
      },
      {
        name: "Zod",
        icon: "/Icons/Zod.png",
      },
    ],
    repoUrl: "https://github.com/JudsonCiribelli/WebCars",
    liveUrl: "https://web-cars-drab.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="my-4 flex w-full flex-col items-center bg-black xl:mt-20">
      <h1 className="mx-2 py-6 text-center text-3xl font-semibold text-white xl:text-4xl">
        Meus Projetos
      </h1>

      <div className="flex w-full max-w-2xl flex-col gap-10 px-4 xl:hidden">
        {mobileProjectsData.map((project) => (
          <MobileProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="my-10 hidden w-full items-center justify-center xl:flex">
        <ProjectsComponents />
      </div>
    </section>
  );
};

export default ProjectsPage;
