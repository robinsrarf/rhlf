import React from 'react';

export default function Partners() {
  const importImage = (imageName) => {
    return new URL(`../../assets/images/Partners/${imageName}`, import.meta.url).href;
  };

  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    'logo8.png',
    'logo9.png',
    'logo10.png',
    'logo11.png',
    'logo12.png',
    'logo13.png',
    'logo14.png',
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='font-[550] text-[22px] '>Our Partners</h2>
      <div className='marquee-container'>
        <div className='marquee mt-10'>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img key={index} src={importImage(logo)} alt={logo} className='logo' />
          ))}
          {/* Duplicate  */}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={importImage(logo)} alt={logo} className='logo' />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={importImage(logo)} alt={logo} className='logo' />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={importImage(logo)} alt={logo} className='logo' />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={importImage(logo)} alt={logo} className='logo' />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={importImage(logo)} alt={logo} className='logo' />
          ))}
        </div>
      </div>
    </div>
  );
}
