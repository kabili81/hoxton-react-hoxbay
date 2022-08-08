import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export type productItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};
export function Home() {
  const [products, setProducts] = useState<productItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product) => (
          <li className="product-item">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
