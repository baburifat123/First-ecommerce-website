import "./NewCollaction.css";
const NewCollactions = (propss) => {
  return (
    <div className="pro">
      <div className="img">
        <img src={propss.img} alt="" />
      </div>
      <h1>{propss.name}</h1>
      <div className="flex gap-4 right">
        <h1>{propss.new_price}$</h1>
        <h1 className="line-through text-[#8c8c8c]">{propss.old_price}$</h1>
      </div>
    </div>
  );
};

export default NewCollactions;
