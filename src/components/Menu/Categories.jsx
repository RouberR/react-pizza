import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItems, categoryIndex }) {

  
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickItems(null)}
          className={categoryIndex === null ? "active" : null}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            onClick={() => onClickItems(index)}
            className={categoryIndex === index ? "active" : null}
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
