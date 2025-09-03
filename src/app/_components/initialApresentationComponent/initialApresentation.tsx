import { ShinyButton } from "@/app/magicui/shiny-button";
import Link from "next/link";

const InitalApresentation = () => {
  return (
    <div className="flex flex-col max-w-[400px] gap-4">
      <h1 className="text-white text-4xl font-normal">Sobre mim</h1>
      <p className="text-white text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia
        possimus earum at quasi hic repellat quam rerum <br /> excepturi
        veritatis necessitatibus temporibus a dicta totam animi nam quod, ea
        tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
        quidem cumque hic harum iste fuga dicta aliquam voluptatem libero.
        Ratione sit est consequuntur rerum repellendus earum esse itaque. Illo,
        magnam.
      </p>
      <div className="flex gap-2">
        <Link
          href="https://www.linkedin.com/in/judson-ciribelli-a23867234/"
          target="_blank"
        >
          <ShinyButton className="text-white mt-2 flex">LinkedIn</ShinyButton>
        </Link>

        <Link href="https://github.com/JudsonCiribelli" target="_blank">
          <ShinyButton className="text-white mt-2 flex">GitHub</ShinyButton>
        </Link>
        <Link href="https://github.com/JudsonCiribelli" target="_blank">
          <ShinyButton className="text-white mt-2">Download CV</ShinyButton>
        </Link>
      </div>
    </div>
  );
};

export default InitalApresentation;
