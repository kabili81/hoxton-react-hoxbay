import { useEffect, useState } from "react";
import { BasketItem } from "../components/types";
import { CategoryItems } from "./CategoryItems";

export function Basket() {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/basket?_expand=product")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function updateQuantity() {}

  let total = 0;
  for (let item of basket) {
    total += item.quantity * item.product.price;
  }

  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item) => (
          <li>
            <article className="basket-container__item">
              <img
                src={item.product.image}
                alt={item.product.title}
                width="90"
              />
              <p>{item.product.title}</p>
              <p>
                Qty:
                <select
                  value={item.quantity}
                  onChange={(event) => {
                    const newQuantity = Number(event.target.value);

                    if (newQuantity === 0) {
                      let basketCopy = basket.filter(
                        (taget) => taget.id !== item.id
                      );
                      setBasket(basketCopy);
                    } else {
                      const basketCopy: BasketItem[] = structuredClone(basket);

                      const match = basketCopy.find(
                        (target) => target.id === item.id
                      );
                      if (match) match.quantity = Number(event.target.value);
                      setBasket(basketCopy);
                    }
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>

              <p>
                Item total: £{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <h3>Your total: £{total.toFixed(2)}</h3>
    </section>
  );
}
