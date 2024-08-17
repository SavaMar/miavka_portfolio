import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Contact
          </p>
        </div>
      </section>
      <div className="mb-24 p-20">
        <div className="w-full rounded-lg bg-slate-300  p-16">
          <p>
            This page in development mode, but you can write me on
            <b> miavka.video@gmail.com</b> Or find me on instagram and other
            social networks{" "}
            <a href="https://linkup.top/miavka">
              <b> HERE </b>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
