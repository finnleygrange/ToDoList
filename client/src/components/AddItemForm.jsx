import { useState } from "react";

function AddItemForm({ addItemToList }) {
  const [item, setItem] = useState("");

  function addItem(event) {
    event.preventDefault();

    addItemToList(item);

    setItem("");
  }

  function handleInputChange(event) {
    setItem(event.target.value);
  }

  return (
    <>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Add new item"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddItemForm;
