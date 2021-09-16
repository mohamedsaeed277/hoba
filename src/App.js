import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marka from "./pages/Marka";
import Order from "./pages/Order";
import Type from "./pages/Type";

function App() {
  return (
    <Router>
      <main>
        <switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/Marka'>
            <Marka />
          </Route>
          <Route path='/Order'>
            <Order />
          </Route>
          <Route path='/Type'>
            <Type />
          </Route>
        </switch>
      </main>
    </Router>
  );
}
export default App;