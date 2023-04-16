import React, { useState } from 'react';

const Contact = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  };

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center pt-16 pb-8'>Enter details to contribute:</h1>     
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
            <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Name' required />
            <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Subject' required />
            <input className='border shadow-lg p-3 w-full mt-3.5' type="file" onChange={handleFileChange} required />
            <button className='border shadow-lg p-3 w-full mt-3.5' type="submit">Submit</button>
        </form>

        <h1 className='text-2xl font-bold text-center pt-16 pb-4'>Subscibe to E-mail updates:</h1>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
            <input className='border shadow-lg w-full p-3' type="email" placeholder='Email' required />
            <button className='border shadow-lg p-3 w-full mt-3' type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Contact;