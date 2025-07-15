import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <div className="page-bg">
      <Router>
        <Navbar home="Home" about="About Me" skills="Skills" projects="Projects" contact="Contact"/>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
