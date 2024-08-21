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

    </DefaultLayout>
  );
}
