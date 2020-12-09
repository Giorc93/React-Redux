import axios from "axios";

//Create ducks

//Create constants

//Setting initial state. Depends on the type of data you'll be treating
const initialState = {
  array: [],
};

//These consts define the action type to be dispatched
const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";

//Create reducers

//Create a reducer function taking the initial state and an action as arguments.
//Initial state shouldn't be modified, instead, use functions as slice, concat or ... operator to return 'new' data and keep the inital state untouched.
export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//Create actions

//COnsuming API, using async - await to manage response. The action returns another callback function
//which takes dispatch and getState as arguments. Uses a try-catch method to handle the response/error and
//returns an object defining the action type and data 'payload'

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
