function ItemList({ items }) {
  return (
    <div className="w-100 mt-2">
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
