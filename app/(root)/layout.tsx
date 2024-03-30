import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-stone-950">
      <Navbar />
      <section className="flex min-h-screen flex-1 flex-col max-md:pb-14">
        <h1 className="p-5 uppercase text-white">
          WEb site in development mode
        </h1>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
