"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/photo">Collections</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/art">Art</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop">STORE</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden text-my-color-light md:flex-col lg:flex lg:flex-row lg:items-center">
          <Link
            href="/photo"
            className="block grow px-4 uppercase hover:text-slate-300 sm:hidden lg:flex"
          >
            Projects
          </Link>
          <Link
            href="/art"
            className="block grow px-4 uppercase hover:text-slate-300 sm:hidden lg:flex"
          >
            Art
          </Link>
          <Link
            href="/shop"
            className="block grow px-4 uppercase hover:text-slate-300 sm:hidden lg:flex"
          >
            Store
          </Link>
          <Link
            href="/blog"
            className="block grow px-4 uppercase hover:text-slate-300 sm:hidden lg:flex"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block grow px-4 uppercase hover:text-slate-300 sm:hidden lg:flex"
          >
            About me
          </Link>
          <Link
            href="/contact"
            className="block grow pl-4 hover:text-slate-300 lg:flex"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
