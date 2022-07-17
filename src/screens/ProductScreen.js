import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import styled from "styled-components";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const countInStock = 10;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, qty));
  };

  return (
    <Wrapper>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <Link to="/">Return to Home Page</Link>
            <div className="main">
              <div className="productimg">
                <img src={product.image} alt={product.title}></img>
              </div>
              <div className="content ">
                <h1 className="productname">{product.title}</h1>
                <h3 className="">{product.price} Azn</h3>
                <p className="">{product.description}</p>

                <>
                  <li>
                    <button
                      onClick={addToCartHandler}
                      type="button"
                      className="addbtn"
                    >
                      <p className="text-white text-base font-semibold text-[30px] carttext">
                        Karta əlavə et
                      </p>
                    </button>
                  </li>
                </>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margn-bottom: 50px;
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .main {
    display: flex;
    width: 100%;
  }
  .productname {
    font-size: 45px;
    font-weight: bold;
    margin: 0px;
  }
  select {
    border: 1px solid black;
  }
  .productimg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 550px;
    background-color: #f6f6f4;
  }
  .productimg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    width: 50%;
    margin-left: 30px;
    padding: 20px;
  }
  .carttext {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    width: 95%;
    .main {
      flex-direction: column;
    }
    .content {
      width: 100%;
      margin-left: 0px;
    }
    .accordion {
      width: 100%;
    }
    .productname {
      font-size: 25px;
      font-weight: bold;
    }
    .carttext {
      font-size: 15px;
    }
    .productimg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      background-color: #f6f6f4;
    }
  }
`;
