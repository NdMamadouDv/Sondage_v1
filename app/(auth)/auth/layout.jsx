import "@/app/globals.css";

// Bloquer l'acces à ceux qui sont déja connecté

export default function RootLayout({ children }) {
  return <section className="h-full z-0">{children}</section>;
}
