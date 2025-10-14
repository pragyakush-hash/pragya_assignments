import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./page_productcard.css";

// const Wrapper = ({ link = "", useNavigator, children, ...rest }) => {
//   const navigator = useNavigate();
//   return useNavigate ? (
//     <div
//       onClick={() => {
//         navigator(link);
//       }}
//       {...rest}
//     >
//       {children}
//     </div>
//   ) : (
//     <Link to={link} {...rest}>
//       {children}
//     </Link>
//   );
// };

// const ProductCard = ({ id, name, price, description, useNavigator = true }) => {
const ProductCard = ({ id, name, price, description }) => {
  const navigator = useNavigate();

  const handleEditClick = () => {
    navigator(`/products/${id}`);
  };

  return (
    // <Wrapper
    //   link={`products/${id}`}
    //   useNavigator={useNavigator}
    //   className="page_productcard"
    // >
    <div className="product-container">
      <div onClick={handleEditClick}>
        <h3>Card Detail</h3>
        <p>Name:-{name}</p>
        <p>Price-${price}</p>
        <p>{description}</p>
      </div>

      <div className="btn-btn">
        <button className="btn-edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="btn-addtocart">Add to cart</button>
      </div>
    </div>
    // </Wrapper>
  );
};

export default ProductCard;
