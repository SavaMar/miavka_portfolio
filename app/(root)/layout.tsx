import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-zinc-900">
      <section className="flex min-h-screen flex-1 flex-col max-md:pb-14 sm:px-14">
        {children}
      </section>
    </main>
  );
};

export default Layout;
