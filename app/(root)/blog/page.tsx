import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection
        imageName="Blog"
        backgroundClass=""
        mainTitle="Blog"
        descriptionText="Photography. Video. Unique personal style."
      />
      <div className="flex w-full flex-col-reverse justify-between gap-4 text-slate-300 sm:flex-row sm:items-center sm:px-14">
        <div>
          <p className="my-20">
            This website is in development moode. I&apos;m coding it by myself,
            so it will be soon ready :D
          </p>
          <p>miavka.video@gmail.com</p>
          <p className="mb-10">(+41) 078 951 42 66 Telegram/Whatsapp</p>

          <Link href="/links" className="mt-10">
            <Button
              variant="outline"
              className="hero-bg text-slate-950 hover:text-zinc-50"
            >
              Instagram ++
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
