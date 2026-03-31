import { BookOpen, Code2, GraduationCap } from "lucide-react";
import DialogComponent from "../dialogComponent/dialogComponent";

const EducationSection = () => {
  const complementaryCourses = [
    { name: "Java", platform: "Udemy", colorClass: "text-yellow-500" },
    { name: "SQL Avançado", platform: "Udemy", colorClass: "text-blue-400" },
  ];
  return (
    <section
      className="w-full  mx-auto mt-10 p-4 bg-white mb-5 shadow-sm xs:rounded-xl"
      id="education"
    >
      <h2 className="text-black font-semibold text-2xl text-center mb-6 xl:text-5xl xl:my-8">
        Educação & Certificações
      </h2>

      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Faculdade */}
        <div className="flex flex-col w-full border border-gray-200 border-solid p-5 rounded-lg xl:border-black xl:w-[95%]">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
            <GraduationCap className="w-6 h-6" />
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
        <div className="flex flex-col w-full border border-gray-200 border-solid p-5 rounded-lg xl:border-black xl:w-[95%]">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6" />
            Especializações
          </h3>

          {/* Item: Fullstack Club */}
          <div className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="text-lg font-medium text-gray-900">
                Fullstack Club
              </h4>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-200">
                Em andamento
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Instrutor: Felipe Rocha
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Foco avançado em React, Next.js, Tailwind e boas práticas de clean
              code.
            </p>
          </div>

          {/* Item: Fábrica de Aplicativos */}
          <div className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="text-lg font-medium text-gray-900">
                Fábrica de Aplicativos
              </h4>
              <span className="bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-green-200">
                Concluído
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Sujeito Programador - Matheus Fraga
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Desenvolvimento Mobile com React Native e integrações nativas.
            </p>
          </div>
        </div>

        {/* Cursos Complementares */}
        <div className="flex flex-col w-full border border-gray-200 border-solid p-5 rounded-lg xl:border-black xl:w-[95%]">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" />
            Cursos Complementares
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Renderização dinâmica do array */}
            {complementaryCourses.map((course, index) => (
              <div
                key={index}
                className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col gap-1 transition-transform hover:scale-[1.02]"
              >
                <span className={`${course.colorClass} font-bold text-lg`}>
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
