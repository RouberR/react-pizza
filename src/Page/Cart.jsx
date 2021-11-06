import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartEmpty,
  CartInfoItem,
  CartPizza,
  ClearAllCart,
} from "../components";
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../redux/actions/cart";
function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const onRemoveCartItem = (id) => {
    if (window.confirm("Вы дейсвтительо хотите удалить?")) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickBuy = () => {
    console.log("Ваш заказ", items);
  };
  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount ? (
          <div className="cart">
            <ClearAllCart onClearCart={onClearCart} />

            {addedPizzas.map((obj) => (
              <CartPizza
                key={obj.id}
                id={obj.id}
                onPlusItem={onPlusItem}
                onMinusItem={onMinusItem}
                onRemoveCartItem={onRemoveCartItem}
                name={obj.name}
                type={obj.type}
                price={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                size={obj.size}
              />
            ))}

            <CartInfoItem
              totalCount={totalCount}
              totalPrice={totalPrice}
              onClickBuy={onClickBuy}
            />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}

export default Cart;
