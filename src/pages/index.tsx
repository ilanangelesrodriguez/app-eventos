import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Hazlo,&nbsp;</h1>
          <h1 className={title({ color: "blue" })}>inscríbete&nbsp;</h1>
          <br />
          <h1 className={title()}>
            en nuestro próximo evento.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Formulario rápido, moderno y fácil de usar para inscribirte en nuestros eventos.
          </h4>
        </div>

        <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Informate sobre los eventos en{" "}
            <Code color="primary">sisuns.com/eventos</Code>
          </span>
        </Snippet>
        </div>
      </section>



      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-left">
          <h2 className={title()}>Eventos del Semillero SISUNS</h2>
          <p className="mt-4">
            En el Semillero SISUNS, nos dedicamos a promover el aprendizaje y la innovación en el ámbito de la tecnología y la informática. Nuestros eventos son una oportunidad única para que estudiantes, profesionales, y entusiastas del sector se conecten, compartan conocimientos y descubran las últimas tendencias en la industria.
          </p>

          <h3 className={title({ class: "mt-8" })}>Seminarios y Talleres</h3>
          <p className="mt-4">
            Organizamos seminarios y talleres enfocados en diversas áreas de la tecnología, como el análisis de datos, la inteligencia artificial, la ciberseguridad, y la gestión de infraestructuras tecnológicas. Contamos con la participación de expertos reconocidos que comparten sus experiencias y conocimientos, proporcionando a los asistentes herramientas prácticas y teóricas para su desarrollo profesional.
          </p>

          <h3 className={title({ class: "mt-8" })}>Charlas y Conferencias</h3>
          <p className="mt-4">
            Nuestras charlas y conferencias son espacios dinámicos donde se discuten temas actuales y relevantes, desde las nuevas tecnologías emergentes hasta las mejores prácticas en la gestión de TI. Estos eventos están diseñados para inspirar y motivar a la comunidad académica y profesional a explorar nuevas ideas y enfoques.
          </p>

          <h3 className={title({ class: "mt-8" })}>Proyectos Colaborativos</h3>
          <p className="mt-4">
            En SISUNS, también fomentamos la colaboración a través de proyectos donde los participantes pueden aplicar lo aprendido en situaciones reales. Estos proyectos son presentados y discutidos en eventos especiales, lo que permite a los miembros del semillero recibir retroalimentación constructiva y expandir su red de contactos.
          </p>

          <h3 className={title({ class: "mt-8" })}>Oportunidades de Networking</h3>
          <p className="mt-4">
            Además de la formación académica y profesional, nuestros eventos son un excelente punto de encuentro para conocer a otros apasionados por la tecnología. Facilitamos espacios para el networking, donde los asistentes pueden intercambiar ideas, iniciar colaboraciones y construir relaciones que impulsen su carrera.
          </p>

          <h3 className={title({ class: "mt-8" })}>¡Únete a Nuestros Próximos Eventos!</h3>
          <p className="mt-4">
            Mantente informado sobre nuestros próximos eventos y no te pierdas la oportunidad de ser parte de la comunidad SISUNS. Ya seas estudiante, profesional o simplemente un entusiasta de la tecnología, en SISUNS encontrarás un espacio para crecer, aprender y compartir.
          </p>
        </div>
      </section>

    </DefaultLayout>
  );
}
