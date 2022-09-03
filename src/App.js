import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ServicePage from './components/ServicePage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
