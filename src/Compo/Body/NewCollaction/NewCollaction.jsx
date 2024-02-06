import new_collections from "../../../assets/new_collections";
import Item from "../../Item";
import "./NewCollaction.css";
const NewCollaction = () => {
  return (
    <div>
      <div className="newcollaction ">
        <h2 className="text-5xl font-bold">NEW COLLACTION</h2>
        <div className="hr mb-20"></div>
        <div className="products grid lg:grid-cols-4 gap-4">
          {new_collections.map((item, id) => (
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
    </div>
  );
};

export default NewCollaction;
