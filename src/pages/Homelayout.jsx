import { Outlet } from "react-router-dom";
const Homelayout = () => {
  return (
    <div>
      <nav>
        <span className="text-4xl text-primary">SH</span>
      </nav>

      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};
export default Homelayout;
