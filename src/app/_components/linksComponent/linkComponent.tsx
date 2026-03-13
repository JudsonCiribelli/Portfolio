import Link from "next/link";

interface LinkComponentProps {
  href: string;
  name: string;
  target?: string;
  className: string;
}

const LinkComponent = ({
  href,
  name,
  target,
  className,
}: LinkComponentProps) => {
  return (
    <Link href={href} target={target} className={className}>
      <li className="text-sm border border-white rounded-lg p-2 text-white">
        {name}
      </li>
    </Link>
  );
};

export default LinkComponent;
