import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Circular from './Components/News/circulars/Circular';
import Contact from './Components/Contact/Contact';
import Press from './Components/News/Press';
import CircularForm from './Components/News/circulars/CircularForm';
import YogaTable from './Components/Activitites/clubs/Yoga/YogaTable';
import TechnicalClubTable from './Components/Activitites/clubs/TechnicalClub/TechnicalClubTable';
import RedCrossTable from './Components/Activitites/RedCross/RedCrossTable';
import SportsTable from './Components/Activitites/Sports/SportsTable';
import NCCTable from './Components/Activitites/NCC/NCCTable';
import NSSTable from './Components/Activitites/NSS/NSSTable';
import ArtLiteratureTable from './Components/Activitites/clubs/ArtLiterature/ArtLiteratureTable';
import LoginHome from './Components/AfterSignIn.jsx/LoginHome';
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
import EligibilityCriteria from './Components/Admissions/EligibilityCriteria/EligibilityCriteria';
import ApplicationForms from './Components/Admissions/ApplicationForms/ApplicationForms';
import ScholarshipsFinancialAid from './Components/Admissions/ScholarshipsFinancialAid/ScholarshipsFinancialAid';
import AdmissionProcess from './Components/Admissions/AdmissionProcess/AdmissionProcess';
import OrganizationStructure from './Components/About/OrganizationStructure/OrganizationStructure';
import Program_Courses from './Components/Academics/Program&Courses/Program_Courses';
import DepartmentMainPage from './Components/Academics/Department/DepartmentMainPage';
import ResearchAndPublicaationsTable from './Components/Academics/ResearchandPublications/ResearchAndPublicaationsTable';
import StudentUnionTable from './Components/Activitites/StudentUnion/StudentUnionTable';
import RtiTable from './Components/ImportantLinks/RTI/RtiTable';
import WidTable from './Components/Activitites/Wid/WidTable';
import FacultyForm from './Components/Academics/Faculty/FacultyForm';
import AICTETable from './Components/ImportantLinks/AICTE/AICTETable';
import CircularTable from './Components/News/circulars/CircularTable';
import AdminRtiTable from './Components/ImportantLinks/RTI/AdminRtiTable';
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

          <Route path="/about-us" element={''} />
          <Route path='/about/instituteProfile' element={<InstituteProfile />} />
          <Route path="/about/visionMission" element={<VisionMission />} />
          <Route path='/about/organizationstructure' element={<OrganizationStructure />} />
          <Route path='/about/fromPrincipalDesk' element={<PrincipalDesk />} />
          <Route path="/about/institutionalCommittees/*" element={''}>
            <Route path="iqac" element={<IQAC />} />
            <Route path="antiragging" element={<AntiRagging />} />
            <Route path="internalcomplaintcell" element={<InternalComplaintCell />} />
            <Route path="disciplinemonitoringcell" element={<DisciplineMonitoringCell />} />
            <Route path="grievanceredressalcommittee" element={<GrievanceRedressalCell />} />
            <Route path="scstcell" element={<ScStCell />} />
          </Route>

          <Route path="/academics/*" element={''}>
            <Route path="programs" element={<Program_Courses />} />
            <Route path="departments" element={<DepartmentMainPage />} />
            <Route path="faculty" element={<FacultyForm />} />
            <Route path="research" element={<ResearchAndPublicaationsTable />} />
          </Route>

          <Route path="/admissions/process" element={<AdmissionProcess />} />
          <Route path="/admissions/scholarships" element={<ScholarshipsFinancialAid />} />
          <Route path="/admissions/forms" element={<ApplicationForms />} />
          <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />

          <Route path="/activities/*" element={''}>
            <Route path="studentunion" element={<StudentUnionTable />} />
            <Route path="sports" element={<SportsTable />} />
            <Route path="nss" element={<NSSTable />} />
            <Route path="redcross" element={<RedCrossTable />} />
            <Route path="ncc" element={<NCCTable />} />
            <Route path="wid" element={<WidTable />} />
            <Route path="clubs/yoga" element={<YogaTable />} />
            <Route path="clubs/technicalclub" element={<TechnicalClubTable />} />
            <Route path="clubs/artliterature" element={<ArtLiteratureTable />} />
          </Route>


          <Route path="/events/archives" element={<Circular />} />
          <Route path="/events/upcomingevents" element={<Press />} />

          <Route path="/news/circulars" element={<Circular />} />
          <Route path="/news/press" element={<Press />} />

          <Route path="/importantLinks/*" element={''}>
            <Route path="aicte" element={<AICTETable />} />
            <Route path="rti" element={<RtiTable />} />
          </Route>

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/loginHome" element={<LoginHome />} />

          <Route path="/login/*" element={""}>
            <Route path="principalDeskForm" element={''} />
            <Route path="principalDeskTable" element={''} />
            <Route path="iqacForm" element={''} />
            <Route path="iqacTable" element={''} />
            <Route path="antiraggingForm" element={''} />
            <Route path="antiraggingTable" element={''} />
            <Route path="iccForm" element={''} />
            <Route path="iccTable" element={''} />
            <Route path="dmcForm" element={''} />
            <Route path="dmcTable" element={''} />
            <Route path="programsAndCoursesForm" element={''} />
            <Route path="programsAndCoursesTable" element={''} />
            <Route path="facultyForm" element={''} />
            <Route path="facultyTable" element={''} />
            <Route path="researchAndPublicationForm" element={''} />
            <Route path="researchAndPublicationTable" element={''} />
            <Route path="studentUnionForm" element={''} />
            <Route path="studentUnionTable" element={''} />
            <Route path="sportsForm" element={''} />
            <Route path="sportsTable" element={''} />
            <Route path="nssForm" element={''} />
            <Route path="nssTable" element={''} />
            <Route path="youthRedCrossForm" element={''} />
            <Route path="youthRedCrossTable" element={''} />
            <Route path="nccForm" element={''} />
            <Route path="nccTable" element={''} />
            <Route path="widForm" element={''} />
            <Route path="widTable" element={''} />
            <Route path="yogaForm" element={''} />
            <Route path="yogaTable" element={''} />
            <Route path="technicalClubForm" element={''} />
            <Route path="technicalClubTable" element={''} />
            <Route path="artLiteratureForm" element={''} />
            <Route path="artLiteratureTable" element={''} />


            <Route path="archievesForm" element={''} />
            <Route path="archievesTable" element={''} />
            <Route path="upcomingEventsForm" element={''} />
            <Route path="upcomingEventsTable" element={''} />
            <Route path="circularForm" element={<CircularForm />} />
            <Route path="circularTable" element={<CircularTable />} />
            <Route path="pressReleaseForm" element={''} />
            <Route path="pressReleaseTable" element={''} />
            <Route path="cctekForm" element={''} />
            <Route path="cctekTable" element={''} />
            <Route path="AicteForm" element={''} />
            <Route path="AicteTable" element={''} />
            <Route path="RtiForm" element={''} />
            <Route path="RtiTable" element={<AdminRtiTable />} />


          </Route>
        </Routes>


      </BrowserRouter >
      <Footer />

    </>
  );
}

export default App;
