import ImageComponent from "./_components/imageComponent/imageComponent";
import { TextAnimate } from "./magicui/text-animate";
import InitalApresentation from "./_components/initialPresentationComponent/initialPresentation";
import TechnologiesComponent from "./_components/technologiesComponent/technologiesComponent";
import { IconCloud } from "./magicui/icon-cloud";
import { BackgroundParticles } from "./_components/backgroundParticles/backgroundParticles";
import EducationSection from "./_components/educationSection/educationSection";
import FeaturedProjectSection from "./_components/featuredProjectSection/featuredProjectSection";

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
    <main className="w-full flex flex-col items-center justify-center space-y-5 p-4">
      <BackgroundParticles />

      {/* Texto */}
      <section
        className="h-[800px] flex flex-col items-center justify-center my-5"
        id="home"
      >
        {/* Nome */}
        <h1 className="text-white text-3xl font-normal xl:text-7xl">
          Judson Ciribelli
        </h1>
        <TextAnimate
          animation="slideUp"
          as="h1"
          by="word"
          duration={1}
          className="text-white text-3xl xl:text-7xl"
        >
          {`i'm a software engineer`}
        </TextAnimate>
      </section>

      {/* About */}
      <section
        className="h-[1250px] w-[400px] flex items-center justify-center p-4 xl:w-full xl:h-[850px]"
        id="about"
      >
        <div className="flex flex-col relative items-center justify-evenly gap-4 rounded-lg p-7 [box-shadow:-4px_-43px_49px_-5px_rgba(148,96,10,0.24)]  xl:flex-row xl:w-[1400px]">
          <InitalApresentation />
          <ImageComponent />
        </div>
      </section>

      {/* Tecnologias */}
      <section
        className="h-[800px] w-[400px]  items-center p-3 xl:h-[560px] xl:w-full "
        id="technologies"
      >
        <h2 className="text-white text-2xl text-center mb-2 xl:text-7xl xl:mb-4">
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
