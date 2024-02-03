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

  return (
    <>
      <div className="container d-flex justify-content-center p-5 flex-column w-50 bg-light">
        <DateNow />
        <AddItemForm addItemToList={AddItemToList} />
        <ItemList items={items} />
      </div>
    </>
  );
}

export default App;
