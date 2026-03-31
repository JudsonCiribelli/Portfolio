import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";

const TechnologiesComponent = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 p-2">
      <ShimmerButton className="shadow-2xl">
        <div className="ml-0 flex items-center justify-center gap-1">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Typerscript
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            width={20}
            height={20}
            alt="ts icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="ml-0 flex items-center justify-center gap-1">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Javascript
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            width={20}
            height={20}
            alt="js icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            React
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            width={20}
            height={20}
            alt="react icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Next
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            width={20}
            height={20}
            alt="next icon"
            className="p-0.4 rounded-full bg-white"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Git
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            width={20}
            height={20}
            alt="git icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            HTML
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            width={20}
            height={20}
            alt="HTML icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            CSS
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            width={20}
            height={20}
            alt="CSS icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Tailwind
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            width={20}
            height={20}
            alt="Tailwind icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Node
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            width={20}
            height={20}
            alt="Node icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="ml-0 flex items-center justify-center gap-1">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Postgres
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            width={20}
            height={20}
            alt="Postgres icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            MySQL
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            width={20}
            height={20}
            alt="MySQL icon"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
            Jest
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
            width={20}
            height={20}
            alt="Jest icon"
          />
        </div>
      </ShimmerButton>
    </div>
  );
};

export default TechnologiesComponent;
