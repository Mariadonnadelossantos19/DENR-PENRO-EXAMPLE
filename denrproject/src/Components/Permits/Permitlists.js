import React, { useState } from 'react';
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';

const Permitlists = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleShowAndCollapse = () => {
    setShow(!show);
  };

  const handleApplyClick = (event) => {
    event.stopPropagation();
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  const handleCloseClick = () => {
    setSubmitted(false);
    setShowForm(false);
  };

  const colors = [
    "#FFB924",
    "#FF8042",
    "#001CCE",
    "#48098A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <Zoom>
      <div className="project-list">
        {submitted ? (
          <div className="message_container">
            <div className="message-box">
              <p>Your application for Chainsaw registration has been submitted. Thank you!</p>
              <button onClick={handleCloseClick}>Close</button>
            </div>
          </div>
        ) : showForm ? (
          <div id="page2" className="page">
            <div className="form-container">
              <h3>Apply for Chainsaw Registration</h3>
              <form id="registrationForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required />

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Barangay, Bayan, Probinsya" required />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="e.g. 09123456789" required />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <>
            <div className='title-and-collapse-option' onClick={handleShowAndCollapse}>
              <h5>{name}</h5>
              <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
            </div>
            <div className='description'>
              {show ? (<p>{des}</p>) : (<p>{des.substring(0, 15)}...<span style={{ color: "orange" }}></span></p>)}
            </div>
            <div className='row'>
              {techused && techused.map((tech, index) => (
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                  <div className='tech-used-in-project'>
                    <p style={{ backgroundColor: colors[index] }}>{tech.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            <button id="applyBtn" onClick={handleApplyClick}>APPLY</button>
          </>
        )}
      </div>
    </Zoom>
  );
};

export default Permitlists;
