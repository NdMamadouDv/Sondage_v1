import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-screen  grid items-center justify-center layout">
      <div className="max-w-xl space-y-4 flex flex-col items-center justify-center">
        <h1 className="h1 text-2xl text-primary text-center">
          Merci d'avoir crée votre compte.
        </h1>
        <h2 className="h2 text-xl text-center">
          La prochaine étape, c'est de confirmer votre inscription en cliquant
          sur le lien reçu dans votre email.
        </h2>
      </div>
      <Link
        className=" font-Fjalla normal-case text-lg text-primary hover:text-primary-focus  text-center mt-8"
        href="/dashboard/newUser"
      >
        ISurvey.com
      </Link>
    </div>
  );
}

export default page;
