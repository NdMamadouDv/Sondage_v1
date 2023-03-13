import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
function Footer() {
  return (
    <div className=" bg-black mt-10 py-10 text-white">
      <div className="grid lg:grid-cols-2 layout items-center justify-center lg:place-content-between space-y-10">
        <div className="space-y-2 ">
          <Link
            className=" font-Fjalla normal-case text-3xl text-primary hover:text-primary-focus "
            href="/"
          >
            ISurvey.com
          </Link>
          <p className="text-sm max-w-xs text-white">
            Nous sommes une agence web spécialisée dans la création de
            questionnaire. Nous aidons les entreprises et particuliers recolter
            des avis précis.
          </p>
        </div>
        <div className="text-center text-white">
          <h3 className="h3 ">Navigation</h3>
          <ul className="">
            <li className="text-white">
              <Link href="/" className="hover:underline ">
                Créer mon questionnaire
              </Link>
            </li>
            <li className="text-white">
              <Link href="/" className="hover:underline ">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout h-[0.5px] bg-white my-6"> </div>

      <div className="grid grid-cols-2 layout place-content-between w-full ">
        <div className="flex items-center justify-start space-x-4">
          <ImFacebook className="hover:cursor-pointer" />
          <ImTwitter className="hover:cursor-pointer" />
          <ImGithub className="hover:cursor-pointer" />
          <ImLinkedin className="hover:cursor-pointer" />
        </div>
        <div className="">
          <p className="text-right text-white">
            All rights reserved.© 2023 Heyvoila
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
