import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Flag } from "../../assets/images/flag.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="top">
        <Logo />
        <div>
          <p>Contact</p>
          <p>FAQ&apos;s</p>
        </div>
        <div>
          <p>Tutorials</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Privacy</p>
          <p>Banned Items</p>
        </div>
        <div>
          <p>About</p>
          <p className="jobs">
            Jobs <span className="chip">3</span>
          </p>
        </div>
        <div>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className="bottom">
        <div> Dukaan 2020, All rights reserved.</div>
        <div> Made in <Flag /> </div>
      </div>
    </div>
  );
};

export default Footer;
