import React from "react";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-5 text-5xl font-extrabold text-my-color-light sm:text-6xl md:text-6xl lg:text-8xl">
            Contact
          </p>
        </div>
      </section>
      <div className="mb-24 md:p-20">
        <div className="hero-bg rounded-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
