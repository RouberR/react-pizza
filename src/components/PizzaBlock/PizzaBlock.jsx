import React from "react";
import classNames from "classnames";
import AddButtonBlock from "./AddButtonBlock";

function PizzaBlock({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  countAddPizzas,
}) {
  const [typePizza, setTypePizza] = React.useState(types[0]);
  const [sizePizza, setSizePizza] = React.useState(sizes[0]);
  const typesPizzas = ["тонкое", "традиционное"];
  const sizePizzas = [26, 30, 40];

  const onClickAdd = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: typesPizzas[typePizza],
      size: sizePizza,
    };
    onClickAddPizza(obj);
  };

  const onClickType = (index) => {
    setTypePizza(index);
  };
  const onClickSize = (index) => {
    setSizePizza(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesPizzas.map((type, index) => (
            <li
              key={type}
              className={classNames({
                active: typePizza === index,
                disabled: !types.includes(index),
              })}
              onClick={() => onClickType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizePizzas.map((size) => (
            <li
              key={size}
              className={classNames({
                active: sizePizza === size,
                disabled: !sizes.includes(size),
              })}
              onClick={() => onClickSize(size)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <AddButtonBlock
        price={price}
        onClickAdd={onClickAdd}
        countAddPizzas={countAddPizzas}
      />
    </div>
  );
}

export default PizzaBlock;
