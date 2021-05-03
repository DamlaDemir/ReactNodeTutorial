import {
  Route, Switch
} from "react-router-dom";

import Home from './Views/Home';
import Login from './Views/Login';


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </Switch>

  );
}

export default App;
