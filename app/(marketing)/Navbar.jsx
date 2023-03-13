"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";

function Navbar() {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  // const [currentSession, setCurrentSession] = useState(session);

  // useEffect(() => {
  //   setCurrentSession(session);
  // }, [session]);
  // // console.log("current session", currentSession);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="sticky bg-white top-0 z-20 shadow-md ">
      <div className="navbar   py-6 layout ">
        <div className="sm:navbar-start ">
          <Link
            className=" font-Mitr normal-case text-3xl text-primary hover:text-primary-focus  "
            href="/"
          >
            ISurvey.com
          </Link>
        </div>

        <div className="hidden sm:flex navbar-center">
          <ul className="menu menu-horizontal  flex items-center justify-between space-x-2">
            {/*<li className="rounded-sm">
               <Link href="/" className="link-navbar-middle ">
                Accueil
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="link-navbar-middle">
                Comment cela marche ?
              </Link>
            </li> */}
            {/* Ici proposer l'accès aux différentes templates */}
          </ul>
        </div>
        <div className="hidden lg:flex navbar-end items-center space-x-6">
          <Link
            className="normal-case bg-transparent py-1 px-2 rounded-md border-[1.5px] text-neutral border-neutral font-normal text-base font-sans hover:bg-transparent "
            href="/auth"
          >
            Se connecter
          </Link>
          <Link className="sinscrire" href="/auth/signup">
            S'inscrire
          </Link>
        </div>
        <div className="navbar-end lg:hidden space-x-2">
          <div className=" hidden md:flex items-center justify-center space-x-4">
            <Link
              className="normal-case bg-transparent py-1 px-2 rounded-md border-[1.5px] text-neutral border-neutral font-normal text-base font-sans hover:bg-transparent "
              href="/auth"
            >
              Se connecter
            </Link>
            <Link
              className="normal-case  bg-gray-600/50 py-1 px-2 rounded-md border-none text-white font-normal text-base font-sans hover:bg-gray-600/70 "
              href="/auth/signup"
            >
              S'inscrire
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" lg:hidden cursor-pointer">
              <IoMdMenu className="h-auto w-10 text-neutral" />
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3  shadow bg-base-300 rounded-box w-[300px] p-5 space-y-2"
            >
              {session ? (
                <p className="text-center">{session.user.email}</p>
              ) : (
                ""
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
      </div>
    </header>
  );
}

export default Navbar;
