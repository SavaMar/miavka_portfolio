"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Notebook,
  Mail,
  Palette,
  Puzzle,
  Book,
  ShoppingBag,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";

const navigationItems = [
  { href: "/art", label: "art", icon: Palette },
  { href: "/work", label: "work", icon: Palette },
  { href: "/blog", label: "blog", icon: Notebook },
  { href: "/books", label: "books", icon: Book },
  { href: "/shop", label: "store", icon: ShoppingBag },
  { href: "/about", label: "about", icon: Puzzle },
  { href: "/contact", label: "contact", icon: Mail },
];

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ua", name: "Українська", flag: "🇺🇦" },
];

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 font-namu font-bold">
      <div className="mr-auto flex flex-col pl-0 lg:flex-row">
        <Link
          href={`/${locale}`}
          className="block w-full grow transition ease-in-out hover:text-slate-300 lg:flex lg:w-auto lg:items-center"
          onClick={handleNavigation}
        >
          <Image
            src="/assets/img/logo.png"
            width={34}
            height={34}
            alt="Miavka logo"
          />
          <p className="hidden pl-3 text-base text-my-color-light hover:text-slate-300 md:text-lg lg:block lg:text-xl">
            Mari Miavka
          </p>
        </Link>
      </div>
      <div className="relative flex items-center">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              {/* Burger Icon */}
              <Menu size={30} color="#e95a4f" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  <DropdownMenuItem>
                    <item.icon color="#e95a4f" />
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={handleNavigation}
                    >
                      {t(item.label)}
                    </Link>
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden text-my-color-light md:flex-col lg:flex lg:flex-row lg:items-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className={`block grow ${
                item.href === "/contact" ? "pl-4" : "px-4"
              } uppercase hover:text-slate-300 sm:hidden lg:flex ${
                item.href === "/shop" ? "text-my-color" : ""
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="ml-4 flex space-x-1 rounded-md border border-my-color-dark bg-my-color-light p-0.5">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                locale === lang.code
                  ? "bg-gray-900 text-white"
                  : "font-bold text-white hover:bg-gray-200 hover:text-black"
              }`}
              aria-label={`Switch language to ${lang.name}`}
              onClick={handleNavigation}
            >
              {lang.code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
