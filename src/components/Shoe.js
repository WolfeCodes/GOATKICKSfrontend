import './Shoe.css';
import {Link} from 'react-router-dom';

const Shoe = () => {
  return (
    <div className="shoe">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngLllFyVnGOzMormjvcX_w1AF9U5KyjrDUCJuDoN7K246iZNKS-MzWaFimE9S1z-o4V4&usqp=CAU" alt="shoe name "/>

      <div className="shoe__info">
          <p className="info__name">Shoe 1</p>
          <p className="info__description">
              white/black Jordans
          </p>

          <p className="info__price">$399.99</p>

          <Link to={`/shoe/${1111}`} className="info__button">
            View
          </Link>
      </div>
    </div>
  )
}

export default Shoe;
