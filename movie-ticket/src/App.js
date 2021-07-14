import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin/admin.module";
import Client from "./client/client.module";
import Login from './client/pages/login/login.page';
import Registration from "./client/pages/registration/registration.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
