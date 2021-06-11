import { Link } from "react-router-dom";
import CardLogic from "./CardLogic";
import "./card.css";

const Card = ({ id, name, image, stats }) => {
  const { printStats, titleCase } = CardLogic();
  return (
    <div className="card">
      <div
        className="cardImage"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="cardText">
        <Link className="link" to={`/details/${id}`}>
          <h2>{titleCase(name)}</h2>
        </Link>
      </div>
      <div className="cardStats">
        <div className="stat">
          <div className="type">Temperaments</div>
          <div className="value">
            {printStats(stats)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
