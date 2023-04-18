import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import IgImg7 from '../public/ig-img-7.jpg';
import IgImg8 from '../public/ig-img-8.jpeg';
import IgImg9 from '../public/ig-img-9.jpg';
import IgImg10 from '../public/ig-img-10.jpeg';
import IgImg11 from '../public/ig-img-11.jpg';
import IgImg12 from '../public/ig-img-12.jpg';
import DownloadImg from './DownloadImg';

const Download = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Checkout <b><a href='https://unsplash.com' target='_blank' rel="noopener noreferrer" >Unsplash.com</a></b> </p>
        <p className='pb-4'>Click on Image to Download</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <DownloadImg socialImg={IgImg1} download={IgImg1} />
            <DownloadImg socialImg={IgImg2} />
            <DownloadImg socialImg={IgImg3} />
            <DownloadImg socialImg={IgImg4} />
            <DownloadImg socialImg={IgImg5} />
            <DownloadImg socialImg={IgImg6} />
            <DownloadImg socialImg={IgImg7} />
            <DownloadImg socialImg={IgImg8} />
            <DownloadImg socialImg={IgImg9} />
            <DownloadImg socialImg={IgImg10} />
            <DownloadImg socialImg={IgImg11} />
            <DownloadImg socialImg={IgImg12} />
        </div>
    </div>
  )
}

export default Download