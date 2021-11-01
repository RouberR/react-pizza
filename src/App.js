import React from "react";
import { Route } from "react-router";
import axios from "axios";
import {Header} from "./components";
import {Cart, Home} from "./Page";



function App() {
  const [pizza, setPizza] = React.useState()
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      setPizza(data.pizzas)
    })
  }, [])
  console.log(pizza)
  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
    <Route exact path="/" render={() => <Home pizza={pizza}/> } />  
    <Route exact path="/cart"> <Cart/> </Route>
     

    </div>
  </div>
  );
}

export default App;
