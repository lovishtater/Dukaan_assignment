import Logo  from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container flex">
      <div >
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-links">
          <a>Sign In</a>
          <a className="button">Dukaan for PC</a>
      </div>
    </div>
  );
};

export default Navbar;
