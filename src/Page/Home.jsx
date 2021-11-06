import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, Sorting, PizzaBlock, SkeletonBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortNames = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortBy = React.useCallback((index) => {
    dispatch(setSortBy(index));
  }, [dispatch]);

  const onClickAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryIndex={category}
          onClickItems={onSelectCategory}
          items={categoryNames}
        />
        <Sorting
          activeSortType={sortBy.name}
          items={sortNames}
          onSelectSortBy={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
                countAddPizzas={
                  cartItems[obj.id] && cartItems[obj.id].items.length
                }
                onClickAddPizza={onClickAddPizza}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <SkeletonBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
