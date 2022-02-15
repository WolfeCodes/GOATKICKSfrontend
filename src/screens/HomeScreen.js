import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Shoe from "../components/Shoe";

// Actions
import { getShoes as listShoes} from '../redux/actions/shoeActions';

const HomeScreen = () => {

  const dispatch = useDispatch();

  const getShoes = useSelector(state => state.getShoes);
  const { shoes, loading, error } = getShoes;

  useEffect(() => {
    dispatch(listShoes())
  }, [dispatch])

  return (
    <div className="homescreen">
      {" "}
      HomeScreen
      <h2 className="homescreen__title">Latest Realeases</h2>
      <div className="homescreen__shoes">
        {loading ? (
        <h2>Loading...</h2>
        ) : error ? ( 
        <h2>{error}</h2> 
        ) :( 
          shoes.map((shoe) => <Shoe 
            key={shoe._id}  
            shoeId={shoe._id}
            name={shoe.name}
            color={shoe.color}
            size={shoe.size}
            price={shoe.price}
            imageUrl={shoe.imgUrl}
          />)
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
