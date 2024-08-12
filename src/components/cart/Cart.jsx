import { useCart } from "../../Context/cartContext";
import CartCard from "../cartCard/CartCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const {bill} =useCart();
  const cartProduct = useSelector((state) => state.cart.cartArray);
  return (
    <div>
      <div>
        {cartProduct.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-between items-center sticky z-50 botttom-0 mx-5">
        <h1 className="py-2 px-3 rounded-lg text-[#333333]
          text-lg font-medium">Total bill: ${bill.toFixed(2)}</h1>
        <Link to="/bill">
        <button
          className="border-4 py-2 px-3 rounded-lg text-[#333333]
          text-lg font-medium hover:bg-slate-300 my-3"
        >
          Buy Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
