import "./cardDetails.css";

const CardDetails = ({
  id,
  name,
  image,
  height,
  weight,
  types,
  hp,
  speed,
  baseExperience,
  defense,
}) => {
  const pokemonTypes = types
    ? types.map(({ name }) => name).join(", ")
    : "No Types";
  return (
    <>
      <div className="detail--card">
        <div className="left--side-container">
          <div className="left--side-detail">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="img-container"
            />
            <div className="card--title">
              <h1>{name}</h1>
              <h3>ID: {id}</h3>
            </div>
          </div>
        </div>
        <div className="right-side-detail">
          <div className="info-right-side-container">
            <div className="temperaments-detail">
              <h2>Types</h2>
              <p>{pokemonTypes}</p>
            </div>
            <hr />
            <div className="card-detail">
              <h2>Height</h2>
              <div>
                <span>Height</span>
                <span>{height ?? "No detail"}</span>
                <span>|</span>
                <span>Weight:</span>
                <span>{weight ?? "No detail"}</span>
              </div>
            </div>
            <hr />
            <div className="card-detail">
              <h2>Weight</h2>
              <div>
                <span>Hp:</span>
                <span>{hp ?? "No detail"}</span>
                <span>|</span>
                <span>Speed:</span>
                <span>{speed ?? "No detail"}</span>
              </div>
            </div>
            <hr />
            <div className="card-detail">
              <h2>Life Span</h2>
              <div>
                <span>Defense:</span>
                <span>{defense ?? "No detail"}</span>
                <span>|</span>
                <span>Force:</span>
                <span>{baseExperience ?? "No detail"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
