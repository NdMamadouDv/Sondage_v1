import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="md:flex grid " data-theme="garden">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
