import * as actionTypes from '../constants/shoeConstants';

export const getShoesReducer = (state = { shoes: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOES_REQUEST:
            return {
                loading: true,
                shoes: []
            }
        case actionTypes.GET_SHOES_SUCCESS:
            return {
                loading: false,
                shoes: action.payload
            }
        case actionTypes.GET_SHOES_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getShoeDetailsReducer = (state = { shoe: {}}, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOE_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_SHOE_DETAILS_SUCCESS:
            return {
                loading: false,
                shoe: action.payload
            }
        case actionTypes.GET_SHOE_DETAILS_FAIL:
            return {
                loading: false,
                shoe: action.payload
            }
        case actionTypes.GET_SHOE_DETAILS_RESET:
            return {
                shoe: {},
            }
        default:
            return state;  
    }
}