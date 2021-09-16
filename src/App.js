import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeDetail from "./components/EmployeeDetail";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/dashBoard" component={Dashboard} />
        <Route path="/empdetail/:id" component={EmployeeDetail} />
      </Switch>
    </Router>
  );
}

export default App;
