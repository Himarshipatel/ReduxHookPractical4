import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./view/home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
