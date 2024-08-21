import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
        </div>


        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 m-auto	">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Seminarios</p>
              <h4 className="text-white font-medium text-large">Análisis de Datos</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D5622AQE9HvG4Ih0trQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723732214015?e=1727308800&v=beta&t=H0yFPIFFpKDX0H7E5gH94cCa6zVTXkPoBb26opkMmY0"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Talleres</p>
              <h4 className="text-white font-medium text-large">Inteligencia Artificial</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Charlas</p>
              <h4 className="text-white font-medium text-large">Ciberseguridad</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://scontent.ftru4-1.fna.fbcdn.net/v/t39.30808-6/455284340_2788904884608841_2447272314179111406_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEzkA1WxxJrn-g0o2apOz76sE0cS9oA3-2wTRxL2gDf7UDTVHBceHfCatnqX-TBmXMCtrb92QgHy5aw9lQEtMiq&_nc_ohc=YSPMxkb8p0sQ7kNvgEm5a5V&_nc_zt=23&_nc_ht=scontent.ftru4-1.fna&oh=00_AYDYtXTdOYx9JjtuIDVN677uyQDtTX4EDSb0bLbnHmnTaw&oe=66CC4E1A"
            />
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Proyectos</p>
              <h4 className="text-black font-medium text-2xl">Colaborativos</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Participa en proyectos reales.</p>
                <p className="text-black text-tiny">Recibe retroalimentación.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Participar
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Networking</p>
              <h4 className="text-white/90 font-medium text-xl">Conéctate con otros</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Networking background"
              className="z-0 w-full h-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D5622AQG0h2SDTOPTCg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723732217878?e=1727308800&v=beta&t=5FbgZlmF8T4jBSzk1fNaIJd-efHttxYYbiItIZG0HJQ"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Networking icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Conéctate</p>
                  <p className="text-tiny text-white/60">Construye relaciones.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Conectar</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
