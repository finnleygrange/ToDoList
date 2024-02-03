import DateNow from "./components/DateNow";
import AddItemForm from "./components/AddItemForm";
import { useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  function AddItemToList(newItem) {
    setItems([...items, newItem]);
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
