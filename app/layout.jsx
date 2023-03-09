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
  // console.log("layout de base", session);
  const accessToken = session?.access_token;
  return (
    <html lang="fr" data-theme="mytheme">
      <head />

      <body className="">
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={accessToken} />

          <main className="h-full z-0">{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
