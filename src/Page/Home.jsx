import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, Sorting, PizzaBlock, SkeletonBlock } from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortNames = [
          {name:"популярности", type: "rating", order: "desc"},
           {name:"цене", type: "price", order: "desc"},
            {name:"алфавиту", type:"name", order: "asc" }]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);
 
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy]);

const onSelectCategory = React.useCallback((index) => {
  dispatch(setCategory(index))
}, [])

const onSelectSortBy = React.useCallback((index) => {
  dispatch(setSortBy(index))
}, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          categoryIndex={category}
          onClickItems = {onSelectCategory}
          items={categoryNames}
        />
        <Sorting activeSortType={sortBy.name} items={sortNames} onSelectSortBy={onSelectSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
      
      {isLoaded
       ? items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
       : Array(8).fill(0).map((_, index) => (<SkeletonBlock key={index}/>))}
       

        
      </div>
    </div>
  );
}

export default Home;
