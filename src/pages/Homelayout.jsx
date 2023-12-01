import { Outlet } from "react-router-dom";
const Homelayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default Homelayout;
