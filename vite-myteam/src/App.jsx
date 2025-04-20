
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useMenu } from './components/MenuContext';

const pxStyling = "px-[24px] md:px-[39px] 1440:px-[165px]";

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const { menuIsOpen } = useMenu();

  return (
    <div style={{filter: menuIsOpen ? 'brightness(0.5)' : 'none', transition: 'filter 0.3s ease', minHeight: '100vh' }}>
      <Header  padding={pxStyling}/>
      <Routes>
          <Route path="/" element={<Home padding={pxStyling} />} />
          <Route path="/about" element={<About padding={pxStyling} />} />
          <Route path="/contact" element={<Contact padding={pxStyling} />} />
      </Routes>

      {!isContactPage && (
        <Contact padding={pxStyling} />
      )}

      <Footer padding={pxStyling}/>
    </div>
  )
}

export default App
