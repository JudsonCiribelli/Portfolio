import Link from "next/link";

interface LinkComponentProps {
  href: string;
  name: string;
}

const LinkComponent = ({ href, name }: LinkComponentProps) => {
  return (
    <Link href={href}>
      <li className="text-lg  border border-white rounded-lg p-2 text-white">
        {name}
      </li>
    </Link>
  );
};

export default LinkComponent;
