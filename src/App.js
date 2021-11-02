import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import { Route } from "react-router";

import {Header} from "./components";
import {Cart, Home} from "./Page";
import {setPizzas} from "./redux/actions/pizzas";

// function App() {

  
//   React.useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({data}) => {
//       setPizza(data.pizzas)
//     })
//   }, [])
  // return (
  //   <div className="wrapper">
  //     <Header/>
  //   <div className="content">
  //   <Route exact path="/" render={() => <Home pizza={pizza}/> } />  
  //   <Route exact path="/cart"> <Cart/> </Route>
     

  //   </div>
  // </div>
  // );
// }


class App extends React.Component{
  componentDidMount(){
        axios.get("http://localhost:3000/db.json").then(({data}) => {
     this.props.setPizzas(data.pizzas)
    })
  }
  render(){
    return (
      <div className="wrapper">
        <Header/>
      <div className="content">
      <Route exact path="/" render={() => <Home pizza={this.props.items}/> } />  
      <Route exact path="/cart"> <Cart/> </Route>
       
  
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items : state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
