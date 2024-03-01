import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-zink-900">
      <p>next layout</p>
      {children}
    </main>
  );
};

export default Layout;
