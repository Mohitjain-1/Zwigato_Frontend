import './App.css';
import Home from './screens/Home';
import MyOrder from './screens/MyOrder';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
  <>
  <CartProvider>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/Createuser" element={<Signup/>}/>
      <Route exact path="/myOrder" element={<MyOrder/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
    </Routes>
  </Router>
  </CartProvider>
  </>
  );
}

export default App;
