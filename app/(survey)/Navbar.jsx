"use client";
import Link from "next/link";
import React, { useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { TfiMenu } from "react-icons/tfi";
import Image from "next/image";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";

function Navbar() {
  const { supabase, session } = useSupabase();
  const router = useRouter();
  console.log("navbar dashboard", session);
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky bg-base-100 top-0 z-20 shadow-md">
      <div className="navbar  layout">
        <div className="navbar-start">
          <p className=" font-sans font-semibold text-2xl text-neutral hover:text-neutral-focus  ">
            Mes sondages
          </p>
        </div>
        {/* <ul className="navbar-center menu menu-compact menu-horizontal bg-base-100 space-x-4 rounded-box">
          <li>
            <Link href="/">Questionnaire</Link>
          </li>
          <li>
            <Link href="/">Resultats</Link>
          </li>
          <li>
            <Link href="/">Collecte de réponses</Link>
          </li>
        </ul> */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/Coding_session.jpg"
                  width={300}
                  height={300}
                  priority={false}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3  shadow bg-base-300 rounded-box w-[300px] p-5 space-y-2"
            >
              <p className=" text-center ">Mon tableau de bord</p>
              <div className="divider"></div>
              <li>
                <Link href="/" className="hover:bg-base-100">
                  Page d'accueil
                </Link>
              </li>
              {/* 
              <li>
                <Link href="/dashboard/setting" className="hover:bg-base-100">
                  Paramètres
                </Link>
              </li> */}

              <div className="divider" />
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-700 text-white border-none hover:bg-red-400 "
                >
                  Se deconnecter
                </button>
              </li>
              {/* <li>
                <Link
                  href="/plan"
                  className="font-light btn btn-accent font-Fjalla uppercase tracking[5px]  text-white"
                  data-theme="mytheme"
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
