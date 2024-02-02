
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Personal from './components/Personal';
import Address from './components/Address';
import Payment from './components/Payment';
import Result from './components/Result';
import './components/styles.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    cardNumber: '',
    expiryDate: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal formData={formData} handleChange={handleChange} />} />
        <Route path="/address" element={<Address formData={formData} handleChange={handleChange} />} />
        <Route path="/payment" element={<Payment formData={formData} handleChange={handleChange} />} />
        <Route path="/result" element={<Result formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
