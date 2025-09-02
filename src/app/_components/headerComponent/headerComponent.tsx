import Link from "next/link";
import LinkComponent from "../linkComponent/linkComponent";

const HeaderComponent = () => {
  return (
    <header className="w-full h-[90px] fixed flex items-center justify-around p-2 bg-transparent border-b">
      <Link
        href="/"
        className="p-4 border border-white text-white rounded-lg cur"
      >
        <h1>Judson Ciribelli</h1>
      </Link>
      <div className="flex items-center gap-8 list-none">
        <LinkComponent href="/" name="Sobre" />
        <LinkComponent href="/" name="Projetos" />
        <LinkComponent href="/" name="Certificados" />
      </div>
    </header>
  );
};

export default HeaderComponent;
