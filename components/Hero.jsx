import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 mt-2 justify text-xl'>{message}</p>

        <button onClick= {() => window.open('/#', '_self')} className='px-8 py-2 mt-4 mr-3 border'>Home</button>
        <button onClick= {() => window.open('/libraries', '_self')} className='px-8 py-2 mt-4 mr-3 border'>Libraries</button>
        <button onClick= {() => window.open('/contribute', '_self')} className='px-8 py-2 mt-4 mr-3 border'>Contribute</button>
        <button onClick= {() => window.open('https://blog.storyblocks.com/creators/what-is-the-difference-between-royalty-free-and-copyright-free/#:~:text=What%20is%20%E2%80%9CCopyright%2DFree%E2%80%9D,ownership%2Fcreation%20of%20that%20work.', '_blank')} className='px-8 py-2 mt-4 mr-5 border'>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
