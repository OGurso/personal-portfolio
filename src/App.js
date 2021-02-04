import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './components/Main/pages/Home';
import Contact from './components/Main/pages/Contact';
import About from './components/Main/pages/About';
import Projects from './components/Main/pages/Projects';
import GlobalStyle from './GlobalStyle';


function App() {
  return (

    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
