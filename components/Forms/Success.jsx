import Link from "next/link";
import React from "react";
import { GoRocket } from "react-icons/go";

function Success() {
  return (
    <div className=" mt-20 layout sm:w-full">
      <div className="flex flex-col items-cente space-y-6">
        <h1 className="h1">Merci de vous être inscrit ! </h1>
        <h2 className="h2">
          Vous pouvez désormais utiliser notre service !
          <GoRocket className="text-neutral h-auto w-5" />
          <span className="text-sm italic font-semibold">
            (pensez à confirmer votre mail avant !)
          </span>
        </h2>

        <Link className="btn btn-primary text-white" href="/auth">
          Me connecter
        </Link>
      </div>
    </div>
  );
}

export default Success;
