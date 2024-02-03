import { useState } from "react";

function AddItemForm({ addItemToList }) {
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
      <form className="add-item-form input-group mt-4" onSubmit={addItem}>
        <input
          className="form-control"
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Add new item"
        />
        <button className="btn btn-outline-primary" type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  );
}

export default AddItemForm;
