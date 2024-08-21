import DefaultLayout from "@/layouts/default";

import { title, subtitle } from "@/components/primitives";
import Form from "@/components/form/form";

export default function EventosPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8  md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "blue" })}>Eventos del Semillero SISUNS</h1>
        </div>
        <div className="max-w-4xl m-auto text-center	">
          <h4 className={subtitle({ class: "mt-4" })}>
            No te pierdas la oportunidad de formar parte de un evento que transformará tu visión sobre la tecnología. 
            Inscríbete ahora y asegura tu lugar en una jornada de aprendizaje, innovación, y networking con expertos y entusiastas del sector.
          </h4>
        </div>
      </section>

      <div>
        <h1 className="text-[#0f766e] font-black text-3xl text-center pb-10">Formulario de inscripción</h1>
        <Form />
      </div>

    </DefaultLayout>
  );
}