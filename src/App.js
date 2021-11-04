import React from "react";

import { Route } from "react-router";

import {Header} from "./components";
import {Cart, Home} from "./Page";


function App() {





  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
    <Route exact path="/" component={Home}/>  
    <Route exact path="/cart" component={Cart}/>
     

    </div>
  </div>
  );
}

export default App;






// class App extends React.Component{
//   componentDidMount(){
//         axios.get("http://localhost:3000/db.json").then(({data}) => {
//      this.props.setPizzas(data.pizzas)
//     })
//   }
//   render(){
//     return (
//       <div className="wrapper">
//         <Header/>
//       <div className="content">
//       <Route exact path="/" render={() => <Home pizza={this.props.items}/> } />  
//       <Route exact path="/cart"> <Cart/> </Route>
       
  
//       </div>
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items : state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
