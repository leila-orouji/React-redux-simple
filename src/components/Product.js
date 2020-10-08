import React from 'react';

class Product extends React.Component {

 
  render(){
    const { title, price, inventory} =  this.props
    return (
        <div style={{marginBottom: 20}}>
            <p>{title}- ${price} * ${inventory}  </p>
        </div> 
    )
  }

}

export default Product;
