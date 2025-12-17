import Link from "next/link";

interface LinkComponentProps {
  href: string;
  name: string;
  target?: string;
}

const LinkComponent = ({ href, name, target }: LinkComponentProps) => {
  return (
    <Link href={href} target={target}>
      <li className="text-lg border border-white rounded-lg p-2 text-white">
        {name}
      </li>
    </Link>
  );
};

export default LinkComponent;
