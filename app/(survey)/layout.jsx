import Footer from "./Footer";
import "../globals.css";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="mytheme">
      <head />

      <body className="">
        <Navbar />
        <main className="min-h-screen z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
