import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItems }) {
  const [state, setstate] = useState(null);
  const onClickItem = (index) => {
    setstate(index);
    onClickItems(index)
  };
  console.log("ререндер")
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickItem(null)}
          className={state === null ? "active" : null}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            onClick={() => onClickItem(index)}
            className={state === index ? "active" : null}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
