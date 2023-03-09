import Footer from "./Footer";
import "../globals.css";
import Navbar from "./Navbar";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <section className="z-0 bg-white" data-theme="mytheme">
        <div className=" ">{children}</div>
        <Footer />
      </section>
    </>
  );
}
