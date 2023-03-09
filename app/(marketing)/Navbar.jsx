"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";

function Navbar() {
  const { supabase, session } = useSupabase();
  console.log("nav marketing:", session);
  const [currentSession, setCurrentSession] = useState(session);

  useEffect(() => {
    setCurrentSession(session);
  }, [session]);
  console.log("current session", currentSession);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

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
        <div className="hidden sm:flex navbar-center">
          <ul className="menu menu-horizontal px-1 flex items-center justify-between space-x-6">
            <li>
              <Link href="/" className="link-navbar-middle ">
                Home
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="link-navbar-middle">
                Comment cela marche ?
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" navbar-link cursor-pointer">
              Mon compte {session ? session.user.email : ""}
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3  shadow bg-base-300 rounded-box w-[300px] p-5 space-y-2"
            >
              <p className="text-center">Page d'accueil</p>
              <div className="divider"></div>{" "}
              <li>
                <Link href="/dashboard" className="hover:bg-base-100">
                  Mes questionnaires
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-base-100">
                  Home
                </Link>
              </li>
              <div className="divider my-8" />
              <li className="place-self-center ">
                {session ? (
                  <button
                    className="btn bg-red-700 text-white border-none hover:bg-red-400 max-w-[8rem] h-auto"
                    onClick={handleLogout}
                  >
                    Me déconnecter
                  </button>
                ) : (
                  <Link
                    className="btn btn-primary text-white  max-w-[8rem] h-auto"
                    href="/auth"
                  >
                    Me connecter
                  </Link>
                )}
              </li>
              {/* <li className="self-stretch	">
                <Link
                  href="/plan"
                  className="font-bold btn btn-accent   uppercase tracking[5px]  text-white "
                >
                  Passer à l'étape supérieur
                </Link>
              </li> */}
            </ul>
          </div>
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
              {session ? (
                <p className="text-center">{session.user.email}</p>
              ) : (
                "Non connecté"
              )}

              <li>
                <Link href="/" className="hover:bg-base-100">
                  Home
                </Link>
                <Link href="/dashboard" className="hover:bg-base-100">
                  Mes questionnaires
                </Link>
              </li>

              <div className="divider my-8" />
              <li className="place-self-center ">
                <button
                  className="btn bg-red-700 text-white border-none hover:bg-red-400 max-w-[8rem] h-auto"
                  onClick={handleLogout}
                >
                  Me déconnecter
                </button>
              </li>
              {/* <li className="self-stretch	">
                <Link
                  href="/plan"
                  className="font-bold btn btn-accent   uppercase tracking[5px]  text-white "
                >
                  Passer à l'étape supérieur
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
