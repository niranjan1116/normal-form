
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Payment = ({ formData, handleChange }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/result');
  };

  const handlePrev = () => {
    navigate('/address');
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={(e) => handleChange('cardNumber', e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={(e) => handleChange('expiryDate', e.target.value)}
          required
        />
      </div>

      <div>
        <button onClick={handlePrev}>Previous</button>
        <Link to="/result">
          <button onClick={handleNext}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
