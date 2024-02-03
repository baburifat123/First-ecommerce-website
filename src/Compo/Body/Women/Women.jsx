import "./Womens.css";
const Women = (props) => {
  return (
    <div className="item">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <h1>{props.name}</h1>

      <div className="price">
        <h1>{props.new_price}$</h1>
        <h1 className="line-through text-[#8c8c8c]">{props.old_price}$</h1>
      </div>
    </div>
  );
};

export default Women;
