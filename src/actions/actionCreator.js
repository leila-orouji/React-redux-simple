
import * as actionTypes from './actionTypes'

export const receiveProducts = products =>{
    return{
        type : actionTypes.RECEIVE_PRODUCTS,
        products
    }
}

export const addToCard = productId => {
    return{
        type: actionTypes.ADD_TO_CARD,
        productId
    }
}

export const checkout = () => ({
    type: actionTypes.CHECKOUT_REQUEST
})