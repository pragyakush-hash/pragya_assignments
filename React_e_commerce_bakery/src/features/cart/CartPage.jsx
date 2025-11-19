// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { addToCart, deleteItemFromCart, viewAllCartItems } from "./cartSlice";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { cartItems, isLoading } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(viewAllCartItems());
//   }, [dispatch]);

//   const updateQuantity = (productId, newQty) => {
//     if (newQty < 1) return; // prevent negative qty
//     dispatch(addToCart({ productId, quantity: newQty }));
//   };

//   const handleDeleteToCart = (cartItemId) => {
//     dispatch(deleteItemFromCart(cartItemId));
//   };

//   if (isLoading) return <h2 className="text-center mt-20">Loading...</h2>;

//   return (
//     <div className="mt-20 p-4">
//       <h1 className="text-2xl font-semibold mb-6">Cart Items</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg text-gray-600">Your cart is empty</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cartItems.map((item) => (
//             <CartItem
//               item={item}
//               handleDeleteToCart={handleDeleteToCart}
//               key={item._id}
//               updateQuantity={updateQuantity}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemFromCart, viewAllCartItems } from "./cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    dispatch(viewAllCartItems());
  }, [dispatch]);

  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) return;
    dispatch(addToCart({ productId, quantity: newQty }));
  };

  const handleDeleteToCart = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * (item.product?.price || 0), 0);

  if (isLoading) return <h2 className="text-center mt-20">Loading...</h2>;

  return (
    <div className="mt-20 p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
                <Link to="">
                  <img src={item.product?.image} alt={item.product?.name} className="rounded-lg w-full h-40 object-cover" />
                </Link>

                <h2 className="mt-3 text-lg font-semibold text-center truncate max-w-[160px]">
                  {item.product?.name}
                </h2>

                <p className="text-gray-700 mt-1 text-sm">Category: {item.product?.category}</p>
                <p className="text-lg font-bold text-amber-800 mt-2">₹ {item.product?.price ?? 0}</p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                    className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1 rounded-lg"
                  >
                    –
                  </button>

                  <span className="text-lg font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                    className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1 rounded-lg"
                  >
                    +
                  </button>
                </div>

                <p className="mt-2 text-sm font-medium text-gray-800">Subtotal: ₹ {item.quantity * (item.product?.price ?? 0)}</p>

                <button
                  onClick={() => handleDeleteToCart(item._id)}
                  className="bg-red-600 hover:bg-red-700 text-white mt-4 px-4 py-2 w-full rounded-lg font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-3 text-lg">
              <span>Total Amount:</span>
              <span className="font-bold text-amber-800">₹ {totalAmount}</span>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg font-semibold mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {showCheckout && <CheckoutForm onClose={() => setShowCheckout(false)} />}
    </div>
  );
};

export default CartPage;


const CheckoutForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Address" className="w-full border p-2 rounded" />
          <input type="text" placeholder="City" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Pincode" className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded">
            <option>Payment Method</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
          </select>

          <button className="bg-amber-800 hover:bg-amber-900 text-white w-full py-3 rounded-lg font-semibold">Place Order</button>
        </form>

        <button onClick={onClose} className="mt-4 w-full text-center text-red-600 font-semibold">Cancel</button>
      </div>
    </div>
  );
};