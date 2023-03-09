import Image from "next/image";
import Link from "next/link";
import React from "react";

function Feature() {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen text-neutral">
      <h2 className="h2 text-primary text-center">Fonctionnalités</h2>
      <h3 className="h3 text-center">
        Construisez des questionnaires permettant de recolter des avis précis !
      </h3>
      <div className="grid lg:grid-cols-2 justify-items-center place-items-center w-full justify-center gap-6">
        <div className="">
          <ul className="list-disc space-y-3">
            <li className="text-xl hover:underline">
              Ajustez vos ventes en fonctions de ce que réclame votre audience.
            </li>
            <li className="text-xl hover:underline">
              Créez rapidement des questionnaires grâce aux différents
              templates.
            </li>
            <li className="text-xl hover:underline">
              Partagez les facilement grâce à vos reseaux sociaux !
            </li>
          </ul>
        </div>
        <Image
          src="/undraw_analitycs.svg"
          alt="survey "
          width={800}
          height={800}
          className="h-auto w-44 lg:w-96"
        />
      </div>
      {/* <Link
        href="dashboard"
        className="btn btn-primary text-white btn-lg max-w-lg place-self-end mt-8"
      >
        Essayer maintenant
      </Link> */}
    </div>
  );
}

export default Feature;
