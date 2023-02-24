import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="h1">Sondage.com</h1>
      <h2 className="h2 text-center">Bienvenue sur la page d'accueil</h2>
      <Link href="dashboard" className="btn btn-primary text-white btn-lg">
        {" "}
        Créer mon sondage
      </Link>
    </main>
  );
}
