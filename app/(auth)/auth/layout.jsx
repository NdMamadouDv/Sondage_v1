import "@/app/globals.css";
import Link from "next/link";

// Bloquer l'acces à ceux qui sont déja connecté

export default function RootLayout({ children }) {
  return (
    <section className="h-full z-0  flex flex-col items-center justify-center bg-white">
      <nav className=" flex layout mt-6 ">
        <Link
          className=" font-Fjalla normal-case text-3xl text-primary hover:text-primary-focus hover:cursor-pointer"
          href="/"
        >
          ISurvey.com
        </Link>
      </nav>

      {children}
    </section>
  );
}
