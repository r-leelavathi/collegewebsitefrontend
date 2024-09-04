import React from 'react'
import './PrincipalDesk.css'

const PrincipalDesk = () => {
  return (
    <div className="principal-message-container">
      <div className="message-section">
        <p className="principal-message">
          <h2 className='principal_msg_heading'>From the Principal's Desk</h2><br />
          I am aware that the future of the world is in our classrooms today.<br />
          So, at KPT we push them to <b>explore</b>.<br />
          Watch them to <b>discover </b>.<br />
          Encourage their <b>questions</b>.<br />
          Allow them to <b>struggle</b>.<br />
          Support their <b>thinking</b>.<br />
          Touch their <b>hearts</b>.<br />
          Fill their <b>minds</b>.<br />
          Art their <b>skills</b>.<br />
          Wing their <b>dreams</b>.<br />
          So that they can fly high and change the world for a better tomorrow.<br />
          <br />
          <b className='principalname'> Sri Harisha Shetty</b>, BE(E.C), M.TECH(CSE)<br />
          Principal, KPT Mangalore
        </p>
      </div>
      <div className="photo-section">
        <img
          src="/assets/principaldesk.jpg"
          alt="Principal"
          className="principal-photo"
        />
      </div>
    </div>
  );
};

export default PrincipalDesk;
