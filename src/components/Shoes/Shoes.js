import React from "react";
import { useSelector } from 'react-redux';
import Shoe from './Shoe/Shoe';
import useStyles from "./styles";


const Shoes = () => {
  const shoes = useSelector((state) => state.shoes)
  const classes = useStyles();

  console.log(shoes);
  
  return (
    <>
      <h1>SHOES</h1>
      <Shoe />
      <Shoe />
    </>
  );
};

export default Shoes;
