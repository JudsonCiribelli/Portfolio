import { BookOpen, Code2, GraduationCap } from "lucide-react";
import DialogComponent from "../dialogComponent/dialogComponent";

const EducationSection = () => {
  const complementaryCourses = [
    { name: "Java", platform: "Udemy", colorClass: "text-yellow-500" },
    { name: "SQL Avançado", platform: "Udemy", colorClass: "text-blue-400" },
  ];
  return (
    <section
      className="mx-auto mb-5 mt-10 w-full bg-white p-4 shadow-sm"
      id="education"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-black xl:my-8 xl:text-5xl">
        Educação & Certificações
      </h2>

      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Faculdade */}
        <div className="flex w-full flex-col rounded-lg border border-solid border-gray-200 p-5 xl:w-[95%] xl:border-black">
          <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
            <GraduationCap className="h-6 w-6" />
            Formação Acadêmica
          </h3>

          <h4 className="text-lg font-medium text-gray-900">
            Interdisciplinar em Ciências e Tecnologia
          </h4>
          <p className="text-sm text-gray-600">
            UFMA - Concluído em Agosto de 2025
          </p>

          <div className="mt-3">
            <DialogComponent />
          </div>
        </div>

        {/* Especializações */}
        <div className="flex w-full flex-col rounded-lg border border-solid border-gray-200 p-5 xl:w-[95%] xl:border-black">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Code2 className="h-6 w-6" />
            Especializações
          </h3>

          {/* Item: Fullstack Club */}
          <div className="mb-4 border-b border-gray-100 pb-4 last:mb-0 last:border-0 last:pb-0">
            <div className="mb-1 flex items-center gap-3">
              <h4 className="text-lg font-medium text-gray-900">
                Fullstack Club
              </h4>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Em andamento
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Instrutor: Felipe Rocha
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Foco avançado em React, Next.js, Tailwind e boas práticas de clean
              code.
            </p>
          </div>

          {/* Item: Fábrica de Aplicativos */}
          <div className="mb-4 border-b border-gray-100 pb-4 last:mb-0 last:border-0 last:pb-0">
            <div className="mb-1 flex items-center gap-3">
              <h4 className="text-lg font-medium text-gray-900">
                Fábrica de Aplicativos
              </h4>
              <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600">
                Concluído
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Sujeito Programador - Matheus Fraga
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Desenvolvimento Mobile com React Native e integrações nativas.
            </p>
          </div>
        </div>

        {/* Cursos Complementares */}
        <div className="flex w-full flex-col rounded-lg border border-solid border-gray-200 p-5 xl:w-[95%] xl:border-black">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <BookOpen className="h-6 w-6" />
            Cursos Complementares
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Renderização dinâmica do array */}
            {complementaryCourses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 rounded-lg border border-slate-800 bg-slate-900 p-4 transition-transform hover:scale-[1.02]"
              >
                <span className={`${course.colorClass} text-lg font-bold`}>
                  {course.name}
                </span>
                <span className="text-sm text-gray-400">{course.platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
