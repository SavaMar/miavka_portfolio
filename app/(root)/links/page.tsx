import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between text-slate-300 sm:px-14">
      {/* Print shop */}
      <Link href="/links" target="_blank" className="mt-5">
        <Button
          disabled
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Prints Shop
        </Button>
      </Link>

      {/* gumroad */}
      <Link href="/links" target="_blank" className="mt-5">
        <Button
          disabled
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Gumroad
        </Button>
      </Link>

      {/* Youtube */}
      <Link href="/links" target="_blank" className="mt-5">
        <Button
          disabled
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Youtube
        </Button>
      </Link>

      {/* Rashguard designs  */}
      <a
        href="https://www.instagram.com/zla_miavka_bjj"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Rashguard designs
        </Button>
      </a>

      {/* Rashguard designs  */}
      <a
        href="https://www.instagram.com/bjj_photographer.ch"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          BJJ Photos Instagram
        </Button>
      </a>

      {/* Tattoo profile */}
      <a
        href="https://www.instagram.com/miavka.tatts"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Tattoo Instagram
        </Button>
      </a>

      {/* Art profile */}
      <a
        href="https://www.instagram.com/miavka.art"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Art Instagram
        </Button>
      </a>

      {/* Photo profile */}
      <a
        href="https://www.instagram.com/miavka.photography"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          Photo instagram
        </Button>
      </a>

      {/* main profile */}
      <a
        href="https://www.instagram.com/marisava33"
        target="_blank"
        className="mt-5"
      >
        <Button
          variant="outline"
          className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
        >
          My main instagram
        </Button>
      </a>
    </div>
  );
};

export default page;
