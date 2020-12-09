//Importing modules
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Importing reducers
import pokeReducer from "./pokeDucks";

//Combine reducers

//Adding reducers to rootReducer to create a single reducer as an object.
const rootReducer = combineReducers({
  pokemons: pokeReducer,
  //example : exampleReducer
});

//Config. extension (Chrome extension to manage ducks)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Exporting store (Using middleware)

// generateStore function creates the store and supports middleware. In this case 'thunk'. It returns the store
export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
