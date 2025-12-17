import Link from "next/link";
import LinkComponent from "../linksComponent/linkComponent";

const HeaderComponent = () => {
  return (
    <header className="w-full h-20 flex items-center justify-around  bg-black border-b border-gray-700">
      <Link
        href="/"
        className="p-2 text-lg border border-white text-white rounded-lg"
      >
        <p>JC</p>
      </Link>
      <div className="flex items-center gap-4 list-none xl:gap-8">
        <LinkComponent href="/" name="Sobre" />
        <LinkComponent href="/projects" name="Projetos" />
        <LinkComponent href="/" name="Contato" />
      </div>
    </header>
  );
};

export default HeaderComponent;
