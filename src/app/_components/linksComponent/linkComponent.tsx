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
      <li className="rounded-lg border border-white p-2 text-sm text-white">
        {name}
      </li>
    </Link>
  );
};

export default LinkComponent;
