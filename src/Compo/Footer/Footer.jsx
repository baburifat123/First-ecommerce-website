import shopper from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-4">
      <div className="flex item-center">
        <img src={shopper} alt="" />
        <h1 className="text-5xl font-bold">SHOPPER</h1>
      </div>
      <div className="prodcut">
        <h1>Company</h1>
        <h1>Product</h1>
        <h1>About</h1>
        <h1>Office</h1>
        <h1>Contact</h1>
      </div>
      <div className="icon">
        <FaLinkedin className=""></FaLinkedin>
        <FaGithub></FaGithub>
        <FaInstagram></FaInstagram>
      </div>
    </div>
  );
};

export default Footer;
