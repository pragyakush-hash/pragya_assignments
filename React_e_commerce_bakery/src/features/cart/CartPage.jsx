import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { viewAllCartItems } from "./cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(viewAllCartItems());
  }, []);
  const updateQuantity = (productId, newQty) => {
    handleAddToCart({
      productId,
      quantity: newQty,
    });
  };

  console.log(cartItems, "cartitemsssss");

  return (
    <div className="mt-20 p-4">
      <h1 className="text-2xl font-semibold mb-6">Cart Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center"
          >
            <Link to="">
              <img
                className="rounded-lg w-full h-40 object-cover"
                src={item.product.image}
                alt={item.product.name}
              />
            </Link>

            <h2 className="mt-3 text-lg font-semibold text-center truncate max-w-[160px]">
              {item.product.name}
            </h2>

            <p className="bg-amber-700 text-white mt-2 text-sm px-3 py-1 rounded-lg truncate max-w-[150px]">
              {item.product.category}
            </p>
{/* 
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() =>
                  updateQuantity(item.product._id, item.quantity - 1)
                }
                className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1 rounded-lg"
              >
                –
              </button>

              <span className="text-lg font-semibold">{item.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity(item.product._id, item.quantity + 1)
                }
                className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1 rounded-lg"
              >
                +
              </button>
            </div> */}

            <button
              onClick={() =>
                handleAddToCart({
                  productId: item.product._id,
                  quantity: 1,
                })
              }
              className="bg-amber-900 hover:bg-amber-800 text-white mt-4 px-4 py-2 w-full rounded-lg font-medium"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
