import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="h1">Sondage.com</h1>
      <h2 className="h2">Bienvenue sur la page d'accueil</h2>
    </main>
  );
}
