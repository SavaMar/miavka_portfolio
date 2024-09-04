import React from "react";

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Art
          </p>
          <p className="not-white fw-300 text-lg">In development</p>
        </div>
      </section>
      <div className="mb-24 p-24">
        <div className="hero-bg grid w-full grid-cols-1 justify-between justify-items-stretch gap-6 p-16 text-slate-300 md:grid-cols-2 lg:grid-cols-6">
          <p>Will be soon</p>
        </div>
      </div>
    </section>
  );
};

export default page;
