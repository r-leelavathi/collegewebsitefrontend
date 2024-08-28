import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import CircularTable from './Components/circulars/CircularTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Circular from './Components/News/Circular';
import Contact from './Components/Contact/Contact';
import Press from './Components/News/Press';
import CircularForm from './Components/circulars/CircularForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about" element={<CircularTable />} />


          <Route path="/news/circulars" element={<Circular />} />
          <Route path="/news/press" element={<Press />} />

          <Route path="/placements" element={<CircularForm />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
