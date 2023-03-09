import SupabaseProvider from "@/components/supabase-provider";
import SupabaseListener from "@/components/supabase-listener";
import { createClient } from "@/utils/supabase-server";
import "server-only";

export const revalidate = 0;
export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  // console.log("layout", session);
  return (
    <html lang="fr" data-theme="mytheme">
      <head />

      <body className="">
        {/* Mettre en place la recuperation du questionnaire présente dans la base de donnée */}
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />

          <main className="h-full z-0">{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  );
}