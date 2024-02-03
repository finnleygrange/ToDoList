import DateNow from "./components/DateNow";
import AddItemForm from "./components/AddItemForm";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  function AddItemToList(newItem) {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }

  return (
    <>
      <DateNow />
      <AddItemForm addItemToList={AddItemToList} />
      <ItemList items={items} />
    </>
  );
}

export default App;
