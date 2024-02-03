import { useState } from "react";

function AddItemForm() {
  const [itemName, setItemName] = useState("");

  function addItem(event) {
    event.preventDefault();

    console.log(itemName);

    setItemName("");
  }

  function handleInputChange(event) {
    setItemName(event.target.value);
  }

  return (
    <>
      <form className="" onSubmit={addItem}>
        <input
          type="text"
          value={itemName}
          onChange={handleInputChange}
          placeholder="Add new item"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddItemForm;
