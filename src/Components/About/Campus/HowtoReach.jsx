import React from 'react';
import './HowToReach.css'; // Import the CSS file

const HowtoReach = () => {
  return (
    <>
      <div className="reach-container">
        <h2 className="reach-heading">How to Reach Us</h2>
        <div className="intro-map-container">
          <div className="intro-text">
            <p>
              Karnataka (Govt.) Polytechnic is situated in Mangalore, a vibrant coastal city known for its educational institutions and serene surroundings. Conveniently located near key transport hubs such as Mangalore Airport and various railway stations, the college is easily accessible for students and visitors. Surrounded by lush greenery and close to the Arabian Sea, the campus provides an ideal environment for academic excellence and personal growth. With a focus on empowering students from rural backgrounds, the institution offers a nurturing and inclusive learning experience.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Karnataka%20(Govt.)%20Polytechnic,%20Mangalore&output=embed"
              title="College Location"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Container for the tables */}
        <div className="tables-container">
          <div>
            <h3 className="table-title">Distance From Popular Destinations</h3>
            <table className="reach-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mangalore Airport</td>
                  <td>09 km</td>
                </tr>
                <tr>
                  <td>Mangalore Central Railway Station</td>
                  <td>04 km</td>
                </tr>
                <tr>
                  <td>Mangalore Junction Railway Station</td>
                  <td>05 km</td>
                </tr>
                <tr>
                  <td>Surathkal Railway Station</td>
                  <td>14 km</td>
                </tr>
                <tr>
                  <td>Mangalore Bus Stand</td>
                  <td>2.5 km</td>
                </tr>
                <tr>
                  <td>Udupi Bus Stand</td>
                  <td>55 km</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="table-title">Travel Time and Distance from Popular Cities</h3>
            <table className="travel-table">
              <thead>
                <tr>
                  <th>By Bus</th>
                  <th>By Train</th>
                  <th>By Air</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>From Mumbai: 22 hrs</td>
                  <td>From Mumbai: 18 hrs</td>
                  <td>From Bangalore: 40 mins</td>
                </tr>
                <tr>
                  <td>From Bangalore: 7 hrs</td>
                  <td>From Chennai: 18 hrs</td>
                  <td>From Mumbai: 1 hour 20 mins</td>
                </tr>
                <tr>
                  <td>From Mysore: 7 hrs</td>
                  <td>From Trivandrum: 18 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Goa: 8 hrs</td>
                  <td>From New Delhi: 40 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Ernakulam: 22 hrs</td>
                  <td>From Ernakulam: 9 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Hyderabad: 24 hrs</td>
                  <td>From Calcutta (via Chennai): 50 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Bijapur: 14 hrs</td>
                  <td>From Jammu Tawi (via New Delhi): 60 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Hubli: 7 hrs</td>
                  <td>From Guwahati (via Calcutta): 72 hrs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From Belgaum: 9 hrs</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowtoReach;
