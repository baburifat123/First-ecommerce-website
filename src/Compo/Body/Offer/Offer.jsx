import "./Offer.css";
const Offer = () => {
  return (
    <div className="offers">
      <h1 className="h1">Get Exclusive Offers On Your Email</h1>
      <p className="p">Subscribe TO Our Newsletter An Stay Update</p>

      <div className="email">
        <input className="input" placeholder="Enter Your Email" type="text" />
        <button className="button">Subscribe</button>
      </div>
    </div>
  );
};

export default Offer;
