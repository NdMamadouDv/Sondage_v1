import FAQ from "./FAQ";
import Feature from "./Feature";
import Feature2 from "./Feature2";
import Hero from "./Hero";
import { createClient } from "@/utils/supabase-server";
import "server-only";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("marketing page:", session);

  return (
    <div className=" flex flex-col space-y-6 layout">
      <Hero />

      {/* <Teams /> */}

      <Feature />
      <Feature2 />
      <FAQ />
    </div>
  );
}
