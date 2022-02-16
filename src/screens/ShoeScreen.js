import './ShoeScreen.css'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';


//Actions
import { getShoeDetails } from '../redux/actions/shoeActions';
import { getShoes } from '../redux/actions/shoeActions';
import { addToCart } from '../redux/actions/cartActions';

const ShoeScreen = ({match}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [qty, setQty, size, setSize] = useState(1);

  const shoeDetails = useSelector((state) => state.getShoeDetails);
  const {loading, error, shoe} = shoeDetails
  
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getShoeDetails(id));
  },[dispatch, match])

  const addToCartHandler = () => {
    dispatch(addToCart(shoe._id, qty));
    navigate(`/cart`);
  };

  return (
    <div className="shoescreen">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
        <div className="shoescreen__left">
        <div className='left__image'>
          <img 
            src={shoe.imgUrl} 
            alt={shoe.name} 
          />
        </div>

        <div className="left__info">
          <p className="left__name">
            {shoe.name}
          </p>
          <p>{shoe.color}</p>
        </div>
      </div>
      <div className="shoescreen__right">
        <div className="right__info">
          <p>
            Price: <span>{shoe.price}</span>
          </p>
          <p>
                Size
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {[...Array(shoe.size).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
          <p>
            Status: <span>{shoe.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
          </p>
          <p>
              Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(shoe.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
          <p>
            <button type="button" onClick={addToCartHandler}>Add to Cart</button>
          </p>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default ShoeScreen;
