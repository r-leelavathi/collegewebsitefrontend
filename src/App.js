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
import YogaTable from './Components/StudentLife/ClubSocieties/Yoga/YogaTable';
import TechnicalClubTable from './Components/StudentLife/ClubSocieties/TechnicalClub/TechnicalClubTable';
import RedCrossTable from './Components/StudentLife/ClubSocieties/RedCross/RedCrossTable';
import SportsTable from './Components/StudentLife/ClubSocieties/Sports/SportsTable';
import NCCTable from './Components/StudentLife/ClubSocieties/NCC/NCCTable';
import NSSTable from './Components/StudentLife/ClubSocieties/NSS/NSSTable';
import ArtLiteratureTable from './Components/StudentLife/ClubSocieties/ArtLiterature/ArtLiteratureTable';
import ClubSocietiesForm from './Components/StudentLife/ClubSocieties/ClubSocietiesForm';
import ClubSocietiesTable from './Components/StudentLife/ClubSocieties/ClubSocietiesTable';
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

          <Route path="/student-life/clubs/*" element={''}>
            <Route path="sports" element={<SportsTable />} />
            <Route path="ncc" element={<NCCTable />} />
            <Route path="nss" element={<NSSTable />} />
            <Route path="yoga" element={<YogaTable />} />
            <Route path="technicalclub" element={<TechnicalClubTable />} />
            <Route path="artliterature" element={<ArtLiteratureTable />} />
            <Route path="redcross" element={<RedCrossTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
