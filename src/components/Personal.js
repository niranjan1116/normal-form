
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = ({ formData, handleChange }) => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const handleNext = () => {
    if (validateEmail()) {
      navigate('/address');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setEmailError('Valid email is required');
      return false;
    }

    setEmailError('');
    return true;
  };

  return (
    <div className="personal-container">
      <h2>Personal Details</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Personal;
