
import { Route } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header/>
       <Home />
      <About />
      <Project />
      <Contact />

      {/* <Route exact path="/" component={Home}/>
      
      <Route path="/project" component={Project}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
 */}

    </div>
  );
}

export default App;
