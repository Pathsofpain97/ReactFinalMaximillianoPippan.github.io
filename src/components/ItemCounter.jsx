import { useState } from "react";

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <>
      <div className="containerc mb-4">
        <div className="resta" onClick={handleDecreaseCount}>
          ➖
        </div>
        <input type="number" value={count} readOnly/>
        <div className="suma" onClick={handleIncreaseCount}>
          ➕
        </div>
        <button className="btn btn-light mt-2" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};