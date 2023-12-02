import { Outlet } from "react-router-dom";
import { Header } from "../components";
const Homelayout = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>

      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};
export default Homelayout;
