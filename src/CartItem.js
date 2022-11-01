import React from "react";

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: "Mobile Phone",
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }
    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    // promise.then(() => {
    //     // setState acts like a synchronous call
    //     this.setState({ qty: this.state.qty + 10 });
    //     this.setState({ qty: this.state.qty + 10 });
    //     this.setState({ qty: this.state.qty + 10 });
    //     console.log('state', this.state);
    // });
    // }
    
    // increaseQuantity = () => {  // arrow function
    //     // console.log('this', this.state);
    //     // {this.state.qty += 1}
        
    //     // setState form 1

    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2 - if prevState required use this

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }
    // decreaseQuantity = () => {
    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }
    
  render() {
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">{/* Buttons */}</div>
          <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
            // onClick={this.increaseQuantity.bind(this)}
            //  onClick={()=>{ this.props.onIncreaseQuantity(this.props.product)}}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
            // onClick={()=>{ this.props.onDecreaseQuantity(this.props.product)}}
            onClick={() => onDecreaseQuantity(product)}
          />
          <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" 
            // onClick = {() => {this.props.onDeleteProduct(this.props.product.id)}}
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    );
  }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;