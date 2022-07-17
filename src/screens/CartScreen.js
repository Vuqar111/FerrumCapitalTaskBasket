import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import { AiFillDelete} from "react-icons/ai";


export default function CartScreen(props) {
  const productId = props.match.params.id;
  
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const removeFromCartHandler = (id) => {
    // action which delete cart
    dispatch(removeFromCart(id));
  };




  
  return (
    <div className="rowcart">
      <div className="cartscreen">
        <h1>Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Your cart is empty. <Link to="/search/name">Alış-verişə başla</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="rowcarting">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cartimg"
                    ></img>
                  </div>
                  <div>
                    <Link to={`/product/${item.product}`}>{item.title}</Link>
                  </div>

               <div>{item.product}</div>
                  
                  <div>{item.price}$</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
