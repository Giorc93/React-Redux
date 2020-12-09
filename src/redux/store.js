//Importing modules
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Importing reducers
import pokeReducer from "./pokeDucks";

//Combine reducers
//Adding reducers to rootReducer

const rootReducer = combineReducers({
  pokemons: pokeReducer,
  //example : exampleReducer
});

//Config. extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Exporting store (Using middleware)
export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
