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
    <>
      <button
        className="w-[80px] h-[22px] rounded-md bg-red-500 text-black text-sm"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div>
        {cart.map((item) => (
          <FoodItem {...item} />
        ))}
      </div>
    </>
  );
}

export default Cart;
