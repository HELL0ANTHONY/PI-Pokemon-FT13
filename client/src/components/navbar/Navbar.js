import { Link } from "react-router-dom";
import { NavbarLogic } from "./NavbarLogic";
import "./navbar.css";

const Navbar = () => {
  const { showLinks, setShowLinks } = NavbarLogic();
  return (
    <header className="header">
      <Link className="link" to="/">
        <div className="imgBox" />
      </Link>
      <div className="navbar">
        <div className="left-side">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/form">
              New Pokemon
            </Link>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
