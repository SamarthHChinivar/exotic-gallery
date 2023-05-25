import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';

export async function getServerSideProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data: emailData, error: emailError } = await supabaseAdmin
    .from('email')
    .select('*')
    .order('id');

  return {
    props: {
      emailData, 
      emailError,
    },
  }
}

const Contact = ({ emailData, emailError }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from('images').insert({ name, subject, image_url: imageUrl });

    if (error) {
      alert(error);
      location.reload();
    } else {
      alert('Details added to database!');
      location.reload();
    }
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from('email').insert({ email });

    if (error) {
      alert(error);
      location.reload();
    } else {
      alert('Email added to database!');
      location.reload();
    }
  };

  return (
    <div className='max-w-[1240px] m-auto p-4 mb-16'>
      <h1 className='text-2xl font-bold text-center pt-8 pb-2'>Enter details to contribute:</h1>
      <p className='text-center pb-2'>In case if only image is avialable , for converting it into URL use <b><a href="https://imgbb.com" target='_blank' rel="noopener noreferrer" >https://imgbb.com</a></b></p>       
      <form className='max-w-[600px] m-auto' onSubmit={handleImageSubmit}>
        <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Name' value={name} onChange={handleNameChange} required />
        <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Subject' value={subject} onChange={handleSubjectChange} required />
        <input className='border shadow-lg p-3 w-full mt-3.5' type='url' placeholder='Image URL' value={imageUrl} onChange={handleImageUrlChange} required />
        <button className='border shadow-lg p-3 w-full mt-3.5' type="submit">Submit</button>
      </form>

      <h1 className='text-2xl font-bold text-center pt-16 pb-1'>Subscribe to E-mail updates:</h1>     
      <form className='max-w-[600px] m-auto' onSubmit={handleEmailSubmit}>
          <input className='border shadow-lg p-3 w-full mt-3' type="email" placeholder='Email address' value={email} onChange={handleEmailChange} required />
          <button className='border shadow-lg p-3 w-full mt-3' type="submit">Subscribe</button>
      </form>
</div>
);
};

export default Contact;