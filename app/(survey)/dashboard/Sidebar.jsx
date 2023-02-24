"use client";
import React, { useState, useEffect } from "react";
import { HiFolderOpen } from "react-icons/hi2";
import { IoAddCircleSharp } from "react-icons/io5";
import * as Progress from "@radix-ui/react-progress";

function Sidebar() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="p-6 relative sm:h-full sm:basis-80 sm:grow-0 flex flex-col border-r border-gray-400/30   w-full items-center justify-start bg-white md:min-h-screen md:mt-0 mt-6">
      <div className="container bg-blanc flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col space-y-6 p-8 bg-[#FAF7F4] rounded-md">
          <IoAddCircleSharp className="w-8 h-auto text-primary self-end hover:text-primary-focus cursor-pointer" />
          <h3 className="h3">Mes dossiers</h3>
          <button className="btn btn-secondary px-10 ">
            <span className="mr-6">
              <HiFolderOpen />
            </span>{" "}
            Mes sondages
          </button>
          {/* Dossier des sondages */}
        </div>
        <div className="divider" />
        <div className="hidden md:flex flex-col">
          <h3 className="h3">Progression</h3>
          {/* Barre de progression du plan */}
          <Progress.Root
            className="ProgressRoot  border bg-secondary border-primary"
            value={progress}
          >
            <Progress.Indicator
              className="ProgressIndicator bg-primary"
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </Progress.Root>
          <p className="text-lg">Votre progression mensuelle</p>
          <p className="text-sm text-gray-600/80 text-right">
            Réinitialisation dans 9 jours
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
