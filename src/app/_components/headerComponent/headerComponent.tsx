import Link from "next/link";
import LinkComponent from "../linksComponent/linkComponent";

const HeaderComponent = () => {
  return (
    <header className="w-full h-[90px] flex items-center justify-around p-2 fixed bg-black border-b border-gray-700">
      <Link href="/" className="p-4 border border-white text-white rounded-lg">
        <h1>Judson Ciribelli</h1>
      </Link>
      <div className="flex items-center gap-8 list-none">
        <LinkComponent href="/" name="Sobre" />
        <LinkComponent href="/" name="Projetos" />
        <LinkComponent href="/" name="Contato" />
      </div>
    </header>
  );
};

export default HeaderComponent;
