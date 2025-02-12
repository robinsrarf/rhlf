import React from 'react'
import photo1 from '../../assets/images/testimonals/photo1.png';
import photo2 from '../../assets/images/testimonals/photo2.png';
import man from '../../assets/images/testimonals/man1.png';
import woman from '../../assets/images/testimonals/women.png';

const testimonalsData = [
  {
    id: 1,
    photo: '../../assets/images/testimonals/man1.png',
    quote: '“ The best way to find yourself is to lose yourself in the service of others “',
    name: 'Ananth Desai , Bangalore',
  },
  {
    id: 2,
    photo: '../../assets/images/testimonals/women.png',
    quote: '“ The best way to find yourself is to lose yourself in the service of others “',
    name: 'Radha Kumar , Bangalore',
  }
]

const Testimonals = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-y-4'>
      {/* upper section */}
      <div className='flex gap-x-10'>
        {/* left side */}
        <div className='flex items-center gap-x-2'>
          <div className='flex flex-col items-end'>
          <h2 className='font-semibold text-base'>“ The best way to find yourself is to lose yourself in the service of others “</h2>
          <p className=''>Ananth Desai , Bangalore</p>
          </div>
          {/* photo of testi */}
          <img src={man} alt="" />

        </div>
        {/* right side */}
        <div>
          <img src={photo1} alt="man" />
        </div>
      </div>



      {/* lower section */}
      <div className='flex gap-x-4'>
        {/* left side */}
        <div>
          <img src={photo2} alt="man" />
        </div>
        {/* right side */}
        <div className='flex items-center gap-x-2'>
          <div className='flex flex-col items-end'>
          <h2 className='font-semibold text-base'>“ The best way to find yourself is to lose yourself in the service of others “</h2>
          <p className=''>Ananth Desai , Bangalore</p>
          </div>
          {/* photo of testi */}
          <img src={woman} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Testimonals
