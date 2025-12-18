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
    <div className="flex flex-col p-4 space-y-2 xl:items-center justify-center">
      <h2 className="text-white">Vamos trabalhar juntos ? </h2>
      <p className="text-gray-400 max-w-md mx-auto">
        Estou sempre aberto a novas oportunidades e projetos interessantes.
        Sinta-se à vontade para entrar em contato!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full sm:w-auto">
          <Mail className="text-blue-500 w-5 h-5" />
          <span className="text-gray-200 font-mono text-sm sm:text-base truncate">
            {email}
          </span>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          {/* Botão de Copiar */}
          <button
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded transition-colors text-sm font-medium"
            title="Copiar e-mail"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="sm:hidden">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="sm:hidden">Copiar</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${email}`}
            className="flex-1 sm:flex-none flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            title="Enviar e-mail agora"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-slate-800/50 my-8"></div>

      {/* Redes Sociais e Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 xl:items-center xl:justify-center">
        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Judson Ciribelli. Feito com Next.js &
          Tailwind.
        </p>

        {/* Links Sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/SEU_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/SEU_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:bg-slate-800 p-2 rounded-full transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
