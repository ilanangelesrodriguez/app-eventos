export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SISUNS Eventos",
  description: "Página para gestionar la inscripción de eventos.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Eventos",
      href: "/eventos",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Sobre Nosotros",
      href: "/nosotros",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Eventos",
      href: "/eventos",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/ilanangelesrodriguez",
    twitter: "https://x.com/ilanangeles1282",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://github.com/ilanangelesrodriguez",
  },
};
