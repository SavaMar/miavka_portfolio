import React from "react";
import BlogIcon from "./icons/BlogIcon";
import StoreIcon from "./icons/StoreIcon";
import ArtIcon from "./icons/ArtIcon";
import PhotoIcon from "./icons/PhotoIcon";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    href: "/blog",
    imageSrc: "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/links/blog.png",
    icon: <BlogIcon iconColor="text-white" hoverIconColor="text-white" />,
    title: "BLOG",
  },
  {
    href: "/shop",
    imageSrc: "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/links/store.png",
    icon: <StoreIcon iconColor="text-white" hoverIconColor="text-yellow-500" />,
    title: "STORE",
  },
  {
    href: "/art",
    imageSrc: "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/links/art.png",
    icon: <ArtIcon iconColor="text-white" hoverIconColor="text-yellow-500" />,
    title: "ART",
  },
  {
    href: "/photo",
    imageSrc: "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/links/photo.png",
    icon: <PhotoIcon iconColor="text-white" hoverIconColor="text-yellow-500" />,
    title: "PHOTO",
  },
];

const MenuBlocks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 justify-between justify-items-stretch gap-4 p-20 text-2xl md:grid-cols-2 lg:grid-cols-4">
      {menuItems.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          imageSrc={item.imageSrc}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default MenuBlocks;
