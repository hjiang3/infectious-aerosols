import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Compare from './Component/Compare';
import Testimonials from './Component/Testimonials';
import Demo from './Component/Demo';
import Footer from './Component/Footer';
import './App.css'; // Importing CSS file for modal styling

function App() {
  const [comparisonData, setComparisonData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const saveForComparison = (data) => {
    if (comparisonData.length < 5) {
      setComparisonData((prevData) => [...prevData, data]);
    } else {
      setModalIsOpen(true);
      console.log("Maximum cases reached");
      console.log("Data in Compare component", comparisonData);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Hero saveForComparison={saveForComparison} />

      {/*
      <Compare comparisonData={comparisonData} setComparisonData={setComparisonData} />
     
      <Testimonials />
      
      <Demo />*/}
      
      <Footer />
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content" style={{ fontFamily: 'Arial' }}>
            <p>You already have the maximum of five cases.</p>
            <button className="fancy-button4" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
