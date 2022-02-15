import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = () => {
  return <div className="cartitem">
      <div className="cartitem__image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngLllFyVnGOzMormjvcX_w1AF9U5KyjrDUCJuDoN7K246iZNKS-MzWaFimE9S1z-o4V4&usqp=CAU" alt="shoe name" />
      </div>

      <Link to={`/shoe/${111}`} className="cartItem__name">
        <p>Shoe 1</p>
      </Link>
    

    <p className="cartitem__price">$399.99</p>

    <select className="cartItem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>

    <button className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
    </button>
    </div>;
}

export default CartItem;