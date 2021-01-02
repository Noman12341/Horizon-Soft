import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import ContactPage from './Pages/ContactPage';

function App() {
  return <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={ContactPage} />
    </Switch>
    <Footer />
  </Router>
}

export default App;
