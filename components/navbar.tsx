"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import BurgerMenu from '@/icons/burger-menu';
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const path = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openMenu, isOpenMenu] = useState(false);

  const routes = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "HOW TO BUY", href: "/how-to-buy" },
    { name: "TOKENOMICS", href: "/tokenomics" },
    {name: "ROADMAP", href: "/roadmap"},
    { name: "BitcoinAI Arts", href: "/bitcoinai-arts" },
    { name: "BitcoinAI Chatbots", href: "/bitcoinai-chatbots" },
    {name: "BitcoinAI Humanoid", href: "/bitcoinai-humanoid"},
  ]

  return (
    <div className="flex flex-col justify-between mx-auto md:items-center px-8 max-w-[110rem] md:py-14 max-md:p-4 md:flex-row gap-x-[20px] gap-y-1.5 w-full h-auto overflow-x-auto">
  <Image
    src="/logo.png"
    alt="Logo"
    className="object-contain max-md:h-10 max-md:w-[100px] md:h-14 lg:h-18 xl:h-22"
    width={177}
    height={48}
  />
      {
        !isDesktop && (
          <button
            onClick={() => isOpenMenu(!openMenu)}
            className="flex absolute right-3 top-3 justify-center items-center p-3"
          >
            {openMenu ? <X className="w-8 h-8 text-nav-link-active" /> : <Menu className="w-8 h-8 text-nav-link-active" />}
          </button>
        )
      }
      {isDesktop ? <div
        className="rounded-[30px] flex-wrap flex gap-0 max-md:flex-col border items-center font-cooper-hewitt border-primary-border w-full bg-custom-gradient p-6 max-md:p-2"
      >
        {routes.map((route, index) => (
          <NavButton key={index} href={route.href} className={cn("text-nav-link flex justify-start items-start text-left xl:text-[16px] lg:text-[16px] text-[16px] font-bold", {
            "text-nav-link-active": path === route.href,

          })}>
            {route.name}
          </NavButton>
          ))}
      </div>: openMenu && <div
        className="rounded-[30px] flex gap-4 max-md:flex-col border font-cooper-hewitt border-primary-border w-full bg-custom-gradient p-6"
      >
        {routes.map((route, index) => (
          <NavButton key={index} href={route.href} className={cn("text-nav-link xl:text-[16px] lg:text-[16px] text-[16px] font-bold", {
            "text-nav-link-active": path === route.href,

          })}>
            {route.name}
          </NavButton>
          ))}
      </div>
        }
    </div>
  )
}

function NavButton({
  children,
  href,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
}>) {
  return (
    <Link href={href} className={
      buttonVariants({
      variant: "link",
      className: cn(className, "text-left"),
    })
  }>
      {children}
    </Link>
  );
}
