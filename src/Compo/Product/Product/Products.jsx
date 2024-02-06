import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/Context";
import ProductDisply from "./ProductDisply";

const Products = () => {
  const { all_data } = useContext(ProductContext);
  const { id } = useParams();
  const product = all_data.find((e) => e.id === Number(id));
  return (
    <div>
      <ProductDisply product={product}></ProductDisply>
    </div>
  );
};

export default Products;
