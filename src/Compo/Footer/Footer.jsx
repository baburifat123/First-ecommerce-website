import shopper from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={shopper} alt="" />
        <h1>SHOPPER</h1>
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
