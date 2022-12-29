import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/', { replace: true })
  }

  const navigatePortfolio = () => {
    navigate('/portfolio', { replace: true })
  }

  const navigateAbout = () => {
    navigate('/about', { replace: true })
  }

  const navigateContact = () => {
    navigate('/contact', { replace: true })
  }

  return (
    <div className="App">

      <div className="navbar">
        <button className="buttons" onClick={navigateHome}> HOME </button>
        <button className="buttons" onClick={navigatePortfolio}> PORTFOLIO </button>
        <button className="buttons" onClick={navigateAbout}> ABOUT </button>
        <button className="buttons" onClick={navigateContact}> CONTACT </button>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
