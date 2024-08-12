import React, { useEffect } from "react";
import Card from "../Card";
import { useSelector } from "react-redux";
import { useCart } from "../../Context/cartContext";

function Home() {
  const items = useSelector((state) => state.products.productArray);
  
  return (
    <div className="flex flex-wrap justify-center bg-[#F4F4F4] ">
      {items.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Home;
