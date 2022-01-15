import './index.css'
import Footer from './components/Footer';
import Nav from './components/Nav'
import Home from "./pages/Home"

import { BrowserRouter as Router, Route } from '/react-router-dom'


function App() {
  return (
  
  <Router>
    <div className="App">
    <Route />
     <Nav />
      <Home />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
