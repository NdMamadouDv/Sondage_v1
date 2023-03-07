import Feature from "./Feature";
import Feature2 from "./Feature2";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className=" flex flex-col space-y-6 layout">
      <Hero />

      {/* <Teams /> */}

      <Feature />
      <Feature2 />
    </main>
  );
}
