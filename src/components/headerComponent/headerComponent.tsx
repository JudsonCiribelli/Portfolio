import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="w-full h-[90px] flex items-center justify-around p-2 bg-slate-300">
      <Link href="/" className="p-4 border border-slate-700 rounded-lg cur">
        <h1>kkkkkkkkkkk</h1>
      </Link>
      <div className="flex items-center gap-4 list-none">
        <li className="text-lg  border border-slate-600 rounded-lg p-2">
          Sobre
        </li>
        <li className="text-lg  border border-slate-600 rounded-lg p-2">
          Projetos
        </li>
        <li className="text-lg  border border-slate-600 rounded-lg p-2">
          Contato
        </li>
      </div>
    </header>
  );
};

export default HeaderComponent;
