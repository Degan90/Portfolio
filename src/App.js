import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

import Project from "./components/Project";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}

      {/* <Header /> */}
      <Navigation />

      {/* <Home />
      <About />
      <Project />
      <Contact /> */}
      {/* <Resume /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        
      </Switch>
    </>
  );
}

export default App;
