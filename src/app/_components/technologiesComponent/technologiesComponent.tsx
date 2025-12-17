import { ShimmerButton } from "@/app/magicui/shimmer-button";
import Image from "next/image";

const TechnologiesComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 p-2">
      <ShimmerButton className="shadow-2xl">
        <div className="flex items-center justify-center gap-1 ml-0">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
        <div className="flex items-center justify-center gap-1 ml-0">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Next
          </span>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            width={20}
            height={20}
            alt="next icon"
            className="bg-white rounded-full p-0.4"
          />
        </div>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <div className="flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
        <div className="flex items-center justify-center gap-1 ml-0">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
