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
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
  
    const { data: imageData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`images/${file.name}`, file, {
        cacheControl: 'max-age=31536000, public',
        upsert: false,
      });
  
    if (uploadError) {
      alert(uploadError.message);
      location.reload();
    } else {
      const { data: insertData, error: insertError } = await supabase
        .from('images')
        .insert([{ filename: file.name, url: `https://my-bucket.s3.amazonaws.com/images/${file.name}` }]);
      
      if (insertError) {
        alert(insertError.message);
        location.reload();
      } else {
        alert('Updated to Database Successfully!');
        location.reload();
      }
    }
  };
  

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
  
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
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center pt-16 pb-8'>Enter details to contribute:</h1>     
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
            <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Name' required />
            <input className='border shadow-lg p-3 w-full mt-3.5' type="text" placeholder='Subject' required />
            <input className='border shadow-lg p-3 w-full mt-3.5' type="file" onChange={handleFileChange} required />
            <button className='border shadow-lg p-3 w-full mt-3.5' type="submit">Submit</button>
        </form>

        <h1 className='text-2xl font-bold text-center pt-16 pb-4'>Subscribe to E-mail updates:</h1>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubscribe}>
            <input className='border shadow-lg w-full p-3' type="email" placeholder='Email'name="email" required />
            <button className='border shadow-lg p-3 w-full mt-3' type="submit">Subscirbe</button>
        </form>
    </div>
  );
};

export default Contact;