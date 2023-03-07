import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen">
      <div className=" grid lg:grid-cols-2 justify-items-center place-items-center w-full justify-center gap-6 space-y-10">
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="h1 font-semibold">
            Nous vous aidons à connaître vos clients.
          </h1>
          <h2 className="h2 font-light font-Source leading-7">
            Nous sommes une agence web spécialisée dans la création de
            questionnaire. Nous aidons les entreprises à mieux connaître leur
            clients.
          </h2>
          <Link
            href="dashboard"
            className="btn btn-primary text-white btn-lg max-w-lg"
          >
            Créer mon sondage
          </Link>
        </div>

        <Image
          src="/undraw_survey.svg"
          alt="survey"
          width={800}
          height={800}
          className="h-auto w-44 lg:w-96"
        />
      </div>
    </div>
  );
}

export default Hero;
