import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";
const Homelayout = () => {
  return (
    <div>
      <nav>
        <Header />
        <Navbar />
      </nav>

      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};
export default Homelayout;
