import Exclusive from "./Exclusive/Exclusive";
import Hero from "./Hero/Hero";
import NewCollaction from "./NewCollaction/NewCollaction";
import Offer from "./Offer/Offer";
import Feuture from "./Women/Womens";

const Body = () => {
  return (
    <div>
      <Hero></Hero>
      <Feuture></Feuture>
      <Exclusive></Exclusive>
      <NewCollaction></NewCollaction>
      <Offer></Offer>
    </div>
  );
};

export default Body;
