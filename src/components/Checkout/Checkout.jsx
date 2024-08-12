import React from "react";
import { useCart } from "../../Context/cartContext";


function Checkout() {
    const {bill} = useCart();
  return (
    <div
      id="body"
      className="flex  text-[#333333]  text-lg font-medium bg-[#F4F4F4] h-screen"
    >
     <div className="flex flex-col text-center my-40">
     <h1 className="my-5 text-4xl ">Your order has been placed</h1>
      <p className="mx-40 text-xl my-5 ">
        Thank you for choosing our services! We truly appreciate your purchase
        and support. Your order is now being processed, and we’re working hard
        to get it to you quickly. If you need any assistance, our team is here
        to help.
      </p>
      <h1>Your Bill Was</h1>
      <h1 className="text-2xl font-semibold">${bill.toFixed(2)}</h1>
     </div>
    </div>
  );
}

export default Checkout;
