import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    window.location.href = '/';
  };

  const [dropdownOpen, setDropdownOpen] = useState({
    academics: false,
    admissions: false,
    activities: false,
    events: false,
    alumni: false,
    news: false,
  });

  const [subDropdownOpen, setSubDropdownOpen] = useState({
    clubsAndSocieties: false,
    admissionProcess: false,
    aboutus: false,
    aboutHistory: false,
    campus: false,
    facilities: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleMouseEnter = (submenu) => {
    setSubDropdownOpen((prevState) => ({
      ...prevState,
      [submenu]: true,
    }));
  };

  const handleMouseLeave = (submenu) => {
    setSubDropdownOpen((prevState) => ({
      ...prevState,
      [submenu]: false,
    }));
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="navbar-container bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
      <div className="navbar-content flex justify-between items-center px-2 py-1">
        <div className="navbar-links flex space-x-6  ">
          <Link to="/" className="nav-link">Home</Link>


          <div className="relative group">
            <button
              onClick={() => toggleDropdown('about')}
              className="nav-link"
            >
              Institute
              {/* <FaAngleDown className="ml-1" /> */}
            </button>

            {dropdownOpen.about && (
              <div className="dropdown-content">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('aboutus')}
                  onMouseLeave={() => handleMouseLeave('aboutus')}
                >
                  <span className="dropdown-link" onClick={preventDefault}>About Us</span>
                  {subDropdownOpen.aboutus && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/instituteProfile" className="dropdown-link">Institute Profile</Link>
                      <Link to="/about/visionMission" className="dropdown-link">Vision & Mission</Link>
                      <Link to="/about/fromPrincipalDesk" className="dropdown-link">From Principal Desk</Link>
                      <Link to="/about/instituteBrouchure" className="dropdown-link">Institute Brouchure</Link>
                      <Link to="/about/organizationstructure" className="dropdown-link">Organization Structure</Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('aboutHistory')}
                  onMouseLeave={() => handleMouseLeave('aboutHistory')}
                >
                  <Link to="/about/history" className="dropdown-link" onClick={preventDefault}>History</Link>
                  {subDropdownOpen.aboutHistory && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/history/formerPrincipals" className="dropdown-link">Former Principals</Link>
                      <Link to="/about/history/awardsAndRecognitions" className="dropdown-link">Awards & Recongnitions</Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('campus')}
                  onMouseLeave={() => handleMouseLeave('campus')}
                >
                  <Link to="/about/campus" className="dropdown-link" onClick={preventDefault}>Campus</Link>
                  {subDropdownOpen.campus && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/campus/howtoreach" className="dropdown-link">How To Reach</Link>
                      <Link to="/about/campus/workinghours" className="dropdown-link">Working Hours</Link>
                      <Link to="/about/campus/campusPlan" className="dropdown-link">Campus Layout</Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('clubsAndSocieties')}
                  onMouseLeave={() => handleMouseLeave('clubsAndSocieties')}
                >
                  <span className="dropdown-link" onClick={preventDefault}>Institutional Committees</span>
                  {subDropdownOpen.clubsAndSocieties && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/institutionalCommittees/iqac" className="dropdown-link">IQAC</Link>
                      <Link to="/about/institutionalCommittees/antiragging" className="dropdown-link">Anti Ragging</Link>
                      <Link to="/about/institutionalCommittees/scstcommittee" className="dropdown-link">SC/ST Committee</Link>
                      <Link to="/about/institutionalCommittees/internalcomplaintcell" className="dropdown-link">Internal Complaint Committee</Link>
                      <Link to="/about/institutionalCommittees/innovationcell" className="dropdown-link">Innovation Cell</Link>
                      <Link to="/about/institutionalCommittees/disciplinemonitoringcell" className="dropdown-link">Discipline Monitoring Cell</Link>
                      <Link to="/about/institutionalCommittees/grievanceredressalcommittee" className="dropdown-link">Grievance Redressal Committee</Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('facilities')}
                  onMouseLeave={() => handleMouseLeave('facilities')}
                >
                  <Link to="/about/facilities" className="dropdown-link" onClick={preventDefault}>Facilities</Link>
                  {subDropdownOpen.facilities && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/facilities/library" className="dropdown-link">Library</Link>
                      <Link to="/about/facilities/hostel" className="dropdown-link">Hostel</Link>
                      <Link to="/about/facilities/canteen" className="dropdown-link">Foodcourt</Link>
                      <Link to="/about/facilities/ground" className="dropdown-link">Sports Ground</Link>
                      <Link to="/about/facilities/society" className="dropdown-link">Society</Link>
                    </div>
                  )}
                </div>
                <Link to="/about/gallery" className="dropdown-link">Gallery</Link>
              </div>
            )}
          </div>

          {/* Academics Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('academics')}
              className="nav-link"
            >
              Academics
            </button>
            {dropdownOpen.academics && (
              <div className="dropdown-content">
                <Link to="/academics/programs" className="dropdown-link">Programs & Courses</Link>
                <Link to="/academics/departments" className="dropdown-link">Departments</Link>
                <Link to="/academics/faculty" className="dropdown-link">Faculty & Staff</Link>
                <Link to="/academics/research" className="dropdown-link">Research & Publications</Link>
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('admissions')}
              className="nav-link"
            >
              Admissions
            </button>
            {dropdownOpen.admissions && (
              <div className="dropdown-content">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('admissionProcess')}
                  onMouseLeave={() => handleMouseLeave('admissionProcess')}
                >
                  <Link className="dropdown-link" onClick={preventDefault} >Admission Process</Link>
                  {subDropdownOpen.admissionProcess && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/admissions/AdmissionProcess/regular" className="dropdown-link">Regular Students</Link>
                      <Link to="/admissions/AdmissionProcess/lateral" className="dropdown-link">Lateral Entry Students</Link>
                      <Link to="/admissions/AdmissionProcess/repeater" className="dropdown-link">Re-admission as Repeater</Link>
                      <Link to="/admissions/AdmissionProcess/changeOfBranch" className="dropdown-link">Change of Branch</Link>
                      <Link to="/admissions/AdmissionProcess/transfer" className="dropdown-link">Change of College</Link>
                    </div>
                  )}
                </div>
                <Link to="/admissions/eligibility" className="dropdown-link">Eligibility Criteria</Link>
                <Link to="/admissions/feeStructure" className="dropdown-link">Fee Structure</Link>
                <Link to="/admissions/admissionStatistics" className="dropdown-link"> Admission Statistics</Link>
                <Link to="/admissions/forms" className="dropdown-link">Application Circulars & Forms</Link>
                <Link to="/admissions/scholarships" className="dropdown-link">Scholarships & Financial Aid</Link>
              </div>
            )}
          </div>

          {/* Student Life Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('activities')}
              className="nav-link"
            >
              Activities
            </button>
            {dropdownOpen.activities && (
              <div className="dropdown-content">
                <Link to="/activities/studentunion" className="dropdown-link">Student Union</Link>
                <Link to="/activities/sports" className="dropdown-link">Sports</Link>
                <Link to="/activities/nss" className="dropdown-link">NSS</Link>
                <Link to="/activities/redcross" className="dropdown-link">Youth Red Cross</Link>
                <Link to="/activities/ncc" className="dropdown-link">NCC</Link>
                <Link to="/activities/wid" className="dropdown-link">WID</Link>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('clubsAndSocieties')}
                  onMouseLeave={() => handleMouseLeave('clubsAndSocieties')}
                >
                  <span className="dropdown-link" onClick={preventDefault}>Clubs</span>
                  {subDropdownOpen.clubsAndSocieties && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/activities/clubs/yoga" className="dropdown-link">Yoga</Link>
                      <Link to="/activities/clubs/technicalclub" className="dropdown-link">Technical Club</Link>
                      <Link to="/activities/clubs/artliterature" className="dropdown-link">Art Literature & Cultural Club</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Events Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('events')}
              className="nav-link"
            >
              Events
            </button>
            {dropdownOpen.events && (
              <div className="dropdown-content">
                <Link to="/events/archives" className="dropdown-link">Archives</Link>
                <Link to="/events/upcomingevents" className="dropdown-link">Upcoming Events</Link>
              </div>
            )}
          </div>

          {/* News & Announcements Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('news')}
              className="nav-link"
            >
              News & Announcements
            </button>
            {dropdownOpen.news && (
              <div className="dropdown-content">
                <Link to="/news/circulars" className="dropdown-link">College Circulars</Link>
                <Link to="/news/press" className="dropdown-link">Press Release</Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown('importantLinks')}
              className="nav-link"
            >
              Important Links
            </button>
            {dropdownOpen.importantLinks && (
              <div className="dropdown-content">
                <Link to="/importantLinks/placements" className="dropdown-link">Placements</Link>
                <a href="https://kptalumni.org/" target="_blank" className="dropdown-link">Alumni & Careers</a>
                <a href="https://r-leelavathi.github.io/iste/" target="_blank" className="dropdown-link">ISTE</a>
                <Link to="/importantLinks/cctek" className="dropdown-link">CCTEK</Link>
                <Link to="/importantLinks/aicte" className="dropdown-link">AICTE</Link>
                <Link to="/importantLinks/rti" className="dropdown-link">RTI</Link>
              </div>
            )}
          </div>

          <Link to="/recruitment" className="nav-link">Recruitment</Link>
          <Link to="/contact-us" className="nav-link">Contact</Link>
          {/* <Link to="/login" className="nav-link">LogIn</Link> */}
          {/* {!isLoggedIn && (
            <Link to="/login" className="nav-link">LogIn</Link>
          )}
          {isLoggedIn && (
            <Link onClick={handleLogout} className="nav-link"> Logout  </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
