import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Nav from "./Components/Nav";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
