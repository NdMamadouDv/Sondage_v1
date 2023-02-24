import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { IoCloseSharp } from "react-icons/io5";
import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
import { BsArrowDownUp } from "react-icons/bs";

function Select() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <select className="select select-ghost  max-w-xs">
        <option className="bg-primary text-white">
          Par ordre alphabétique
        </option>
        <option className="bg-primary text-white">Crée le</option>
        <option className="bg-primary text-white">Modifié le</option>
      </select>
      {/* Trier par ordre */}

      <Popover.Root>
        <Popover.Trigger asChild>
          <button className=" " aria-label="changer l'ordre">
            <BsArrowDownUp className="cursor-pointer h-auto w-6 text-secondary-content " />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={5}
            className="flex bg-base-100 p-4 rounded-md items-center text-left"
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
              <IoCloseSharp className="h-auto w-7 text-accent" />
            </Popover.Close>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Select;
