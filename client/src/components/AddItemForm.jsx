import { useState } from "react";
import "./addItemForm.scss";

function AddItemForm({ addItemToList, isDarkTheme }) {
  const [item, setItem] = useState("");

  function addItem(event) {
    event.preventDefault();

    if (item == "") {
      return;
    }

    addItemToList(item);

    setItem("");
  }

  function handleInputChange(event) {
    setItem(event.target.value);
  }

  return (
    <>
      <form className="add-item-form input-group mt-2" onSubmit={addItem}>
        <input
          className={`user-input form-control ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Add new item"
        />
        <button
          className={`add-item-btn btn ms-2 border ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
          type="submit"
        >
          <i className="plus fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  );
}

export default AddItemForm;
