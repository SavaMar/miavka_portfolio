import React from "react";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  locale?: string;
}

const Footer = ({ locale }: FooterProps) => {
  return (
    <footer className="hero-bg border-top-my-color flex flex-col items-center justify-between p-10 font-namu text-slate-300 sm:px-14">
      <SocialLinks className="" locale={locale} />
      <p>® Mari Miavka 2024</p>
    </footer>
  );
};

export default Footer;
