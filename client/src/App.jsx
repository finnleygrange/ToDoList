import DateNow from "./components/DateNow";
import AddItemForm from "./components/AddItemForm";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.css";
import ThemeChanger from "./components/ThemeChanger";

function App() {
  const [items, setItems] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  function toggleTheme() {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <>
      <div
        className={`app container-fluid d-flex align-items-center vh-100
        ${isDarkTheme ? "bg-dark text-light" : "bg-light"}`}
      >
        <div className="container d-flex justify-content-center p-5 flex-column w-50">
          <DateNow />

          <ThemeChanger toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

          <AddItemForm
            addItemToList={AddItemToList}
            isDarkTheme={isDarkTheme}
          />

          <ItemList
            items={items}
            removeItem={RemoveItemFromList}
            isDarkTheme={isDarkTheme}
          />
        </div>
      </div>
    </>
  );
}

export default App;
