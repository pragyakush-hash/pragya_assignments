import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./page_productcard.css";

const Wrapper = ({ link = "", useNavigator, children, ...rest }) => {
  const navigator = useNavigate();
  return useNavigate ? (
    <div
      onClick={() => {
        navigator(link);
      }}
      {...rest}
    >
      {children}
    </div>
  ) : (
    <Link to={link} {...rest}>
      {children}
    </Link>
  );
};

const ProductCard = ({ id, name, price, description, useNavigator = true }) => {
  return (
    <Wrapper
      link={`products/${id}`}
      useNavigator={useNavigator}
      className="page_productcard"
    >
      <div className="product-container">
        <h3>Card Detail</h3>
        <p>Name:-{name}</p>
        <p>Price-${price}</p>
        <p>{description}</p>
        <button>Edit</button>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
