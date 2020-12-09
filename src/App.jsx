import React from "react";

//Importing components
import PokemonsComponent from "./components/PokemonsComponent";

//Import generateStore to pass it as prop to provider
import generateStore from "./redux/store";

//Import provider - Alllows components to access store.Components must be loaded inside Provider tag, store passed as prop
import { Provider } from "react-redux";

function App() {
  //Calling generateStore to retrieve store data.
  const store = generateStore();

  return (
    <Provider store={store}>
      <PokemonsComponent />
    </Provider>
  );
}

export default App;
