
import * as actionTypes from './../actions/actionTypes';

const products = (state = {}, action)=>{
    console.log ('action type:',action.type)
    switch (action.type) {
        case actionTypes.RECEIVE_PRODUCTS:
            console.log(state)
            return{
                ...state,
                ...action.products.reduce((obj, product)=> {
                    obj [product.id] = product;
                    return obj
                },{})
            }
        case actionTypes.ADD_TO_CARD:
            console.log('action: ', action)
            console.log('state: ', state)
            const {productId} = action;
            const product = state[productId];
            return{
                 ...state,
                 [productId] : {
                     ...product, 
                     inventory: product.inventory-1
                 }
            }
    
    
        default:
            return state;
    }
}
export default products;