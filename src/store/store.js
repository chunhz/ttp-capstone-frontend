import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     composeWithDevTools(applyMiddleware(...middleware)),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(logger, thunk));
const store = createStore(rootReducer, middleware);
export default store;
