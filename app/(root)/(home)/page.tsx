import HeroSection from "@/components/HeroSection";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="flex w-full flex-col-reverse justify-between gap-4 text-slate-300 sm:flex-row sm:items-center sm:px-14">
        <div className="mt-10">
          <p>
            This website is in development moode. I&apos;m coding it by myself,
            so it will be soon ready :D
          </p>
          <p className="mb-10">But you can watch my small portfolio here</p>

          <a
            href="https://u.pcloud.link/publink/show?code=kZyLrJ0ZgvQoURPhBvJpEcP7cp3Lnj3t8hLV"
            target="_blank"
            className="mr-10 mt-10"
          >
            <Button
              variant="outline"
              className="hero-bg text-slate-950 hover:text-zinc-50"
            >
              Photo portfolio
            </Button>
          </a>

          <Link href="/links" className="mt-10">
            <Button
              variant="outline"
              className="hero-bg text-slate-950 hover:text-zinc-50"
            >
              Instagram ++
            </Button>
          </Link>
        </div>
        <Image
          src="/assets/img/me.jpg"
          alt="hero"
          width={300}
          height={200}
          className="mt-10"
        />
      </div>
    </>
  );
};

export default Home;
