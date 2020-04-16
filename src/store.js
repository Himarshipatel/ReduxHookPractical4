import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./reducers";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(appReducer, enhancer);
const persistore = persistStore(store);

export { store, persistore };
