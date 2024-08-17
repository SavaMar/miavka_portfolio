"use client"; // Add this line at the top

import React, { useEffect } from "react";

const EcwidStore: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.ecwid.com/script.js?104773017&data_platform=code&data_date=2024-07-12";
    script.async = false;
    script.charset = "utf-8";
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).xProductBrowser(
        "categoriesPerRow=3",
        "views=grid(20,3) list(60) table(60)",
        "categoryView=grid",
        "searchView=list",
        "id=my-store-104773017"
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="my-store-104773017"></div>
    </div>
  );
};

export default EcwidStore;
