import React from "react";
import { Categories, Sorting, PizzaBlock } from "../components";



function Home({pizza}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <Sorting items={[
          {name: "популярности", type: "popular"},
           {name: "цене", type: "price"},
            {name:"алфавиту", type:"alphabet"}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
      
      {pizza && pizza.map(obj => <PizzaBlock key={obj.id} {...obj}/>)}
        

        
      </div>
    </div>
  );
}

export default Home;
