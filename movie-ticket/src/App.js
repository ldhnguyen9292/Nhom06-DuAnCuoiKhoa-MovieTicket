import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin/admin.module";
import Client from "./client/client.module";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
