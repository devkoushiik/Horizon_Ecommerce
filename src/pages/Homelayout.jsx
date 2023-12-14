import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";
const Homelayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <nav>
        <Header />
        <Navbar />
      </nav>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};
export default Homelayout;
