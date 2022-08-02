import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster;
}

const Card = ({ monster}: CardProps ) => (

  <div className="card-container" key={monster.id}>
    <img
      alt={`monster ${monster.name}`}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export default Card;
