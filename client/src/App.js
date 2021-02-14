import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import ContactPage from './Pages/ContactPage';
import TechPage from './Pages/TechPage';
import AdminAuth from './Pages/AdminAuth';
import AdminPage from './Pages/Admin';
import NavBar from './Components/NavBar';
import DeisgnPage from './Pages/UIUXDesgin';
import MobileAppPage from './Pages/MobileApp';
import CustomSoftPage from './Pages/CustomSoftDev';
import DedicatedTeamPage from './Pages/DedicatedPage';
import ContactUsPage from './Pages/ContactUsPage';

function App() {
  return <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tech" exact component={TechPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/mobile-app" exact component={MobileAppPage} />
      <Route path="/custom-dev" exact component={CustomSoftPage} />
      <Route path="/dedicated-development" exact component={DedicatedTeamPage} />
      <Route path="/design" exact component={DeisgnPage} />
      <Route path="/contact-us" exact component={ContactUsPage} />
      <Route path="/admin/auth" exact component={AdminAuth} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
    <Footer />
  </Router>
}

export default App;
