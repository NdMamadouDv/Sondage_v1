import Footer from "./Footer";
import "../globals.css";
import Navbar from "./Navbar";

export default function MarketingLayout({ children }) {
  return (
    <>
      <section className="z-0 bg-white flex flex-col " data-theme="mytheme">
        <Navbar />
        <div className="mt-8 ">{children}</div>
        <Footer />
      </section>
    </>
  );
}
