import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="monserrat-a my-color flex flex-wrap items-center justify-between p-6 font-bold">
      <div className="mr-auto flex flex-col pl-0 lg:flex-row">
        <Link
          href="/"
          className="block w-full grow transition ease-in-out hover:text-slate-300 lg:flex lg:w-auto lg:items-center"
        >
          <Image
            src="/assets/img/logo.png"
            width={34}
            height={34}
            alt="Miavka logo"
          />
          <p className="hidden pl-3 text-xl lg:block">Mari Miavka</p>
        </Link>
      </div>

      <div className=" relative flex items-center">
        <Link
          href="/about"
          className="block grow px-4 uppercase hover:text-slate-300 lg:flex"
        >
          About me
        </Link>
        <Link
          href="/contact"
          className="block grow pl-4 hover:text-slate-300 lg:flex"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
