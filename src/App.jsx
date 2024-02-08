import DateNow from "./components/DateNow";
import AddItemForm from "./components/AddItemForm";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.css";
import ThemeChanger from "./components/ThemeChanger";
import "./app.scss";

function App() {
  const [items, setItems] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }

    const savedTheme = localStorage.getItem("theme");
    setIsDarkTheme(savedTheme === "dark");
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
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <>
      <div
        className={`app 
        ${isDarkTheme ? "bg-dark text-light" : "bg-light"}`}
      >
        <div className="app container-fluid d-flex align-items-center justify-content-center flex-column vh-100 w-50">
          <div
            className={`to-do-list container d-flex justify-content-center p-5 flex-column w-100 
          ${isDarkTheme ? "dark" : "light"}`}
          >
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
      </div>
    </>
  );
}

export default App;
