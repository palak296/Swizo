import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../Utiles/cartSlice";
import FoodItem from "./FoodItem";

function Cart() {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Cart</h2>
      </div>
      <div className="max-w-2xl mx-auto my-10">
        {cart.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-black-400 text-lg font-medium text-center bg-[#FFF8E1] p-4 rounded-md shadow-md">
              Please add products to your cart.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-5">
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 transition duration-300"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
            </div>
            {cart.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
