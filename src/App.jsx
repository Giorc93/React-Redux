import React from "react";

//Importing components
import PokemonsComponent from "./components/PokemonsComponent";

//Import generateStore
import generateStore from "./redux/store";

//Import provider
import { Provider } from "react-redux";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <PokemonsComponent />
    </Provider>
  );
}

export default App;
