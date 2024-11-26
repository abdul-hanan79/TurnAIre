import { NavigationItemProps } from "@/types";
import React from "react";
import {
  HomeIcon,
  PercentBadgeIcon,
  UserCircleIcon,
  TicketIcon,
} from "@heroicons/react/16/solid";
export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  isActive = false,
}) => {
  return (
    <button
      className={`flex flex-col items-center ${
        isActive ? "text-green-800" : "text-gray-500"
      }`}
      aria-label={label}
    >
      {label == "Home" ? (
        <HomeIcon className="w-9 h-9" />
      ) : label == "Orders" ? (
        <TicketIcon className="w-9 h-9" />
      ) : label == "Deals" ? (
        <PercentBadgeIcon className="w-9 h-9" />
      ) : label == "Account" ? (
        <UserCircleIcon className="w-9 h-9" />
      ) : (
        ""
      )}
      <span className="text-sm tracking-wide leading-6">{label}</span>
    </button>
  );
};
const Navbar = () => {
  const navigationItems = [
    {
      label: "Home",
      isActive: true,
    },
    {
      label: "Orders",
    },
    {
      label: "Deals",
    },
    {
      label: "Account",
    },
  ];
  return (
    <nav className="md:fixed md:bottom-5 md:left-[50%] md:transform md:-translate-x-1/2 flex z-10  gap-5 justify-evenly items-center py-1.5 md:w-[35%] w-full border-t shadow-xl  bg-gray-200 rounded-3xl ">
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
