import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {} from './../reducer/products'
import { addToCard } from '../actions/actionCreator';
class ProductItem extends React.Component {
  
  render(){
    const {product , addToCard} =  this.props
    return (
        <div style={{marginBottom: 20}}>
            <Product {...product}/>
            <button disabled={product.inventory > 0 ? '' : 'disabled'} onClick = {()=> addToCard(product.id)}>
                {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
            </button>
        </div> 
    )
  }

}

const mapDispatchToProps = dispatch => {
  return{
    addToCard : productId => dispatch(addToCard(productId))
  }
}


export default connect(null, mapDispatchToProps)(ProductItem);
