import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import "./landing.css";

const Landing = ({ message }) => {
  return (
    <div>
      <section className="landing">
        <h1 className="message">{message}</h1>
        <Link className="boxButton" to="/home">
          <Button
            type="button"
            buttonStyle="btn--gray--outline"
            buttonSize="btn--jumbo"
          >
            START
          </Button>
        </Link>
      </section>
      <Footer
        author={"Jorge Antonio Fernandez"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
    </div>
  );
};

export default Landing;
