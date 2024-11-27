import React, { useState } from "react";
import Cartitem from "./Cartitem";
import { useEffect } from "react";

export default function Cart({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    const copy = [...cart];
    setCartCopy(copy);
  }, []);

  return (
    <div className=" justify-between container mx-auto mt-[2em] mb-[2em] flex">
      <div>
        <div className="flex items-center justify-between border-solid border-b-[2px] border-[#928E8E] shadow-lg p-6 w-[800px]">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>

        <div className="shadow-md">
          {cart &&
            cart.map((item) => {
              return (
                <Cartitem
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  cartCopy={cartCopy}
                  setCartCopy={setCartCopy}
                />
              );
            })}
        </div>
      </div>

      <div className="max-w-[500px]  border rounded-lg shadow-md p-4 h-[50%]">
        <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
        <p htmlFor="promo-code" className="block text-sm font-medium mb-1">
          Have a promo code? Apply here
        </p>
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="promo-code"
            placeholder="Promo Code (optional)"
            className="w-full border rounded-l-lg px-[10px] py-[10px] focus:outline-none "
          />
          <button className="bg-[#45C9A1] text-white px-[10px] py-[11px] rounded-r-md hover:bg-[#45C9A1]">
            Apply
          </button>
        </div>
        <div className="text-sm mb-2 flex justify-between">
          <span>Subtotal</span>
          <span>KSh 16,000</span>
        </div>
        <div className="text-sm mb-4 flex justify-between">
          <span>Delivery Fee</span>
          <span>KSh 450</span>
        </div>
        <div className="text-lg font-bold mb-4 flex justify-between">
          <span>Total</span>
          <span>KSh 16,450</span>
        </div>
        <button className="w-full bg-[#45C9A1] text-white py-2 rounded-md font-semibold hover:bg-teal-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
