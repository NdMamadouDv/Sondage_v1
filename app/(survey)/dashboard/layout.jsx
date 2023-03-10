"use client";
import Footer from "../Footer";
import "../../globals.css";
import Navbar from "../Navbar";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/supabase-provider";

export default function DashboardLayout({ children }) {
  const { supabase, session } = useSupabase();

  const router = useRouter();
  const goToLoginPage = function () {
    router.push("/auth");
  };

  console.log("dashboard", session);
  return (
    <div className="bg-white">
      {session ? (
        <section className="" data-theme="garden">
          {/* Mettre en place la recuperation du questionnaire présente dans la base de donnée */}

          <Navbar />
          <div className="h-full z-0">{children}</div>
          <Footer />
        </section>
      ) : (
        goToLoginPage()
      )}
    </div>
  );
}
