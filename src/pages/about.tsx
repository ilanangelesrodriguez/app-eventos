import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center text-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center">
          <h1 className={title({ color: "blue" })}>Sobre Nosotros</h1>
        </div>

        <div className="max-w-3xl text-left px-4 text-center ">
          <h4 className={subtitle({ class: "mt-4" })}>¡Únete a nosotros y sé parte de una comunidad que impulsa la transformación tecnológica!</h4>

          <p className="mt-4">
            En <strong>Semillero SISUNS</strong>, somos una comunidad apasionada por la tecnología, la innovación, y el desarrollo profesional. Nuestro objetivo es crear un espacio donde estudiantes, profesionales y entusiastas del mundo IT puedan aprender, compartir conocimientos y crecer juntos.
          </p>
          <p className="mt-4">
            Creemos en el poder del conocimiento compartido y en el impacto que puede tener en nuestras comunidades y en el futuro de la tecnología. En <strong>SISUNS</strong>, cada miembro tiene la oportunidad de contribuir, aprender y liderar en un entorno inclusivo y de apoyo.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}