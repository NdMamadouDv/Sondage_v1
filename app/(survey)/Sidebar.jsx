"use client";
import React from "react";
import { usePathname } from "next/navigation";
import SidebarCreate from "./SidebarCreate";
import SidebarBasic from "./SidebarBasic";
import SidebarGenerator from "./SidebarGenerator";

function Sidebar() {
  // Recuperer le path pour afficher les sidebars respectives

  const pathName = usePathname();
  // console.log(pathName);

  return (
    <div className="p-6   md:basis-80 md:grow-0 flex flex-col border-r border-gray-400/30  w-full items-center justify-start bg-white md:min-h-screen sm:mt-0   ">
      <div className="container bg-blanc flex flex-col justify-center items-center space-y-6">
        {/* S'il n'y a pas de sondage en création */}
        {pathName === "/dashboard/create" ? (
          <SidebarCreate />
        ) : pathName === "/dashboard/generator" ? (
          <SidebarGenerator />
        ) : (
          <SidebarBasic />
        )}

        {/* S'il y a un sondage en creation */}
      </div>
    </div>
  );
}

export default Sidebar;
