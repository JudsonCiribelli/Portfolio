import { BackgroundParticles } from "./_components/backgroundParticles/backgroundParticles";
import EducationSection from "./_components/educationSection/educationSection";
import FeaturedProjectSection from "./_components/featuredProjectSection/featuredProjectSection";
import ImageComponent from "./_components/imageComponent/imageComponent";
import InitalApresentation from "./_components/initialPresentationComponent/initialPresentation";
import TechnologiesComponent from "./_components/technologiesComponent/technologiesComponent";
import { IconCloud } from "./magicui/icon-cloud";
import { TextAnimate } from "./magicui/text-animate";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "node",
  "next",
  "prisma",
  "postgresql",
  "firebase",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

const Home = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center space-y-5 overflow-x-hidden p-4">
      <BackgroundParticles />

      {/* Texto */}
      <section
        className="my-5 flex h-[800px] flex-col items-center justify-center gap-2 text-center"
        id="home"
      >
        {/* Nome */}
        <h1 className="text-3xl font-normal text-white xl:text-7xl">
          Judson Ciribelli
        </h1>
        <TextAnimate
          animation="slideUp"
          as="h2"
          by="word"
          duration={1}
          className="max-w-2xl text-lg font-light text-gray-300 xl:text-2xl"
        >
          {`Desenvolvedor Full-stack. Criando experiências digitais modernas que resolvem problemas reais de forma simples e escalável.`}
        </TextAnimate>
      </section>

      {/* About */}
      <section
        className="flex h-[1250px] w-full items-center justify-center p-4 xl:h-[850px]"
        id="about"
      >
        <div className="relative flex flex-col items-center justify-evenly gap-4 rounded-lg p-7 [box-shadow:-4px_-43px_49px_-5px_rgba(148,96,10,0.24)] xl:w-[1400px] xl:flex-row">
          <InitalApresentation />
          <ImageComponent />
        </div>
      </section>

      {/* Tecnologias */}
      <section
        className="h-[800px] w-full items-center p-3 xl:h-[560px]"
        id="technologies"
      >
        <h2 className="mb-2 text-center text-2xl text-white xl:mb-4 xl:text-7xl">
          Tecnologias
        </h2>
        <div className="flex flex-col items-center justify-center gap-1 rounded-sm bg-white xl:flex-row xl:rounded-none">
          <div className="space-y-2">
            <TechnologiesComponent />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <IconCloud images={images} />
          </div>
        </div>
      </section>

      {/* Projetos */}
      <FeaturedProjectSection />

      {/* Educação */}
      <EducationSection />
    </main>
  );
};
export default Home;
