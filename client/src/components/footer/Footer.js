import FooterLogic from "./FooterLogic";
import "./footer.css";

const Footer = ({ author, description }) => {
  const { printIcons } = FooterLogic();
  return (
    <footer>
      <div className="footer-content">
        <h3>{author}</h3>
        <p className="footer--description">{description}</p>
        <ul className="socials">{printIcons()}</ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2021</p>
      </div>
    </footer>
  );
};

export default Footer;
