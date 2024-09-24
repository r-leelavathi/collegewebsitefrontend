import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Circular from './Components/News/circulars/CircularTable';
import Contact from './Components/Contact/Contact';
import YogaTable from './Components/Activitites/clubs/Yoga/YogaTable';
import TechnicalClubTable from './Components/Activitites/clubs/TechnicalClub/TechnicalClubTable';
import RedCrossTable from './Components/Activitites/RedCross/RedCrossTable';
import SportsTable from './Components/Activitites/Sports/SportsTable';
import NCCTable from './Components/Activitites/NCC/NCCTable';
import NSSTable from './Components/Activitites/NSS/NSSTable';
import ArtLiteratureTable from './Components/Activitites/clubs/ArtLiterature/ArtLiteratureTable';
import InstituteProfile from './Components/About/InstituteProfile/InstituteProfile';
import PrincipalDesk from './Components/About/PrincipalDesk/PrincipalDesk';
import VisionMission from './Components/About/VisionMission/VisionMission';
import IQAC from './Components/About/InstitutionalCommittees/IQAC/IQAC';
import AntiRagging from './Components/About/InstitutionalCommittees/AntiRagging/AntiRagging';
import InternalComplaintCell from './Components/About/InstitutionalCommittees/InternalComplaintCell/InternalComplaintCell';
import DisciplineMonitoringCell from './Components/About/InstitutionalCommittees/DisciplineMonitoringCell/DisciplineMonitoringCell';
import GrievanceRedressalCell from './Components/About/InstitutionalCommittees/GrievanceRedressalCell/GrievanceRedressalCell';
import EligibilityCriteria from './Components/Admissions/EligibilityCriteria/EligibilityCriteria';
import ApplicationForms from './Components/Admissions/ApplicationForms/ApplicationForms';
import ScholarshipsFinancialAid from './Components/Admissions/ScholarshipsFinancialAid/ScholarshipsFinancialAid';
import OrganizationStructure from './Components/About/OrganizationStructure/OrganizationStructure';
import Program_Courses from './Components/Academics/Program&Courses/Program_Courses';
import DepartmentMainPage from './Components/Academics/Department/DepartmentMainPage';
import RtiTable from './Components/ImportantLinks/RTI/RtiTable';
import WidTable from './Components/Activitites/Wid/WidTable';
import AICTETable from './Components/ImportantLinks/AICTE/AICTETable';
import AdminRtiTable from './Components/ImportantLinks/RTI/AdminRtiTable';
import AdminAICTETable from './Components/ImportantLinks/AICTE/AdminAICTETable';
import AdminAICTEForm from './Components/ImportantLinks/AICTE/AdminAICTEForm';
import AdmissionProcessForm from './Components/Admissions/AdmissionProcess/AdmissionProcessForm';
import StudentCouncil from './Components/Activitites/StudentUnion/StudentCouncil';
import AdminYogaTable from './Components/Activitites/clubs/Yoga/AdminYogaTable';
import AdminArtLiteratureClubTable from './Components/Activitites/clubs/ArtLiterature/AdminArtLiteratureClubTable';
import AdminTechnicalClubTable from './Components/Activitites/clubs/TechnicalClub/AdminTechnicalClubTable';
import ResearchPublication from './Components/Academics/ResearchandPublications/ResearchPublication';
import EventsTable from './Components/Events/EventsTable';
import UpcomingEventsTable from './Components/Events/UpcomingEventsTable';
import Press from './Components/News/PressRelease/PressTable';
import TopHeader from './Components/Navbar/TopHeader';
import LoginHome from './Components/AfterSignIn/LoginHome';
import AdminPressReleaseForm from './Components/News/PressRelease/AdminPressForm';
import AdminPressTable from './Components/News/PressRelease/AdminPressTable';
import AdminCircularForm from './Components/News/circulars/AdminCircularForm';
import AdminCircularTable from './Components/News/circulars/AdminCircularTable';
import AdminRtiForm from './Components/ImportantLinks/RTI/AdminRtiForm';
import AdminArchievesTable from './Components/Events/AdminArchievesTable';
import AdminArchievesForm from './Components/Events/AdminArchievesForm';
import AdminUpcomingEventsForm from './Components/Events/AdminUpcomingEventsForm';
import AdminUpcomingEventsTable from './Components/Events/AdminUpcomingEventsTable';
import AdminArtLiteratureClubForm from './Components/Activitites/clubs/ArtLiterature/AdminArtLiteratureClubForm';
import AdminTechnicalClubForm from './Components/Activitites/clubs/TechnicalClub/AdminTechnicalClubForm';
import AdminYogaForm from './Components/Activitites/clubs/Yoga/AdminYogaForm';
import AdminWidForm from './Components/Activitites/Wid/AdminWidForm';
import AdminWidTable from './Components/Activitites/Wid/AdminWidTable';
import AdminNCCForm from './Components/Activitites/NCC/AdminNCCForm';
import AdminNCCTable from './Components/Activitites/NCC/AdminNCCTable';
import AdminRedCrossForm from './Components/Activitites/RedCross/AdminRedCrossForm';
import AdminRedCrossTable from './Components/Activitites/RedCross/AdminRedCrossTable';
import AdminNSSForm from './Components/Activitites/NSS/AdminNSSForm';
import AdminNSSTable from './Components/Activitites/NSS/AdminNSSTable';
import AdminSportsTable from './Components/Activitites/Sports/AdminSportsTable';
import AdminSportsForm from './Components/Activitites/Sports/AdminSportsForm';
import AdminStudentUnionForm from './Components/Activitites/StudentUnion/AdminStudentUnionForm';
import AdminStudentunionTable from './Components/Activitites/StudentUnion/AdminStudentunionTable';
import AdminStaffInchargeForm from './Components/Home/AdminStaffInchargeForm';
import AdminStaffInchargeTable from './Components/Home/AdminStaffInchargeTable';
import WorkingHours from './Components/About/Campus/WorkingHours';
import HowtoReach from './Components/About/Campus/HowtoReach';
import CollegeGround from './Components/About/Facilities/Ground/CollegeGround';
import CollegeCanteen from './Components/About/Facilities/Canteen/CollegeCanteen';
import Library from './Components/About/Facilities/Library/Library';
import Gallery from './Components/About/Gallery/Gallery';
import CampusPlan from './Components/About/Campus/CampusPlan';
import SiteMap from './Components/Footer/SiteMap'
import RegularEntryStudents from './Components/Admissions/AdmissionProcess/RegularEntryStudents';
import LateralEntryStudents from './Components/Admissions/AdmissionProcess/LateralEntryStudents';
import TransferStudents from './Components/Admissions/AdmissionProcess/TransferStudents';
import Repeaters from './Components/Admissions/AdmissionProcess/Repeaters';
import ChangeOfBranch from './Components/Admissions/AdmissionProcess/ChangeOfBranch';
import FeeStructure from './Components/Admissions/FeeStructure/FeeStructure';
import RecruitmentPage from './Components/Recruitment/RecruitmentPage';
import AwardsPage from './Components/About/History/AwardsPage';
import FormerPrincipalsPage from './Components/About/History/FormerPrincipalsPage';
import CS from './Components/Academics/Department/CS/CS';
import AboutUs from './Components/About/AboutUs';
import FacultyTable from './Components/Academics/Faculty/FacultyTable';
import Society from './Components/About/Facilities/Society/Society';
import Hostel from './Components/Hostel/Hostel';
import SCSTCommittee from './Components/About/InstitutionalCommittees/SCSTCommittee/SCSTCommittee';
import InnovationCell from './Components/About/InstitutionalCommittees/InnovationCell/InnovationCell';
import CH from './Components/Academics/Department/CH/CH';
import ME from './Components/Academics/Department/ME/ME';
import AT from './Components/Academics/Department/AT/AT';
import CE from './Components/Academics/Department/CE/CE';
import EEE from './Components/Academics/Department/EEE/EEE';
import EC from './Components/Academics/Department/EC/EC';
import PO from './Components/Academics/Department/PO/PO';
import SC from './Components/Academics/Department/SC/SC';
import PublicInformationOfficerTable from './Components/Footer/PublicInformationOfficer/PublicInformationOfficerTable';
import IndustryInteractions from './Components/Footer/IndustryInteractions';
import TelephoneDirectoryPage from './Components/Footer/TelephoneDirectoryPage/TelephoneDirectoryPage';
import AdminTelephoneDirectoryForm from './Components/Footer/TelephoneDirectoryPage/AdminTelephoneDirectoryForm';
import AdminPublicInformationOfficer from './Components/Footer/PublicInformationOfficer/AdminPublicInformationOfficer';
import AdminResearchPublicationForm from './Components/Academics/ResearchandPublications/AdminResearchPublicationForm';
import AdminFacultyForm from './Components/Academics/Faculty/AdminFacultyForm';
import AdminFormerPrincipals from './Components/About/History/AdminFormerPrincipalsForm';
import AdminFormerPrincipalsTable from './Components/About/History/AdminFormerPrincipalsTable';
import AdminFacultyTable from './Components/Academics/Faculty/AdminFacultyTable';
import AdminResearchAndPublicationsTable from './Components/Academics/ResearchandPublications/AdminResearchAndPublicationsTable';
import AdminApplicationFormTable from './Components/Admissions/ApplicationForms/AdminApplicationFormTable';
import ApplicationFormTable from './Components/Admissions/ApplicationForms/ApplicationFormTable';
import AdminPublicInformationOfficerTable from './Components/Footer/PublicInformationOfficer/AdminPublicInformationOfficerTable';
import AdminGalleryTable from './Components/About/Gallery/AdminGalleryTable';
import AdminGalleryForm from './Components/About/Gallery/AdminGalleryForm';
import CCTEK from './Components/ImportantLinks/CCTEK/CCTEK';
function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/about/instituteProfile' element={<InstituteProfile />} />
          <Route path="/about/visionMission" element={<VisionMission />} />
          <Route path='/about/organizationstructure' element={<OrganizationStructure />} />
          <Route path='/about/fromPrincipalDesk' element={<PrincipalDesk />} />

          <Route path="/about/history/*" element={''}>
            <Route path="formerPrincipals" element={<FormerPrincipalsPage />} />
            <Route path="awardsAndRecognitions" element={<AwardsPage />} />
          </Route>

          <Route path="/about/campus/*" element={''}>
            <Route path="howtoreach" element={<HowtoReach />} />
            <Route path="workinghours" element={<WorkingHours />} />
            <Route path="campusPlan" element={<CampusPlan />} />
          </Route>
          <Route path="/about/institutionalCommittees/*" element={''}>
            <Route path="iqac" element={<IQAC />} />
            <Route path="antiragging" element={<AntiRagging />} />
            <Route path="internalcomplaintcell" element={<InternalComplaintCell />} />
            <Route path="disciplinemonitoringcell" element={<DisciplineMonitoringCell />} />
            <Route path="grievanceredressalcommittee" element={<GrievanceRedressalCell />} />
            <Route path="scstcommittee" element={<SCSTCommittee />} />
            <Route path="innovationcell" element={<InnovationCell />} />
          </Route>
          <Route path="/about/facilities/*" element={''}>
            <Route path="society" element={<Society />} />
            <Route path="hostel" element={<Hostel />} />

            <Route path="ground" element={<CollegeGround />} />
            <Route path="canteen" element={<CollegeCanteen />} />
            <Route path="library" element={<Library />} />
          </Route>
          <Route path="about/gallery" element={<Gallery />} />
          <Route path="loginhome/galleryForm" element={<AdminGalleryForm />} />
          <Route path="loginhome/galleryTable" element={<AdminGalleryTable />} />



          <Route path="/academics/*" element={''}>
            <Route path="programs" element={<Program_Courses />} />
            <Route path="departments" element={<DepartmentMainPage />} />
            <Route path="department/cs" element={<CS />} />
            <Route path="department/ch" element={<CH />} />
            <Route path="department/me" element={<ME />} />
            <Route path="department/at" element={<AT />} />
            <Route path="department/ce" element={<CE />} />
            <Route path="department/eee" element={<EEE />} />
            <Route path="department/ec" element={<EC />} />
            <Route path="department/po" element={<PO />} />
            <Route path="department/sc" element={<SC />} />

            <Route path="faculty" element={<FacultyTable />} />
            <Route path="research" element={<ResearchPublication />} />
          </Route>

          <Route path="/admissions/AdmissionProcess/*" element={''} >
            <Route path="regular" element={<RegularEntryStudents />} />
            <Route path="lateral" element={<LateralEntryStudents />} />
            <Route path="repeater" element={<Repeaters />} />
            <Route path="changeOfBranch" element={<ChangeOfBranch />} />
            <Route path="transfer" element={<TransferStudents />} />
          </Route>



          <Route path="/admissions/scholarships" element={<ScholarshipsFinancialAid />} />
          <Route path="/admissions/forms" element={<ApplicationFormTable />} />
          <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />
          <Route path="/admissions/feeStructure" element={<FeeStructure />} />
          <Route path="/admissions/admissionStatistics" element={<FeeStructure />} />

          <Route path="/activities/*" element={''}>
            <Route path="studentunion" element={<StudentCouncil />} />
            <Route path="sports" element={<SportsTable />} />
            <Route path="nss" element={<NSSTable />} />
            <Route path="redcross" element={<RedCrossTable />} />
            <Route path="ncc" element={<NCCTable />} />
            <Route path="wid" element={<WidTable />} />
            <Route path="clubs/yoga" element={<YogaTable />} />
            <Route path="clubs/technicalclub" element={<TechnicalClubTable />} />
            <Route path="clubs/artliterature" element={<ArtLiteratureTable />} />
          </Route>


          <Route path="/events/archives" element={<EventsTable />} />
          <Route path="/events/upcomingevents" element={<UpcomingEventsTable />} />

          <Route path="/news/circulars" element={<Circular />} />
          <Route path="/news/press" element={<Press />} />

          <Route path="/importantLinks/*" element={''}>
            <Route path="aicte" element={<AICTETable />} />
            <Route path="rti" element={<RtiTable />} />
            <Route path="cctek" element={<CCTEK />} />
          </Route>

          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/loginhome" element={<LoginHome />} />

          <Route path="/loginhome/*" element={''}>
            <Route path="adminStaffInchargeForm" element={<AdminStaffInchargeForm />} />
            <Route path="adminStaffInchargeTable" element={<AdminStaffInchargeTable />} />
            <Route path="principalDeskForm" element={''} />
            <Route path="principalDeskTable" element={''} />
            <Route path="formerPrincipalsForm" element={<AdminFormerPrincipals />} />
            <Route path="formerPrincipalsTable" element={<AdminFormerPrincipalsTable />} />
            <Route path="antiraggingForm" element={''} />
            <Route path="antiraggingTable" element={''} />
            <Route path="iccForm" element={''} />
            <Route path="iccTable" element={''} />
            <Route path="dmcForm" element={''} />
            <Route path="dmcTable" element={''} />
            <Route path="programsAndCoursesForm" element={''} />
            <Route path="programsAndCoursesTable" element={''} />
            <Route path="facultyForm" element={<AdminFacultyForm />} />
            <Route path="facultyTable" element={<AdminFacultyTable />} />
            <Route path="researchAndPublicationForm" element={<AdminResearchPublicationForm />} />
            <Route path="researchAndPublicationTable" element={<AdminResearchAndPublicationsTable />} />
            <Route path="applicationForm" element={<AdmissionProcessForm />} />
            <Route path="applicationTable" element={<AdminApplicationFormTable />} />
            <Route path="studentUnionForm" element={<AdminStudentUnionForm />} />
            <Route path="studentUnionTable" element={<AdminStudentunionTable />} />
            <Route path="sportsForm" element={<AdminSportsForm />} />
            <Route path="sportsTable" element={<AdminSportsTable />} />
            <Route path="nssForm" element={<AdminNSSForm />} />
            <Route path="nssTable" element={<AdminNSSTable />} />
            <Route path="youthRedCrossForm" element={<AdminRedCrossForm />} />
            <Route path="youthRedCrossTable" element={<AdminRedCrossTable />} />
            <Route path="nccForm" element={<AdminNCCForm />} />
            <Route path="nccTable" element={<AdminNCCTable />} />
            <Route path="widForm" element={<AdminWidForm />} />
            <Route path="widTable" element={<AdminWidTable />} />
            <Route path="yogaForm" element={<AdminYogaForm />} />
            <Route path="yogaTable" element={<AdminYogaTable />} />
            <Route path="technicalClubForm" element={<AdminTechnicalClubForm />} />
            <Route path="technicalClubTable" element={<AdminTechnicalClubTable />} />
            <Route path="artLiteratureForm" element={<AdminArtLiteratureClubForm />} />
            <Route path="artLiteratureTable" element={<AdminArtLiteratureClubTable />} />


            <Route path="archievesForm" element={<AdminArchievesForm />} />
            <Route path="archievesTable" element={<AdminArchievesTable />} />
            <Route path="upcomingEventsForm" element={<AdminUpcomingEventsForm />} />
            <Route path="upcomingEventsTable" element={<AdminUpcomingEventsTable />} />
            <Route path="circularForm" element={<AdminCircularForm />} />
            <Route path="circularTable" element={<AdminCircularTable />} />
            <Route path="pressReleaseForm" element={<AdminPressReleaseForm />} />
            <Route path="pressReleaseTable" element={<AdminPressTable />} />
            <Route path="cctekForm" element={''} />
            <Route path="cctekTable" element={''} />
            <Route path="AicteForm" element={<AdminAICTEForm />} />
            <Route path="AicteTable" element={<AdminAICTETable />} />
            <Route path="RtiForm" element={<AdminRtiForm />} />
            <Route path="RtiTable" element={<AdminRtiTable />} />

            <Route path="telephoneDirectoryForm" element={<AdminStaffInchargeForm />} />
            <Route path="telephoneDirectoryTable" element={<AdminStaffInchargeTable />} />
            <Route path="pioForm" element={<AdminPublicInformationOfficer />} />
            <Route path="pioTable" element={<AdminPublicInformationOfficerTable />} />


          </Route>

          <Route path="footer/sitemap" element={<SiteMap />} />
          <Route path="footer/telephoneDirectory" element={<TelephoneDirectoryPage />} />
          <Route path="footer/industryInteractions" element={<IndustryInteractions />} />
          <Route path="footer/poi" element={<PublicInformationOfficerTable />} />

        </Routes>

        <Footer />

      </BrowserRouter >

    </>
  );
}

export default App;
