
import { Container } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Navbar from './Components/Navbar';

function App() {

  return (
  <>
  <Navbar/>
  <Container className="mb-4">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/store" element={<Store />} />
  </Routes>
  </Container>
  
  
  </>
  
  );
}

export default App;
