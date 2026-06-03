"use client";
import { useState } from "react";
import { food_items } from "./Search";

export default function Sort() {
  const [order, setOrder] = useState("default");

  const filteredItems = [...food_items];
  if (order === "low-to-high") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (order === "high-to-low") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <h1>Filter Food Items</h1>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-to-high">Low-High</option>
        <option value="high-to-low">High-Low</option>
      </select>

      <ul>
        {filteredItems.map((food) => (
          <li key={food.id}>
            {food.name} - ${food.price}
          </li>
        ))}
      </ul>
    </>
  );
}
