"use client";
import { createClient } from "@/utils/supabase-browser";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Feature2 from "./Feature2";
import Hero from "./Hero";

export default function Home() {
  const supabase = createClient();
  // const { data } = await supabase.from("User").select("*");
  // console.log({ data });

  return (
    <main className=" flex flex-col space-y-6 layout">
      <Hero />

      {/* <Teams /> */}

      <Feature />
      <Feature2 />
      <FAQ />
    </main>
  );
}
