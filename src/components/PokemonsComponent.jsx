import React, { Fragment } from "react";

//Importing redux hooks
//useDispatch allows to execute the action and useSelector allows to read initialState
import { useDispatch, useSelector } from "react-redux";

//Importing actions (dispatch arguments)
import { getPokemonsAction } from "../redux/pokeDucks";

const PokemonsComponent = () => {
  //Creating dispatch const
  const dispatch = useDispatch();

  const pokemons = useSelector((store) => store);
  console.log(pokemons);

  return (
    <Fragment>
      <h2>Pokemons List</h2>
      {/*Calling dispatch fn. Executing dispatch passing the action as argument. Action is a function */}
      <button onClick={() => dispatch(getPokemonsAction())}>
        Get Pokemons
      </button>
    </Fragment>
  );
};

export default PokemonsComponent;
