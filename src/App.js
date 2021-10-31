import { Route } from "react-router";
import {Header} from "./components";
import {Cart, Home} from "./Page";



function App() {
  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
    <Route exact path="/" > <Home/> </Route>
    <Route exact path="/cart"> <Cart/> </Route>
     

    </div>
  </div>
  );
}

export default App;
