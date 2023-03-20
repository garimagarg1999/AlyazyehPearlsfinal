// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/commons/Navbar/Navbar';
import Corousal from './components/commons/Corousal/Corousal'
import Footer from "./components/commons/Footer/Footer";
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/services/Services';
import Jewellery from './components/Jewellery/Jewellery';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Corousal/>
    <br></br>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/Jewellery" element={<Jewellery/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
