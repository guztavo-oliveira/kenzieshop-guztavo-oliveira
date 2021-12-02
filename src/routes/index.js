import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      {/* <Route isPrivate path="/dashboard" component={Dashboard} /> */}
    </Switch>
  );
};

export default Routes;
