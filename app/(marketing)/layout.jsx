import Footer from "./Footer";
import "../globals.css";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="mytheme">
      <head />

      <body className="">
        <div className=" z-0 bg-white">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
