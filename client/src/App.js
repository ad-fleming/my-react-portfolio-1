import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./containers/Home/Home.jsx"
import About from "./containers/About/About.jsx"
import Contact from "./containers/Contact/Contact.jsx"
import Portfolio from "./containers/Portfolio/Portfolio.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.css"


function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route exact path= "/about" component={About} />
        <Route exact path= "/portfolio" component={Portfolio} />
        <Route exact path= "/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
