import React from 'react';
import Product from './Product';
import {} from './../reducer/products';
import {connect} from 'react-redux';
import { checkout} from './../actions/actionCreator'

class Card extends React.Component {
  
  render(){
    const { cardProducts, total, checkout} =  this.props;
    const hasProducts = cardProducts.length > 0 
    const nodes = hasProducts ? (
        cardProducts.map(prod => <Product key={prod.id} {...prod} inventory={prod.quantity} /> )
    ) : (
        <em>Please add some products to card..</em>
    )
    return (
        <div >
            <h1>Your Card</h1>
            <hr/>
            
           <div>
                {nodes}
            </div>

            <p>Total: ${total}</p>
            
            <button disabled={hasProducts ? '' : 'disabled'} onClick={checkout}>
                Check Out
            </button> 
        </div> 
    )
  }
}

const getCardProducts = state =>{
    return state.card.addedIds.map((id)=> {
        return{
            ...state.products[id],
            quantity : (state.card.quantityById[id] || 0 )
        }
        
    })
}

const getTotal = state => {
    return state.card.addedIds.reduce((total, id)=>  total + state.products[id].price * (state.card.quantityById[id] || 0),0)
}
const mapStateToProps = state => ({
    cardProducts : getCardProducts(state),
    total : getTotal(state)
})

const mapDispatchToProps = dispatch => ({
     checkout : () => dispatch(checkout())
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);
