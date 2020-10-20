import React from 'react';
import '../../styles/atoms/input.css';

const Input = ({ label, type, onChange, value }) => {
  return (
    <div className="Input">
      <label>{label}</label>
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required
      />
    </div>
  );
};

const Submit = ({ value }) => {
  return (
    <div className="Submit">
      <input type="submit" value={value ? value : 'Send'} />
    </div>
  );
};

export { Input, Submit };
