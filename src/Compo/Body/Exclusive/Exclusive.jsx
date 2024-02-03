import exlusive from "../../../assets/exclusive_image.png";
import "./Exlusive.css";
const Exclusive = () => {
  return (
    <div className="exlusive">
      <div className="text">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ONE BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="image">
        <img src={exlusive} alt="" />
      </div>
    </div>
  );
};

export default Exclusive;
