import React, { useState } from 'react';
import Accordion from './Accordion';
import './LoginHome.css';
import { homeItems, aboutItems, academicsItems, admissionsItems, activitiesItems, eventsItems, newsAndAnnouncementsItems, importantLinksItems } from './LoginHomeData'

const LoginHome = () => {
  // State to manage the collapse state of each section
  const [collapsedSections, setCollapsedSections] = useState({
    home: true,
    about: true,
    academics: true,
    admissions: true,
    activities: true,
    events: true,
    news: true,
    links: true,
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
      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('home')} className="loginHome-collapsible-header">
          Home
        </h2>
        {!collapsedSections.home && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={homeItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('about')} className="loginHome-collapsible-header">
          About
        </h2>
        {!collapsedSections.about && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={aboutItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('academics')} className="loginHome-collapsible-header">
          Academics
        </h2>
        {!collapsedSections.academics && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={academicsItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('admissions')} className="loginHome-collapsible-header">
          Admissions
        </h2>
        {!collapsedSections.admissions && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={admissionsItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('activities')} className="loginHome-collapsible-header">
          Activities
        </h2>
        {!collapsedSections.activities && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={activitiesItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('events')} className="loginHome-collapsible-header">
          Events
        </h2>
        {!collapsedSections.events && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={eventsItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('news')} className="loginHome-collapsible-header">
          News and Announcements
        </h2>
        {!collapsedSections.news && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={newsAndAnnouncementsItems} />
          </div>
        )}
      </div>

      <div className="loginHome-collapsible-section">
        <h2 onClick={() => toggleSection('links')} className="loginHome-collapsible-header">
          Important Links
        </h2>
        {!collapsedSections.links && (
          <div className="loginHome-accordion-wrapper">
            <Accordion items={importantLinksItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginHome;

