import CardForm from "./components/CardForm";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        setProducts(v.products);
      });
  }, []);
  //  [deps] : 배열의 값이 변경될때마다 useEffect 다시 실행

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "30px",
      }}
    >
      {products.map((v) => (
        <CardForm {...v} />
      ))}
    </section>
  );
}

export default App;
