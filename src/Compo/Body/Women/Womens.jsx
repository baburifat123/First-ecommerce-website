import data_product from "../../../assets/data";
import Women from "./Women";
import "./Womens.css";
const Womens = () => {
  return (
    <div id="feature" className="">
      <h1 className="text-5xl font-bold">POPULAR IN WOMEN</h1>
      <div className="hr"></div>
      <div className="product">
        {data_product.map((item, id) => (
          <Women
            key={id}
            props={item}
            id={item.id}
            img={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          ></Women>
        ))}
      </div>
    </div>
  );
};

export default Womens;
