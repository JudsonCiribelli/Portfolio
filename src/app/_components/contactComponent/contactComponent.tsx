"use client";

import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState } from "react";

const ContactComponent = () => {
  const [copied, setCopied] = useState(false);

  const email = "judson.ciribelli17@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col justify-center space-y-2 p-4 xl:items-center">
      <h2 className="text-white">Vamos trabalhar juntos ? </h2>
      <p className="mx-auto max-w-md text-gray-400">
        Estou sempre aberto a novas oportunidades e projetos interessantes.
        Sinta-se à vontade para entrar em contato!
      </p>

      <div className="flex w-full max-w-lg flex-col items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-2 transition-all duration-300 hover:border-blue-500/50 sm:flex-row">
        <div className="flex w-full flex-1 items-center gap-3 px-4 py-2 sm:w-auto">
          <Mail className="h-5 w-5 text-blue-500" />
          <span className="truncate font-mono text-sm text-gray-200 sm:text-base">
            {email}
          </span>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          {/* Botão de Copiar */}
          <button
            onClick={handleCopyEmail}
            className="flex flex-1 items-center justify-center gap-2 rounded bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 sm:flex-none"
            title="Copiar e-mail"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-400" />
                <span className="sm:hidden">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="sm:hidden">Copiar</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${email}`}
            className="flex flex-1 items-center justify-center rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 sm:flex-none"
            title="Enviar e-mail agora"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="my-8 h-px w-full bg-slate-800/50"></div>

      {/* Redes Sociais e Copyright */}
      <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row xl:items-center xl:justify-center">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Judson Ciribelli. Feito com Next.js &
          Tailwind.
        </p>

        {/* Links Sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/SEU_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-400 transition-all hover:bg-slate-800 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/SEU_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-400 transition-all hover:bg-slate-800 hover:text-blue-400"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
