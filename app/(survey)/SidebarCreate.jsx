import React from "react";
import { CgNotes } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { TfiMoreAlt } from "react-icons/tfi";

function SidebarCreate() {
  return (
    <div className="flex flex-col space-y-4 font-sans">
      <h2 className="font-sans font-bold text-lg">
        Mise en place de votre sondage
      </h2>
      <p className="text-gray-600/80 text-sm font-sans">
        Ici vous pouvez organiser l’ordre de vos question. Vos sondés les
        recevront exactement dans cet ordre.
      </p>
      <ul className="menu menu-compact menu-vertical space-y-6">
        <li>
          <button className="rounded-md justify-between">
            Page d'accueil
            <span className="">
              <TfiMoreAlt className="hover:text-primary cursor-pointer" />
            </span>
          </button>
        </li>
        <li>
          <button className=" justify-between rounded-md">
            <span className="">
              <CgNotes className="" />
            </span>
            Page 1
            <span className="">
              <TfiMoreAlt className="hover:text-primary cursor-pointer" />
            </span>
          </button>
        </li>
        <li>
          <button className=" justify-between rounded-md">
            <span className="">
              <CgNotes className="" />
            </span>
            Page 2
            <span className="">
              <TfiMoreAlt className="hover:text-primary cursor-pointer" />
            </span>
          </button>
        </li>
      </ul>
      <div className="divider" />
      <ul className="menu menu-compact menu-vertical space-y-6">
        <li>
          <button className="justify-between rounded-md">
            <span className="">
              <GrFormAdd className="h-auto w-5" />
            </span>
            Ajouter une page
          </button>
        </li>
        <li>
          <button className="justify-between rounded-md">
            <span className="">
              <HiOutlineHandThumbUp />
            </span>
            Page finale de remerciement
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SidebarCreate;
