import EcwidStore from "@/components/shared/EcwidStore";
import React from "react";

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Done with love
          </p>
          <p className="not-white fw-300 text-lg">
            All my works have a stories beching of creation. You can see that
            everything have a name and I can tell you, all done with love, fun
            and passion.
          </p>
        </div>
      </section>
      <div className="mb-24 p-20">
        <div className="w-full rounded-lg bg-slate-300  p-16">
          <EcwidStore />
        </div>{" "}
      </div>
    </section>
  );
};

export default page;
