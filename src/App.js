import React from 'react';
import shop from './api/shop';
import ProductList from './components/ProductsList'
import { connect } from 'react-redux';
import { receiveProducts } from './actions/actionCreator';
import Card from './components/Card';


class App extends React.Component {

  componentWillMount(){
    shop.getProducts((products)=> this.props.receiveProducts(products))
  }
  render(){
    console.log('huuyu:', this.props)
    return (
      <div>
          <h1>Welcome to Shopping Card Example</h1>
          <hr/>
          <ProductList />
          <hr/>
          <Card/>
      </div>
  
    );
  }
}


const mapDispatchToProps = dispatch => {
  return{
    receiveProducts : products => dispatch(receiveProducts(products))
  }
}

export default connect(null, mapDispatchToProps)(App);
