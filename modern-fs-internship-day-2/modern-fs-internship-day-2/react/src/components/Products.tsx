import { useEffect, useState } from "react";

type Products = {
  id: number;
  title: string;
  category: string;
  price: number;
};
function Products() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  async function getProductData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    getProductData();
  }, []);
  if (loading) {
    return <h1>Products are Loading...</h1>;
  }
  if (error) {
    return <h1>Error fecthing the data</h1>;
  }
  return (
    <div>
      <h1>Products</h1>
      <hr></hr>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Title: {product.title}</h2>
          <h3>Category: {product.category}</h3>
          <p>Price: {product.price}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
export default Products;
