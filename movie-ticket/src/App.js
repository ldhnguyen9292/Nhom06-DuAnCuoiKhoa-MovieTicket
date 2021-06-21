import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin/admin.module";
import Client from "./client/client.module";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" exact>
          <Client />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
