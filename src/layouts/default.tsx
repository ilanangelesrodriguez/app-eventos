import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.linkedin.com/in/ilannestorangelesrodriguez/"
          title="nextui.org ilan"
        >
          <span className="text-default-600">Desarrollado por</span>
          <p className="text-primary">Ilan Néstor Angeles Rodriguez</p>
        </Link>
      </footer>
    </div>
  );
}
