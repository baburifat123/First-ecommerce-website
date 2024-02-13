import all_product from "../../../assets/data.js";
import Item from "../../Item";
const ReletedProduct = () => {
  return (
    <div className="releted">
      <h1 className="text-3xl font-bold my-5">Releted Product</h1>
      <div className="grid lg:grid-cols-4 gap-3">
        {" "}
        {all_product.map((item, id) => (
          <Item
            key={id}
            props={item}
            id={item.id}
            img={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default ReletedProduct;
