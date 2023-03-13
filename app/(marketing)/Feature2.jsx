import Image from "next/image";
import Link from "next/link";
import React from "react";

function Feature2() {
  return (
    <div className="text-neutral flex flex-col items-center justify-evenly h-screen space-y-6">
      <h3 className="h3 text-center">
        Créez totalement votre sondage ou partez d'un modèle !
      </h3>
      <div className="grid lg:grid-cols-2 justify-items-center place-items-center w-full justify-center gap-6">
        <Image
          src="/undraw_survey_2.svg"
          alt="survey "
          width={800}
          height={800}
          className="h-auto w-44 lg:w-96"
        />

        <div className="flex flex-col justify-evenly items-center space-y-4">
          <p className="text-lg font-semibold">
            Que vous vouliez des questions à choix unique, multiple ou bien un
            classement par ordre de préférence, tous les questionnaires sont
            entièrement personnalisables !
          </p>
          <ul className="list-disc space-y-3">
            <li className="text-xl hover:underline">
              Augmentez le taux de conversion de votre site web.
            </li>
            <li className="text-xl hover:underline">
              Augmentez l'engagement de vos visiteurs.
            </li>
            <li className="text-xl hover:underline">
              Prenez des décisions à la lumière de ce que veulent vos clients.
            </li>
          </ul>
        </div>
      </div>
      <Link
        href="/auth"
        className="btn btn-neutral-focus text-white btn-lg max-w-lg place-self-end mt-8"
      >
        S'inscrire gratuitement
      </Link>
    </div>
  );
}

export default Feature2;
