import "./Shoe.css";
import { Link } from "react-router-dom";

const Shoe = ({ imageUrl, name, color, price, size, shoeId }) => {
  return (
    <div className="shoe">
      <img src={imageUrl} alt={name} />

      <div className="shoe__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{color.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/shoe/${shoeId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Shoe;
