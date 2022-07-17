import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart,  } from "../actions/cartActions";
export default function Product(props) {
  const { product } = props;

  console.log(product) 

  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <img className="productcartimg" src={product.image} alt={product.title} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
          <h2>{product.title}</h2>
        </Link>
        <div className="price">${product.price}</div>
        <button
                        onClick={addToCartHandler}
                        type="button"
                        className="addbtn"
                      >
                        <p className="text-white text-base font-semibold text-[30px] carttext">
                          Karta əlavə et
                        </p>
                      </button>
      </div>
    </div>
  );
}
