import React, { useEffect, useState } from 'react';
import './Library.css';
import axios from 'axios';
import LibraryGallery from './LibraryGallery';

const Library = () => {

  const [clubInfo, setClubInfo] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/club_details')
      .then(response => {
        setClubInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching club info:', error);
      });
  }, []);

  const getIframeLink = (googleDriveLink) => {
    if (typeof googleDriveLink === 'string') {
      const fileIdMatch = googleDriveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return googleDriveLink;
  };

  return (
    <div className="library-container">

      {/* Overview Section */}
      <section className="library-section overview-section">
        <div className="library-intro">
          <h1 className="library-heading">Library Introduction and Vision</h1>
          <p className="section-content">
            The library of Karnataka Govt Polytechnic Mangalore is a knowledge center with a vision to serve the information needs of its students and faculty. It has a good collection of more than 25000 volumes covering all branches of Science and Engineering.

            Our library is a hub of knowledge and learning, offering a wide range of books, journals, and digital resources to support academic and research needs. The library is designed to provide a quiet and conducive environment for study, group discussions, and research.
          </p>
          <h2 className="section-title">Hours of Operation</h2>
          <p className="library-facilities-list">
            Monday to Friday: 10:00 AM - 5:30 PM<br />
            Saturday: 10:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
          <h2 className="section-title">Library Rules and Regulations</h2>
          <ul className="library-rules-list">
            <li>Maintain silence at all times within the library.</li>
            <li>Library cards are issued to students for borrowing books.</li>
            <li>Books must be returned on or before the due date.</li>
            <li>No food or drinks are allowed inside the library.</li>
            <li>Keep your mobile phones on silent mode.</li>

            <strong>Borrowing Rules: </strong>
            <p className="section-content">Students are given two library cards for borrowing books, which can be issued for 14 days. A fine of 50 paise per day is charged for late returns. Lost books must be replaced with the same edition or latest edition, or double the cost must be paid after approval from the librarian.</p>
            <strong> SC/ST Book Bank:</strong>
            <p className="section-content">
              SC/ST students can borrow two additional books from the SC/ST book bank to use throughout the semester.</p>

          </ul>
          <h2 className="section-title">Facilities and Services</h2>
          <p className="section-content">The library's diverse collection includes textbooks, reference books, encyclopedias, dictionaries, handbooks, and data books, catering to the academic and general requirements of its users. The library has subscribed to 8 newspapers and 10 magazines to keep users updated with current information. The library offers seating arrangements for reading and note preparation, providing a comfortable environment for students.</p>
          <strong>Highlights</strong>
          <ul className="library-facilities-list">
            <li>Reading Rooms.</li>
            <li>SC/ST book bank facility available.</li>
            <li>Computer Stations with Internet Access.</li>
            <li>Photocopying and Printing Services.</li>
            <li>Study Rooms and Discussion Areas.</li>
            <li>Access to E-Books and Digital Resources.</li>
          </ul>
        </div>

        <div className="library-incharge-section">
          {clubInfo
            .filter(club => club.clubName === "Library")
            .map(club => (
              <div className="library-incharge-info" key={club.clubIncharge}>

                <h3>Contact Information</h3>
                <iframe
                  src={getIframeLink(club.clubInchargeImageLink)}
                  title={club.clubIncharge}
                  className="library-incharge-photo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="library-incharge-details">
                  <p className="incharge-name">Incharge: {club.clubIncharge}</p>
                  <p className="incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                  <p className="incharge-designation">Department: {club.clubInchargeDepartment}</p>
                  <p className="incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                  <p className="incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <LibraryGallery />
    </div>
  );
};

export default Library;
