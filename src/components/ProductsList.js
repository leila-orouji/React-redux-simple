import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
// import  products  from '../reducer/products';


class ProductList extends React.Component {

 
  render(){
    const {products } =  this.props
    return (
        <div>
            <h2>Product List</h2>
            {products.map(prod =>{
                return(
                    <ProductItem key={prod.id} product={prod}/>
                )
            })}
        </div>
    )
  }
}

const getProducts = pr => {
  console.log('products: ', pr)
  return Object.keys(pr).map((id)=> pr[id])
}
const mapStateToProps = (state)=>{
  console.log('state.products: ',state.products)
  return {
    products : getProducts(state.products)
  }
}
export default connect(mapStateToProps)( ProductList);
