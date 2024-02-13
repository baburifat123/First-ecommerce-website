import { FaArrowRight } from "react-icons/fa";
import hand from "../../../assets/hand_icon.png";
import hero from "../../../assets/hero_image.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="herosection">
      <div className="left">
        <h1 className="lg:text-lg font-medium ">NEW ARRIVALS ONLLY</h1>
        <div className="heros">
          <div className="hero1">
            <h1 className="text-6xl font-semibold">new</h1>
            <img className="" src={hand} alt="" />
          </div>
          <h1 className="text-6xl font-semibold">Collactions </h1>
          <h1 className="text-6xl font-semibold">for everyone</h1>
        </div>
        <div className="letest-collaction">
          <h1 className="text-lg font-medium text-white flex items-center gap-3">
            Letest Collaction <FaArrowRight></FaArrowRight>
          </h1>
        </div>
      </div>

      <div className="right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
