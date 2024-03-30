import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants/SocialLinks";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between text-slate-300 sm:px-14">
      <Link href="/" className="mt-5">
        <Image
          className="mt-10 inline-block rounded-full"
          src="/assets/img/avatar.jpg"
          alt="hero"
          width={150}
          height={120}
        ></Image>
      </Link>
      {socialLinks.map((link) => (
        <a href={link.route} key={link.label} target="_blank" className="mt-5">
          <Button
            {...(link.buttonClass === "disabled" && { disabled: true })}
            variant="outline"
            className="hero-bg w-40 text-slate-950 hover:text-zinc-50"
          >
            {link.title}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default page;
