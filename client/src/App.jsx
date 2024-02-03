import DateNow from "./components/DateNow";
import AddItemForm from "./components/AddItemForm";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.css";

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

  function RemoveItemFromList(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }

  return (
    <>
      <div className="container d-flex justify-content-center p-5 flex-column w-50 bg-light border">
        <DateNow />
        <AddItemForm addItemToList={AddItemToList} />
        <ItemList items={items} removeItem={RemoveItemFromList} />
      </div>
    </>
  );
}

export default App;
