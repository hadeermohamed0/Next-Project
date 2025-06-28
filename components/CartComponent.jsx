"use client";
import useCart from "@/store/cartStore";
import React from "react";

const CartComponent = () => {
  const { cart } = useCart();
  return (
    <span className="absolute -top-1 -right-1 bg-yellow-300 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full z-9">
      {cart.length}
    </span>
  );
};

export default CartComponent;
