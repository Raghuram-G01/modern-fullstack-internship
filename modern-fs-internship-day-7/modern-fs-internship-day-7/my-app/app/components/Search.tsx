"use client";
import { useState } from "react";
export const food_items = [
  {
    id: 1,
    name: "Pizza",
    price: 10.99,
    category: "veg",
  },
  {
    id: 2,
    name: "Burger",
    price: 8.99,
    category: "non-veg",
  },
  {
    id: 3,
    name: "Pasta",
    price: 12.99,
    category: "veg",
  },
  {
    id: 4,
    name: "Donut",
    price: 15.99,
    category: "veg",
  },
  {
    id: 5,
    name: "Dosa",
    price: 7.99,
    category: "veg",
  },
];
function SearchFoodItems() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState<
    {
      id: number;
      name: string;
      price: number;
      category: string;
    }[]
  >([]);

  function handleSearch() {
    const result =
      search === ""
        ? []
        : food_items.filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase()),
          );

    setFilteredItems(result);
  }

  return (
    <>
      <h1>Search Food Items</h1>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredItems.map((food) => (
          <li key={food.id}>
            {food.name} - ${food.price}
          </li>
        ))}
      </ul>
      <br />
      <br />
    </>
  );
}

export default SearchFoodItems;
