import React from 'react';
import kakhagImage from '../../assets/images/3tabs/kakhag.png';
import children from '../../assets/images/3tabs/children.png';
import donate from '../../assets/images/3tabs/donate.png';
import touch from '../../assets/images/3tabs/touch.png';
import hand from '../../assets/images/3tabs/hand.png';

const ThreeTab = () => {
  return (
    <div 
      className="flex flex-col justify-between items-center mt-20 w-full h-[60vh] relative"
      style={{ backgroundImage: `url(${kakhagImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    > 
    
      <div className='flex flex-row items-start justify-center p-2 md:p-0 gap-x-4'>
        <div className=' w-auto md:w-44 h-auto md:h-[85px] bg-white shadow-md cursor-pointer p-4 md:p-3 rounded-xl hover:scale-105 transition-all '>
        <a href="/programmes">
          <div className='flex flex-row items-center justify-center gap-x-4'>
            <img src={donate} alt='donate' className='w-10 h-10'/>
            <p className='text-md  text-gray-600'>I want to <span className='text-black font-semibold'>Donate</span></p>
          </div>
        </a>
        </div>
        <div className=' w-auto md:w-44 h-auto bg-black shadow-md p-5 rounded-xl cursor-pointer hover:scale-105 transition-all text-white '>
            <div className='flex flex-col items-center justify-center gap-y-2'>
              <div className='flex flex-row items-center justify-center gap-x-4'>
                  <img src={hand} alt='donate' className='w-8 h-8'/>
                  <p className='text-md text-gray-200'>I want to <span className='text-white font-semibold'>Volunteer</span></p>
              </div>
              <p className='text-md text-white font-light text-sm'>Spread smiles by investing your time</p>

            </div>
        </div>
        <a href="/contact">
        <div className=' w-auto md:w-44 h-auto bg-white shadow-md p-5 rounded-xl cursor-pointer hover:scale-105 transition-all ' >
            <div className='flex flex-row items-center justify-center gap-x-4'>
                <img src={touch} alt='donate' className='w-8 h-8'/>
                <p className='text-md text-gray-600'>Get in <span className='text-black font-semibold'>Touch</span></p>
              </div>
        </div>
        </a>
      </div>
      <img src={children} alt='children' className='w-full object-contain mt-10 h-[90%]' />
    </div>
  );
};

export default ThreeTab;
