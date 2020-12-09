import axios from "axios";

//Create ducks

//Create constants

const initialState = {
  array: [],
};

const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";

//Create reducers

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//Create actions

export const getPokemonsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
