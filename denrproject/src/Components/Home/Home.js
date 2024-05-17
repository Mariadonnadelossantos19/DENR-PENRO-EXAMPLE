import React, { useState } from 'react';
import './Home.css';
import Denrlogo from '../../Image/DENR-logo.png';

const Home = () => {
  const [page, setPage] = useState('page1');
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = () => {
    setPage('page2');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleCloseClick = () => {
    setPage('page1');
    setSubmitted(false);
  };

  return (
    <div className="container">
      <header>
        <img src={Denrlogo} alt="Logo" className="logo-left" />
        <h1>
          Provincial Environment 
          <span className="and">and</span> 
          <span className="sec_row">Natural Resources Office</span>
        </h1>
        <img src={Denrlogo} alt="Logo" className="logo-right" />
      </header>

      <div className="rectangle">
        <h2> PETMITREE: Online Forestry Services</h2>
      </div>
    </div>
  );
};

export default Home;
