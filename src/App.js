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
import LoginHome from './Components/AfterSignIn.jsx/LoginHome';
import FacultyForm from './Components/faculty/FacultyForm';
import InstituteProfile from './Components/About/InstituteProfile/InstituteProfile';
import PrincipalDesk from './Components/About/PrincipalDesk/PrincipalDesk';
import VisionMission from './Components/About/VisionMission/VisionMission';
import IQAC from './Components/About/InstitutionalCommittees/IQAC/IQAC';
import StudentWelfare from './Components/About/InstitutionalCommittees/StudentWelfare/StudentWelfare';
import AntiRagging from './Components/About/InstitutionalCommittees/AntiRagging/AntiRagging';
import InternalComplaintCell from './Components/About/InstitutionalCommittees/InternalComplaintCell/InternalComplaintCell';
import DisciplineMonitoringCell from './Components/About/InstitutionalCommittees/DisciplineMonitoringCell/DisciplineMonitoringCell';
import GrievanceRedressalCell from './Components/About/InstitutionalCommittees/GrievanceRedressalCell/GrievanceRedressalCell';
import ScStCell from './Components/About/InstitutionalCommittees/ScStCell/ScStCell';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<CircularTable />} >
            <Route path="instituteProfiles" element={''} />
          </Route>
          <Route path="/about-us" element={<About />} />
          <Route path='/about/instituteProfile' element={<InstituteProfile />} />
          <Route path="/about/visionMission" element={<VisionMission />} />
          <Route path='/about/fromPrincipalDesk' element={<PrincipalDesk />} />
          <Route path="/about/institutionalCommittees/*" element={''}>
            <Route path="iqac" element={<IQAC />} />
            <Route path="swo" element={<StudentWelfare />} />
            <Route path="antiragging" element={<AntiRagging />} />
            <Route path="internalcomplaintcell" element={<InternalComplaintCell />} />
            <Route path="disciplinemonitoringcell" element={<DisciplineMonitoringCell />} />
            <Route path="grievanceredressalcommittee" element={<GrievanceRedressalCell />} />
            <Route path="scstcell" element={<ScStCell />} />
          </Route>


          <Route path="/academics/faculty" element={<FacultyForm />} />
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

          <Route path="/loginHome" element={<LoginHome />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
