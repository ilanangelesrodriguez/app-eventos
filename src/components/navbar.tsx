import { useEffect, useState } from "react";
import { Link, Input, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { Admin } from "@/models/admin.model";
import { LoginModal } from "./login/loginModal";

export const Navbar = () => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (loggedInAdmin: Admin) => {
    setAdmin(loggedInAdmin);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
      labelPlacement="outside"
      placeholder="Buscar..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">SISUNS</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {admin ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833554.jpg?t=st=1724290220~exp=1724293820~hmac=e3bc44a76b793763ec492ddbdeeefff44a39f1eefa7651cf2f6e7d1ed6b4bce3&w=740"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Admin Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">{admin.nombreAdmin}</p>
                <p className="font-semibold">
                  <Link href="https://x.com/ilanangeles1282" size="sm" isExternal>
                    {admin.rol.nombreRol}
                  </Link>
                </p>
              </DropdownItem>
              <DropdownItem key="settings">
                Mi Perfil
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem>
              <LoginModal onLogin={handleLogin} />
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 justify-center text-center">
          
          {admin ? (
            <>
              <User  
                name={admin.nombreAdmin}
                className="pb-10"
                description={(
                  <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                    {admin.rol.nombreRol}
                  </Link>
                )}
                avatarProps={{
                  src: "https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833554.jpg?t=st=1724290220~exp=1724293820~hmac=e3bc44a76b793763ec492ddbdeeefff44a39f1eefa7651cf2f6e7d1ed6b4bce3&w=740"
                }}
              />

              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <Link
                    color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "primary" : "foreground"}
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}

              <NavbarMenuItem key="logout" className="flex justify-center pt-10">
                <Link color="danger" href="#" onClick={handleLogout} size="lg">
                  Cerrar Sesión
                </Link>
              </NavbarMenuItem>
            </>
          ) : (
            <>
              <NavbarMenuItem key="login" className="pb-5">
                <LoginModal onLogin={handleLogin} />
              </NavbarMenuItem>
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <Link
                    color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "primary" : "foreground"}
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </>
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};