// //callback function => arrow function 
// import React, { useState, useEffect } from 'react'
// function App() {
//   const [fromData, setFormData] = useState({
//     name:"",
//     email:"",
//     password:""
//   });
// }
// //useEffect
// useEffect(() =>{
//   console.log("from updated",fromData);
// },[fromData]);

import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    console.log("form Data updated", formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful");
    console.log(formData);
  };

  return (
    /* This className "form-container" matches your CSS */
    <div className="form-container">
      {/* This className "registration-card" creates the white box */}
      <div className="registration-card">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
          
          <input
            type='email'
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
          />
          
          <input
            type='password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
          />

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;

