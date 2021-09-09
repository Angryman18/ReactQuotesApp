import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
    reducer, uiReducer
    
})

const store = createStore(rootReducer);

export default store;
