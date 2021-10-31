import { useState } from "react";

function Categories({ items }) {
  const [state, setstate] = useState(null);
  const onClickItem = (index) => {
    setstate(index);
  };
  
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
}

export default Categories;
