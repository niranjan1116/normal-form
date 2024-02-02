
import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ formData }) => {
  return (
    <div className="result-container">
      <h2>Submitted Details</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Street: {formData.street}</p>
      <p>City: {formData.city}</p>
      <p>Card Number: {formData.cardNumber}</p>
      <p>Expiry Date: {formData.expiryDate}</p>

      <div>
        <Link to="/payment">
          <button>Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
