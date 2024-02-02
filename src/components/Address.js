
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Address = ({ formData, handleChange }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/payment');
  };

  const handlePrev = () => {
    navigate('/');
  };

  return (
    <div className="address-container">
      <h2>Address Details</h2>
      <div>
        <label>Street:</label>
        <input type="text" value={formData.street} onChange={(e) => handleChange('street', e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={formData.city} onChange={(e) => handleChange('city', e.target.value)} />
      </div>
      <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Address;
