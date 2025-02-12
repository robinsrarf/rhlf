import React from 'react'
import assure1 from '../../assets/images/Assureyou/Assurance1.png'
import assure2 from '../../assets/images/Assureyou/Assurance2.png'
import assure3 from '../../assets/images/Assureyou/Assurance3.png'
import assure4 from '../../assets/images/Assureyou/Assurance4.png'

export default function Assureyou() {

  const assurance = [
    {
      icon: assure1,
      title:"All Our Efforts Are Made Possible Only Because Of Your Efforts.",
    },
    {
      icon: assure2,
      title:"All Donations Are Tax Deductible Under Section 80G Of Income Tax Act",
    },
    {
      icon: assure3,
      title:"Your Donation Transactions Are Completely Safe and Secure",
    },
    {
      icon: assure4,
      title:"100% transparency with photo proof and sponsor recognition.",
    },
  ]

  return (
    <div className='flex flex-col gap-y-5 justify-center items-center'>
      <h1 className='text-3xl text-black font-semibold'>We <span className='text-pink-500'>assure</span> you that</h1>
      <div className='flex flex-col lg:flex-row  gap-x-5 lg:max-w-[80%] mt-10'>
        {assurance.map((assure)=>{
          return (
            <div className='flex flex-col gap-y-3 justify-center items-center'> 
              <img src={assure.icon} alt="icon" width={44} height={24}/>
              <h2 className='text-gray-700 text-base'>{assure.title}</h2>
            </div>
          )
        })}
      </div>
      <h2 className='lg:pl-[1000px] mt-5 text-gray-600 cursor-pointer'>View Details →</h2>
    </div>
  )
}
