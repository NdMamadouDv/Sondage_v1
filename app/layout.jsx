import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="mytheme">
      <head />

      <body>
        <Navbar />
        <main className="h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
