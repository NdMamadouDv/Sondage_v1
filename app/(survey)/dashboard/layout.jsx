import Footer from "../Footer";
import "../../globals.css";
import Navbar from "../Navbar";
import { createClient } from "@/utils/supabase-server";
import "server-only";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);
  return (
    <section className="" data-theme="garden">
      {/* Mettre en place la recuperation du questionnaire présente dans la base de donnée */}

      <Navbar />
      <div className="h-full z-0">{children}</div>
      <Footer />
    </section>
  );
}
