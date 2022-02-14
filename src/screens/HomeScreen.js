import "./HomeScreen.css";
import Shoe from "../components/Shoe"

const HomeScreen = () => {
  return ( 
    <div className="homescreen"> HomeScreen
      <h2 className="homescreen__title">Latest Realeases</h2>
        <div className="homescreen__shoes">
    <Shoe />
    <Shoe />
    <Shoe />
    <Shoe />
    <Shoe />
    <Shoe />
    </div>
   </div>
  )};

export default HomeScreen;
