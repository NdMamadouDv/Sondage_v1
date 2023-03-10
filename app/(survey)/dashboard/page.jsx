"use client";
import { createClient } from "@/utils/supabase-browser";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Blog from "./Blog";
import ControlBar from "./ControlBar";

import Sondages from "./Sondages";

function page() {
  return (
    <div className=" flex flex-wrap">
      <Sidebar />
      <div className="  flex flex-col basis-0 grow layout space-y-10 py-10  ">
        <div className="py-6 container space-y-6 lg:space-y-12  ">
          <h1 className="h1 text-center md:text-left underline underline-offset-4">
            Tableau de bord
          </h1>
          <div className="">
            <ControlBar />
          </div>
          <h2 className="h2 text-center md:text-left">Mes sondages</h2>

          <Sondages />
          <h2 className="h2 text-center md:text-left">
            Comment cela fonctionne ?
          </h2>
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default page;
