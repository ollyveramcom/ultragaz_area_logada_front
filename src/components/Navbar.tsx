"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import LogoBlue from "@/assets/img/logo/logo-blue.png";

import MenuIcon from "@/assets/icons/MenuIcon";

function NavbarItems() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [hash, setHash] = useState("");
  const [params, setParams] = useState(searchParams.toString());

  const getLinkStyle = (route: string) => {
    return `navbar-item ${((hash && route.includes(hash)) || (!hash && pathname === route)) && "text-white md:text-primary md:font-bold"}`;
  };

  const getItemStyle = (route: string) => {
    return `w-full p-4 md:w-auto md:p-0 ${((hash && route.includes(hash)) || (!hash && pathname === route)) && "bg-primary md:bg-inherit"}`;
  };

  const getURLWithSearchParams = (base: string) => {
    return base + (params ? "?" + params : "");
  };

  useEffect(() => {
    const [hash, params] = document.location.hash.split("?");
    if (hash) {
      const anchor = document.querySelector(hash);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    }
    setHash(hash);
    setParams(params || searchParams.toString());
  }, [searchParams]);

  return (
    <>
      <NavigationMenuItem className={getItemStyle("/consulta")}>
        <NavigationMenuLink
          className={getLinkStyle("/consulta")}
          href={getURLWithSearchParams("/consulta")}
        >
          Início
        </NavigationMenuLink>
      </NavigationMenuItem>
      <hr className="w-full md:hidden" />
      <NavigationMenuItem className={getItemStyle("/faq")}>
        <NavigationMenuLink
          className={getLinkStyle("/faq")}
          href={getURLWithSearchParams("/faq")}
        >
          Dúvidas
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className={getItemStyle("/login")}>
        <NavigationMenuLink
          className={getLinkStyle("/login")}
          href={getURLWithSearchParams("/login")}
        >
          Área logada
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}

function NavbarMobile() {
  return (
    <NavigationMenu className="md:hidden">
      <NavigationMenuList>
        <NavigationMenuItem className="h-6">
          <NavigationMenuTrigger className="p-0 h-auto">
            <MenuIcon className="active:text-primary" aria-label="Menu" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white w-60 p-2">
            <NavigationMenuList className="flex-col items-start space-x-0">
              <NavbarItems />
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavbarDesktop() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-12">
        <NavbarItems />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  return (
    <div className="h-14 bg-background sticky top-0 z-50 shadow-md">
      <div className="container h-full flex justify-between items-center md:justify-normal md:gap-16">
        <div>
          <Link href="/consulta">
            <Image
              src={LogoBlue}
              alt="Logo azul da Ultragaz Energia Inteligente"
              sizes="(min-width: 768px) 81w, 61w"
              className="w-[61px] md:w-[81px]"
            />
          </Link>
        </div>
        <div>
          <NavbarMobile />
          <NavbarDesktop />
        </div>
      </div>
    </div>
  );
}
