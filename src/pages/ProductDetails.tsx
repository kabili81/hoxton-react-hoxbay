import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productItem } from "./Home";

export function ProductDetalis() {
    const [product, setProducts] = useState<productItem | null>(null)
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
        .then(resp => resp.json())
        .then(prodactFromServer => setProducts(prodactFromServer))
    }, [])
    if (product === null) return <h2>Loading...</h2>
  return (
    <div>
      <section className="product-detail main-wrapper">
        <img
          src={product.image}
          alt={product.title}
        />
        <div
          className="product-detail__side"
          style={{borderColor: 'var(--yellow)' }}
        >
          <h3></h3>
          <h2>{product.title}</h2>
          <p>
           {product.description}
          </p>
          <p>£{product.price}</p>

          <button>Add to basket</button>
        </div>
      </section>
    </div>
  );
}
