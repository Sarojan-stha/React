import { useState } from "react";

export default function AddToCart() {
  const [selectItem, setSelectItem] = useState([]);

  const items = [
    { name: "Item 1", id: "1" },
    { name: "Item 2", id: "2" },
    { name: "Item 3", id: "3" },
    { name: "Item 4", id: "4" },
    { name: "Item 5", id: "5" },
    { name: "Item 6", id: "6" },
  ];

  function addItem(id) {
    const addedItem = items.find((item) => item.id === id);
    setSelectItem([...selectItem, addedItem]);
  }

  function removeItem(id) {
    const filteredCart = selectItem.filter((item) => item.id !== id);
    setSelectItem(filteredCart);
  }

  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name} </span>
            <button onClick={() => addItem(item.id)}>Add to Cart</button>
            <br />
          </div>
        );
      })}

      <h4>Your Cart</h4>
      {selectItem.map((item) => {
        return (
          <>
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <br />
          </>
        );
      })}
    </>
  );
}
