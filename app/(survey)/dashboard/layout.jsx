import Footer from "../Footer";
import "../../globals.css";
import Navbar from "../Navbar";
import SupabaseProvider from "@/components/supabase-provider";
import SupabaseListener from "@/components/supabase-listener";
import { createClient } from "@/utils/supabase-server";
import "server-only";

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="fr" data-theme="garden">
      <head />

      <body className="">
        {/* Mettre en place la recuperation du questionnaire présente dans la base de donnée */}
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Navbar />
          <main className="h-full z-0">{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
