import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Pay from "./components/Pay/Pay";
import Success from "./components/Success/Success";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:categories">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/login">{user ? <Redirect to="/" /> : <LogIn />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
