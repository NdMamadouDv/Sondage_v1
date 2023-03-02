import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsPlusCircleFill, BsArrowDownUp } from "react-icons/bs";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
import { SlMagicWand } from "react-icons/sl";
function ControlBar() {
  return (
    <div className="grid lg:grid-cols-2 items-center justify-center lg:items-end space-y-4">
      <div className="flex w-full justify-between items-center">
        <button data-theme="mytheme">
          <Link
            href="/dashboard/create"
            className="btn btn-primary text-black  hover:text-white text-xs lg:tracking-[1px]"
          >
            <BsPlusCircleFill className="h-auto w-4 md:w-5 mr-5" />
            Créer mon propre questionnaire
          </Link>
        </button>
        <button data-theme="mytheme">
          <Link
            href="/dashboard/generator"
            className="btn btn-secondary  text-black  hover:text-white text-xs lg:tracking-[1px]"
          >
            <SlMagicWand className="h-auto w-4 md:w-5 mr-5" />A partir d'un
            modèle
          </Link>
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4 ">
        <select className="select select-primary  max-w-xs">
          <option className="">Par ordre alphabétique</option>
          <option className="">Crée le</option>
          <option className="">Modifié le</option>
        </select>

        {/* Trier par ordre */}

        <Popover.Root>
          <Popover.Trigger asChild>
            <button className=" " aria-label="changer l'ordre">
              <BsArrowDownUp className="cursor-pointer h-auto w-4 text-secondary-content " />
            </button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              sideOffset={5}
              className="flex bg-base-100 p-4 rounded-md items-center text-left border border-primary"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <p className="text-left h4 self-start ">Trier par ordre</p>
                <div className="flex flex-col  space-y-6">
                  <div className="btn btn-sm btn-outline">
                    <HiArrowDown className="h-auto w-5 mr-5" />
                    <p className="">Ordre croissant</p>
                  </div>
                  <div className="btn btn-sm btn-outline">
                    <HiArrowUp className="h-auto w-5 mr-5" />
                    <p className="">Ordre décroissant</p>
                  </div>
                </div>
              </div>
              <Popover.Close
                aria-label="Close"
                className="top-1 right-2 absolute rounded-full"
              >
                <IoCloseSharp className="h-auto w-7 text-red-500" />
              </Popover.Close>
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}

export default ControlBar;
