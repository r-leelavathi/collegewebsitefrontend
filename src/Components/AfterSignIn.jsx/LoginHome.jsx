import React, { useState } from 'react';
import Accordion from './Accordion';
import { Link } from 'react-router-dom';
import './LoginHome.css';
import { homeItems, aboutItems, academicsItems, admissionsItems, activitiesItems, eventsItems, newsAndAnnouncementsItems, importantLinksItems } from './LoginHomeData'

const LoginHome = () => {
  // State to manage the collapse state of each section
  const [collapsedSections, setCollapsedSections] = useState({
    home: false,
    about: false,
    academics: false,
    admissions: false,
    activities: false,
    events: false,
    news: false,
    links: false,
  });

  // Toggle function to handle collapsing and expanding
  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="loginHome-container">
      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('home')} className="collapsible-header">
          Home
        </h2>
        {!collapsedSections.home && (
          <div className="accordion-wrapper">
            <Accordion items={homeItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('about')} className="collapsible-header">
          About
        </h2>
        {!collapsedSections.about && (
          <div className="accordion-wrapper">
            <Accordion items={aboutItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('academics')} className="collapsible-header">
          Academics
        </h2>
        {!collapsedSections.academics && (
          <div className="accordion-wrapper">
            <Accordion items={academicsItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('admissions')} className="collapsible-header">
          Admissions
        </h2>
        {!collapsedSections.admissions && (
          <div className="accordion-wrapper">
            <Accordion items={admissionsItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('activities')} className="collapsible-header">
          Activities
        </h2>
        {!collapsedSections.activities && (
          <div className="accordion-wrapper">
            <Accordion items={activitiesItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('events')} className="collapsible-header">
          Events
        </h2>
        {!collapsedSections.events && (
          <div className="accordion-wrapper">
            <Accordion items={eventsItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('news')} className="collapsible-header">
          News and Announcements
        </h2>
        {!collapsedSections.news && (
          <div className="accordion-wrapper">
            <Accordion items={newsAndAnnouncementsItems} />
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <h2 onClick={() => toggleSection('links')} className="collapsible-header">
          Important Links
        </h2>
        {!collapsedSections.links && (
          <div className="accordion-wrapper">
            <Accordion items={importantLinksItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginHome;

