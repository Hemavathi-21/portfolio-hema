import { Outlet } from "react-router-dom";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
