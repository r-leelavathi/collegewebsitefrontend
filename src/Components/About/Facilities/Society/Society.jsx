import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './Society.css'; // Import the CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SocietyGallery from './SocietyGallery';

const Society = () => {
  const [shopInfo, setShopInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/club_details')
      .then(response => {
        setShopInfo(response.data);

      })
      .catch(error => {
        console.error('Error fetching shop info:', error);
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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="society-container">
        <div className="society-content">

          <section className="society-section society-introduction">
            <h2 className="society-page-title">Society Stationery Shop</h2>
            <p className="society-section-content">
              The Society Stationery Shop provides a range of essential services for students, including internal books, records, uniforms, and stationery. The shop also offers a Xerox facility, ensuring that students have access to all necessary materials and tools for their diploma courses.
            </p>
          </section>

          <section className="society-section society-services">
            <h2 className="society-section-title">Services Offered</h2>
            <ul className="society-section-list">
              <li className="society-list-item">Internal books and records for diploma courses.</li>
              <li className="society-list-item">Uniforms for students.</li>
              <li className="society-list-item">Xerox and photocopy services.</li>
              <li className="society-list-item">Stationery items and tools for all academic needs.</li>
            </ul>
          </section>

          <section className="society-section society-operating-hours">
            <h2 className="society-section-title">Operating Hours</h2>
            <p className="society-section-content">
              The Society Stationery Shop is open from 10:00 AM to 2:00 PM on all working days. Please visit during these hours to get the materials you need.
            </p>
          </section>
        </div>

        <div className="society-incharge-section">
          {shopInfo
            .filter(shop => shop.clubName === "Society")
            .map(shop => (
              <div className="society-incharge-info" key={shop.clubIncharge}>
                <iframe
                  src={getIframeLink(shop.clubInchargeImageLink)}
                  title={shop.clubIncharge}
                  className="society-incharge-photo"
                  frameBorder="0"
                  width="100px"
                  height="100px"
                  allowFullScreen
                ></iframe>
                <div className="society-shop-incharge-details">
                  <p className="society-incharge-name">Incharge: {shop.clubIncharge}</p>
                  <p className="society-incharge-department">Designation : {shop.clubInchargeDepartment}</p>
                  <p className="society-incharge-designation">Department : {shop.clubInchargeDesignation}</p>
                  <p className="society-incharge-phone">Phone Number: {shop.clubInchargePhoneNumer}</p>
                  <p className="society-incharge-email">Mail Id: {shop.clubInchargeEmail}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <SocietyGallery />
    </>
  );
};

export default Society;
