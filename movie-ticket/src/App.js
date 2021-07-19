import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin/admin.module";
import Client from "./client/client.module";
import Guard from "./HOC/guard.hoc";

function App() {
  window.onunload = () => {
    // Clear the local storage
    window.MyStorage.clear();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <Guard page={"admin"}>
            <Admin />
          </Guard>
        </Route>
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
