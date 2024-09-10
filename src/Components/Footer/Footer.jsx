import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-gradient-to-r from-purple-500 to-blue-500 text-white py-8">
      <div className="footer-content container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about-us" className="footer-link">About Us</a></li>
            <li><a href="/admissions" className="footer-link">Admissions</a></li>
            <li><a href="/contact-us" className="footer-link">Contact Us</a></li>
            <li><a href="/loginhome" className="footer-link">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Important Links</h3>
          <ul>
            <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            <li><a href="/disclaimer" className="footer-link">Disclaimer</a></li>
            <li><a href="/site-map" className="footer-link">Site Map</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact Information</h3>
          <ul>
            <li>Address: 123 College St, City</li>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@college.edu</li>
            <li className="social-links">
              <a href="#" className="footer-link">Facebook</a> |
              <a href="#" className="footer-link">Twitter</a> |
              <a href="#" className="footer-link">LinkedIn</a> |
              <a href="#" className="footer-link">Instagram</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li><a href="/library" className="footer-link">Library</a></li>
            <li><a href="/research-centers" className="footer-link">Research Centers</a></li>
            <li><a href="/online-learning" className="footer-link">Online Learning</a></li>
            <li><a href="/student-portal" className="footer-link">Student Portal</a></li>
            <li><a href="/alumni-careers" className="footer-link">Alumni & Careers</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom mt-8 text-center">
        &copy; {new Date().getFullYear()} College Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
