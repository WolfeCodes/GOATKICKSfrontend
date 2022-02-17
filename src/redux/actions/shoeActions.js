import * as actionTypes from "../constants/shoeConstants";
import axios from "axios";

//add baseURL to axios fetch
const baseURL = process.env.REACT_APP_BASEURL;

export const getShoes = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SHOES_REQUEST });

    const { data } = await axios.get(baseURL + "/api/shoes");
    console.log("Get shoes data", data);

    dispatch({
      type: actionTypes.GET_SHOES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SHOES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getShoeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SHOE_DETAILS_REQUEST });
    console.log("get shoe id", id)

    const { data } = await axios.get(baseURL + `/api/shoes/${id}`);

    dispatch({
      type: actionTypes.GET_SHOE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeShoeDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SHOE_DETAILS_RESET,
  });
};
