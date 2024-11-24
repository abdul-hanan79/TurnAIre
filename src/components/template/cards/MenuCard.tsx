import Image from "next/image";
import * as React from "react";

interface MenuCardProps {
  label: string;
  icon: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ label, icon }) => {
  console.log("🚀 ~ icon:", icon)
  return (
    <nav className="flex flex-col md:text-xl text-lg tracking-wide leading-6 text-green-800 whitespace-nowrap">
      <div
     
        className="rounded-full bg-secondary mx-auto p-3"
        aria-label={label}
      >
        <Image src={icon} height={50} width={50} alt="image" />
      </div>{" "}
      <p className="w-full">{label}</p>
    </nav>
  );
};
