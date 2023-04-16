import React, { useState } from 'react';
import axios from 'axios';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCO0hAw-BjYx-1BbytSRZehHnvdJbpDW4g",
  authDomain: "exotic-e3ae9.firebaseapp.com",
  projectId: "exotic-e3ae9",
  storageBucket: "exotic-e3ae9.appspot.com",
  messagingSenderId: "341510399573",
  appId: "1:341510399573:web:a9398639e7d16ce00dd6dc",
  measurementId: "G-995NTDYVWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics; // declare the analytics variable globally

if (typeof window !== 'undefined') {
  // Only import the firebase/analytics module when in the client-side environment
  const { getAnalytics } = require('firebase/analytics');
  const app = initializeApp(firebaseConfig);
  // analytics = getAnalytics(app); // initialize analytics
}

const Contact = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('subject', subject);
      formData.append('email', email);

      await axios.post('https://us-central1-exotic-e3ae9.cloudfunctions.net/submit', formData);

      // Clear the form after successful submission
      setFile(null);
      setName('');
      setSubject('');
      setEmail('');

      alert('Form submitted successfully!');
    } 
    
    catch (error) {
      console.error(error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center pt-16 pb-8'>Enter details to contribute:</h1>     
      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Name' value={name} onChange={handleNameChange} required />
        <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Subject' value={subject} onChange={handleSubjectChange} required />
        <input className='border shadow-lg p-3 w-full mt-3.5' type="file" onChange={handleFileChange} required />
        <button className='border shadow-lg p-3 w-full mt-3.5' type="submit">Submit</button>
      </form>

      <h1 className='text-2xl font-bold text-center pt-16 pb-4'>Subscribe to E-mail updates:</h1>
      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <input className='border shadow-lg w-full p-3' type="email" placeholder='Email' value={email} onChange={handleEmailChange} required />
        <button className='border shadow-lg p-3 w-full mt-3' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;