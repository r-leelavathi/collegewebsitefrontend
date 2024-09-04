import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    academics: false,
    admissions: false,
    studentLife: false,
    events: false,
    alumni: false,
    news: false,
  });

  const [subDropdownOpen, setSubDropdownOpen] = useState({
    clubsAndSocieties: false,
  });
  const [facilities, setFacilities] = useState({
    facilities: false,
  })
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

  return (
    <nav className="navbar-container bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
      <div className="navbar-content flex justify-between items-center px-2 py-1">
        <div className="navbar-logo text-white text-2xl font-bold">
          <Link to="/">Karnataka (Govt.) Polytechnic</Link>
        </div>
        <div className="navbar-links flex space-x-6  ">
          <Link to="/" className="nav-link">Home</Link>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown('about')}
              className="nav-link"
            >
              About
            </button>
            {dropdownOpen.about && (
              <div className="dropdown-content">
                <Link to="/about/instituteProfile" className="dropdown-link">Institue Profile</Link>
                <Link to="/about/visionMission" className="dropdown-link">Vision & Mission</Link>
                <Link to="/about/fromPrincipalDesk" className="dropdown-link">From Principal Desk</Link>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('clubsAndSocieties')}
                  onMouseLeave={() => handleMouseLeave('clubsAndSocieties')}
                >
                  <Link to="/about/institutionalCommittees" className="dropdown-link">Institutional Committees</Link>
                  {subDropdownOpen.clubsAndSocieties && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/institutionalCommittees/iqac" className="dropdown-link">IQAC</Link>
                      <Link to="/about/institutionalCommittees/antiragging" className="dropdown-link">Anti Ragging</Link>
                      <Link to="/about/institutionalCommittees/internalcomplaintcell" className="dropdown-link">Internal Complaint Committee</Link>
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
                  <Link to="/about/institutionalCommittees" className="dropdown-link">Facilities</Link>
                  {subDropdownOpen.facilities && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/about/institutionalCommittees/iqac" className="dropdown-link">Library</Link>
                      <Link to="/about/institutionalCommittees/antiragging" className="dropdown-link">Canteen</Link>
                      <Link to="/about/institutionalCommittees/internalcomplaintcell" className="dropdown-link">College Ground</Link>
                    </div>
                  )}
                </div>
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
                <Link to="/admissions/process" className="dropdown-link">Admission Process</Link>
                <Link to="/admissions/eligibility" className="dropdown-link">Eligibility Criteria</Link>
                <Link to="/admissions/forms" className="dropdown-link">Application Forms</Link>
                <Link to="/admissions/scholarships" className="dropdown-link">Scholarships & Financial Aid</Link>
              </div>
            )}
          </div>

          {/* Student Life Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('studentLife')}
              className="nav-link"
            >
              Activities
            </button>
            {dropdownOpen.studentLife && (
              <div className="dropdown-content">
                <Link to="/student-life/campus" className="dropdown-link">Student Union</Link>
                <Link to="/student-life/campus" className="dropdown-link">Sports</Link>
                <Link to="/student-life/campus" className="dropdown-link">NSS</Link>
                <Link to="/student-life/campus" className="dropdown-link">Youth Red Cross</Link>
                <Link to="/student-life/campus" className="dropdown-link">NCC</Link>
                <Link to="/student-life/campus" className="dropdown-link">WID</Link>
                {/* Clubs & Societies with Submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('clubsAndSocieties')}
                  onMouseLeave={() => handleMouseLeave('clubsAndSocieties')}
                >
                  <Link to="/student-life/clubs" className="dropdown-link">
                    Clubs
                  </Link>
                  {subDropdownOpen.clubsAndSocieties && (
                    <div className="submenu-content absolute left-full top-0 mt-0 bg-white shadow-md">
                      <Link to="/student-life/clubs/yoga" className="dropdown-link">Yoga</Link>
                      <Link to="/student-life/clubs/technicalclub" className="dropdown-link">Technical Club</Link>
                      <Link to="/student-life/clubs/artliterature" className="dropdown-link">Art Literature & Cultural Club</Link>
                    </div>
                  )}
                </div>
                {/* <Link to="/student-life/housing" className="dropdown-link">Housing & Dining</Link> */}
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
                <Link to="/importantLinks/contact-us" className="dropdown-link">Alumni</Link>
                <Link to="/importantLinks/iste" className="dropdown-link">ISTE</Link>
                <Link to="/importantLinks/contact-us" className="dropdown-link">CCTEK</Link>
                <Link to="/importantLinks/contact-us" className="dropdown-link">AICTE</Link>
                <Link to="/importantLinks/contact-us" className="dropdown-link">RTI</Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;