import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  href: string;
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, imageSrc, icon, title }) => (
  <div className="cursor-pointer flex-col rounded-lg bg-my-color delay-150 duration-300 ease-in-out">
    <Link href={href} passHref>
      <div className="block cursor-pointer hover:shadow-xl">
        <Image
          src={imageSrc}
          alt={title}
          layout="responsive"
          width={100}
          height={40}
          className="cursor-pointer rounded-t-md delay-150 ease-in-out hover:opacity-50 hover:shadow-xl"
        />
        <div className="relative flex cursor-pointer place-content-center items-center rounded-b-lg py-2 font-extrabold">
          <div className="absolute -top-10 rounded-full bg-my-color p-5">
            {icon}
          </div>
          <h2 className="flex pb-1 pt-10">{title}</h2>
        </div>
      </div>
    </Link>
  </div>
);

export default MenuItem;
