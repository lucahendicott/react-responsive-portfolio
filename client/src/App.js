import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 1000,
                },
              },
            },
          }}
          style={{
            width: "100%",
          }}
        />
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
