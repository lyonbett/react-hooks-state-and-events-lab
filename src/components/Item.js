import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState("");

  function handleAddToCart() {
    setAdd((previousAdd) => (previousAdd === "" ? "" : "in-cart"));
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="in-cart" onClick={handleAddToCart}>
        {add === "" ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;