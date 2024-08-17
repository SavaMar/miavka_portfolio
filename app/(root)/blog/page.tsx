/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Blog
          </p>
          <p className="not-white fw-300 text-lg">
            I'm sharing my way here and tips for finding your own style and how
            to work wit your inneral creativity. My mission is inspire others
            spirits.
          </p>
        </div>
      </section>
      <div className="mb-24 p-20">
        <div className="w-full rounded-lg bg-slate-300  p-16">
          <p>This part is in development mode. I'll open it soon :)</p>
        </div>
      </div>
    </section>
  );
};

export default page;
