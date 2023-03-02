import React from "react";
import Sidebar from "../../Sidebar";

function page() {
  return (
    <div className="flex flex-wrap relative">
      <Sidebar />

      <div className=" grid justify-center items-center basis-0 grow layout min-h-screen  ">
        {/* Opened */}
        <div className="flex relative ">
          <div className="flex flex-col max-w-2xl mx-auto space-y-6">
            <h1 className="">Partir d'un modèle !</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
