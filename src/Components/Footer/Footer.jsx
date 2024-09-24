import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Ensure this file is created and styled appropriately.

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content container mx-auto">
        <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-info">
            <div className="logo-and-name">
              <img src="/assets/logo/collegelogo.jpg" alt="College Logo" className="college-logo" />
              <h3 className="college-name">KPT Mangalore</h3>
            </div>
            <ul>
              <li>
                Karnataka (Govt.) Polytechnic, Mangalore,<br /> Kadri Hills, Mangalore, Dakshina Kannada,<br /> Karnataka - 575004
              </li><br />
              <li>
                Phone: (0824)-3516910, (0824)-3542476
              </li>
              <li>Email: kptmng@gmail.com</li>
              <li className="social-links">
                <Link to="#" className="footer-link">Facebook</Link> |
                <Link to="#" className="footer-link">Twitter</Link> |
                <Link to="#" className="footer-link">LinkedIn</Link> |
                <Link to="#" className="footer-link">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about/visionMission" className="footer-link">About Us</Link></li>
              <li><Link to="/admissions/AdmissionProcess/regular" className="footer-link">Admissions</Link></li>
              <li><Link to="/contact-us" className="footer-link">Contact Us</Link></li>
              <li><Link to="/loginhome" className="footer-link">Login</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Important Links</h3>
            <ul>
              <li>
                <a href="/assets/documents/Terms and Conditions.pdf" target="_blank" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/assets/documents/PrivacyPolicy.pdf" target="_blank" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/assets/documents/Disclaimer.pdf" target="_blank" className="footer-link">
                  Disclaimer
                </a>
              </li>
              <li><Link to="/footer/sitemap" className="footer-link">Site Map</Link></li>
              <li><Link to="/footer/telephoneDirectory" className="footer-link">Telephone Directory</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><Link to="/footer/industryInteractions" className="footer-link">Industry Interactions</Link></li>
              <li><Link to="/importantLinks/rti" className="footer-link">RTI</Link></li>
              <li><Link to="/importantLinks/aicte" className="footer-link">AICTE</Link></li>
              <li><Link to="/student-portal" className="footer-link">Training & Placements</Link></li>

              <li>
                <a href="https://kptalumni.org/" target="_blank" className="footer-link">
                  Alumni & Careers
                </a>
              </li>
              <li><Link to="/footer/poi" className="footer-link">Public Information Officer</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        &copy; {new Date().getFullYear()} KPT Mangalore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
