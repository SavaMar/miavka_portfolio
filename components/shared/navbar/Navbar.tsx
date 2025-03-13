"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Store,
  Images,
  Notebook,
  Mail,
  Palette,
  Puzzle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { href: "/photos", label: "Photos", icon: Images },
  { href: "/collages", label: "Collages", icon: Images },
  { href: "/art", label: "Art", icon: Palette },
  { href: "/shop", label: "Store", icon: Store, separator: true },
  { href: "/blog", label: "Blog", icon: Notebook },
  { href: "/about", label: "About me", icon: Puzzle },
  { href: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 font-namu font-bold">
      <div className="mr-auto flex flex-col pl-0 lg:flex-row">
        <Link
          href="/"
          className="block w-full grow transition ease-in-out hover:text-slate-300 lg:flex lg:w-auto lg:items-center"
        >
          <Image
            src="/assets/img/logo.png"
            width={34}
            height={34}
            alt="Miavka logo"
          />
          <p className="hidden pl-3 text-xl text-my-color-light lg:block">
            Mari Miavka
          </p>
        </Link>
      </div>
      <div className="relative flex items-center">
        <DropdownMenu>
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
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                  {item.separator && <DropdownMenuSeparator />}
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden text-my-color-light md:flex-col lg:flex lg:flex-row lg:items-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block grow ${
                item.href === "/contact" ? "pl-4" : "px-4"
              } uppercase hover:text-slate-300 sm:hidden lg:flex ${
                item.href === "/shop" ? "text-my-color" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
