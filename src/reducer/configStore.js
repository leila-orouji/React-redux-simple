import {combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import products from "./products";
import card from "./card"


export const configStore =  ()=>{
    const store = createStore(
        combineReducers({
            products : products,
            card : card
        }) , composeWithDevTools(applyMiddleware(thunk, logger))
    )
    return store;
}