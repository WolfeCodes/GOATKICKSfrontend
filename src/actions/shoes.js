import * as api from '../api';

// Action Creators functions that return actions
export const getShoes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShoes();
        
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch(error){
        console.log(error.message)
    }
}
