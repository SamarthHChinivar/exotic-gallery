import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadImg = ({ socialImg, download }) => {
  const downloadImage = (e) => {
    e.preventDefault();
    const anchor = document.createElement('a');
    anchor.href = socialImg.src;
    anchor.download = download;
    anchor.click();
  };

  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <div
        className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'
        onClick={downloadImage}
      >
        <p className='text-gray-300 hidden group-hover:block'>
          <FaDownload size={30} className='z-10' />
        </p>
      </div>
    </div>
  );
};

export default DownloadImg;