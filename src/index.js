import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./Components/App";
import rootReducer from "./Reducers";
import {loadState, saveState} from "./utils/localStorage";
import "./styles/tailwind.css";

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(saveState)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
