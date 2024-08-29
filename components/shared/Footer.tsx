import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="hero-bg border-top-my-color flex flex-col items-center justify-between p-10 text-slate-300 sm:px-14 lg:absolute lg:inset-x-0  lg:bottom-0">
      <SocialLinks className="" />
      <p>® Mari Miavka 2024</p>
    </footer>
  );
};

export default Footer;
