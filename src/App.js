import React from "react";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Cart from "./Cart";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg?w=1380&t=st=1667323209~exp=1667323809~hmac=4c9c85b512522b85c802389275fbe9b6b5ea857583fe9a5f403849cc4aaa1f64',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?w=826&t=st=1667323307~exp=1667323907~hmac=2153fb473eedd1c5ea53b4930f4f8a50d8fa7606a67bdab9ec9347c36fc3b922',
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 4,
          img: 'https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?w=1060&t=st=1667323343~exp=1667323943~hmac=4013214d6fa2c5dd0b19f933b2ae87e36094730d54220591a9e94492572b5d0d',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Hey please dec the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
