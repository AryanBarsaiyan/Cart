import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img }/>
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
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;