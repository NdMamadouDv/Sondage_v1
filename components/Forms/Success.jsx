import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className=" mt-20">
      <div className="flex flex-col items-cente space-y-6">
        <h1 className="h1">Merci de vous être inscrit !</h1>
        <h2 className="h2">Vous pouvez désormais utiliser notre service !</h2>
        <Link className="btn btn-primary text-white" href="/auth">
          Me connecter
        </Link>
      </div>
    </div>
  );
}

export default Success;
