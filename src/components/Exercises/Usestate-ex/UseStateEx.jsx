import { useState } from "react";

export default function UseStateEx() {
  const initialState = [
    { id: 1, name: "Puma" },
    { id: 2, name: "Nike" },
    { id: 3, name: "Addidas" },
    { id: 4, name: "Fila" },
    { id: 5, name: "Reebook" },
  ];

  const [brand, setBrand] = useState(initialState);
  function searchBrand(event) {
    const value = event.target.value;
    setBrand();
  }

  return (
    <>
      <input
        onChange={searchBrand}
        type="text"
        placeholder="Enter name of brand"
      />
      <button>search</button>
      <ul>
        {brand.map((brand) => {
          return <li key={brand.id}>{brand.name}</li>;
        })}
      </ul>
    </>
  );
}
