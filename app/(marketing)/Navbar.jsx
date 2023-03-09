import Link from "next/link";
import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
  return (
    <header className="sticky bg-base-100 top-0 z-20 shadow-md ">
      <div className="navbar   py-6 layout ">
        <div className="sm:navbar-start ">
          <Link
            className=" font-Fjalla normal-case text-3xl text-primary hover:text-primary-focus  "
            href="/"
          >
            ISurvey.com
          </Link>
        </div>

        <div className="hidden lg:flex navbar-end ">
          <ul className="menu menu-horizontal px-1 flex items-center justify-between space-x-6">
            <li>
              <Link href="/" className="link-navbar ">
                Home
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="link-navbar h4">
                Mon compte
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" lg:hidden cursor-pointer">
              <TfiMenu className="h-auto w-10 text-primary" />
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3  shadow bg-base-300 rounded-box w-[300px] p-5 space-y-2"
            >
              <li>
                <Link href="/" className="hover:bg-base-100">
                  Home
                </Link>
              </li>

              <div className="divider" />
              <li>
                <Link href="/auth" className="btn btn-primary text-white">
                  Mon compte
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
