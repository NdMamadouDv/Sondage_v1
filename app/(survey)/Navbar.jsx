import Link from "next/link";
import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { TfiMenu } from "react-icons/tfi";
import Image from "next/image";

function Navbar() {
  return (
    <header className="sticky bg-base-100 top-0 z-20 shadow-md">
      <div className="navbar  layout">
        <div className="flex-1">
          <Link
            className=" font-Fjalla normal-case text-3xl text-primary hover:text-primary-focus  "
            href="/"
          >
            Sondage.com
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src="/Coding_session.jpg" width={300} height={300} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3  shadow bg-base-300 rounded-box w-[300px] p-5 space-y-2"
            >
              <li>
                <Link href="/dashboard/setting" className="hover:bg-base-100">
                  Paramètres
                </Link>
              </li>

              <div className="divider" />
              <li>
                <Link href="/auth" className="btn btn-primary text-white">
                  Se deconnecter
                </Link>
              </li>
              <li>
                <Link
                  href="/plan"
                  className="font-light btn btn-accent  font-Fjalla uppercase tracking[5px]  text-white"
                >
                  Passer à l'étape supérieur
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
