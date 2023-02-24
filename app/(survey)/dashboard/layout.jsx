import Footer from "../Footer";
import "../../globals.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="garden">
      <head />

      <body className="">
        <Navbar />
        <main className="h-full z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
