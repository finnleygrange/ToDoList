function ItemList({ items, removeItem, isDarkTheme }) {
  function handleRemoveItem(index) {
    removeItem(index);
  }

  return (
    <div className="w-100 mt-2">
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-group-item d-flex align-items-center w-100 ${
              isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <div className="flex-grow-1 overflow-x-auto">{item}</div>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemoveItem(index)}
            >
              <i className="fa-solid fa-xmark text-danger"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
