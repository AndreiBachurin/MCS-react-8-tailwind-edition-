import React, { useEffect, useState } from "react";
import AddItem from "./AddItem.js";
import Item from "./Item.js";
import ItemsList from "./ItemsList.js";

export default function Shop() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(() => {
    const value = localStorage.getItem("items");
    if (!value) {
      return [];
    } else {
      return JSON.parse(value);
    }
  });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length === 0) {
      document.title = "Товары отсутствуют";
    } else {
      document.title = `${items.length} товаров`;
    }
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (name === "" || desc === "") {
      setValid(false);
    } else {
      setValid(true);
      setItems([...items, { id: items.length, name: name, desc: desc }]);
      setName("");
      setDesc("");
    }
  }

  function handleDelClick(event) {
    setItems([...items.filter((i) => i.name != event.target.name)]);
  }

  return (
    <>
      <AddItem onFormSubmit={handleFormSubmit}
       onNameChange={(event) => setName(event.target.value)} name={name}
       onDescChange={(event) => setDesc(event.target.value)} desc={desc}
        valid={valid}
       />
      <div>
        <p className="m6">
          {items.length === 0 ? "Добавьте первый товар" : ""}
        </p>
      </div>
      <ItemsList items={items} onDelClick={handleDelClick}/>
    </>
  );
}
