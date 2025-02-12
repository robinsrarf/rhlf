import React from 'react'

import { BiArrowBack } from 'react-icons/bi';

import children from '../../assets/images/3tabs/children.png'
import mainslider from '../../assets/images/mainslider.png'
import homepage from '../../assets/images/homepage.png'
import mealtab from '../../assets/images/mealtab.png'
import ThreeTab from './ThreeTab';

const Hero = () => {
    const importImage = (imageName) => {
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
      };
  return (
    <div className='relative text-black text-[20px] w-full max-w-[1360px] mx-auto'>
        <Carousel>
                <div>
                    
                    <div className="flex flex-col justify-center items-center relative">
                    <img src={homepage} alt="Homepage" className="w-full " />
                    <img
                    src={mealtab}
                    alt="Meal Tab"
                    className="w-[50%] mt-[-40px]"
                    />
                    </div>

                    <h1 className="heading text-3xl md:text-5xl text-center font-light mt-8">
                        <span className="text-gray-700 font-medium">Together</span> We Make a <span className="text-black font-bold">Difference</span>
                    </h1>

                    <div className=" flex flex-col justify-center items-center text-lg text-gray-500 ">
                        <p>Real Happiness Of Life Foundation for social change and inclusion works for the social</p>
                        <p>development and integration of underprivileged individuals, groups, and communities in India.</p>
                    
                    </div>
                </div>
                <div>
                    <ThreeTab/>
                </div>
                
            </Carousel>
    </div>
  )
}

export default Hero