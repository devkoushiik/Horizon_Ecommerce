import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList";
const ProductContainer = () => {
  const { products, meta } = useLoaderData();
  console.log(products, meta);
  return (
    <div>
      <ProductList />
      {/* <ProductsGrid /> */}
    </div>
  );
};
export default ProductContainer;
