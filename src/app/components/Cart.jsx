"use client";

import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Cart = ({ cart = [] }) => {
  const router = useRouter(); // Initialize router

  const totalPrice = cart.length
    ? cart.reduce((sum, item) => sum + item.price, 0)
    : 0;

  return (
    <div className="w-full p-3 bg-[#0077B6] rounded-md text-white flex justify-between items-center absolute bottom-10">
      <p>{cart.length} di Keranjang</p>
      <div className="flex gap-4 items-center">
        <p>Rp. {totalPrice.toLocaleString()}</p>
        <div
          className="p-2 bg-white rounded-md cursor-pointer"
          onClick={() => router.push("/checkout")} // Navigate to checkout
        >
          <LuArrowRight className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
