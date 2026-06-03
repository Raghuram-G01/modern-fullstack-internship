"use client";

import { useState} from "react";
import { food_items } from "./Search";

export default function Filter() {
  const [category, setCategory] = useState("All");
  let filteredItems = [...food_items];

  if (category !== "All") {
    filteredItems = food_items.filter((food) => food.category === category);
    
  }

  return (
    <>
      <h1>Filter Food Items</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
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
