import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll =() => {
    
  }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                Find,book,or rent a car --quickly and easily
            </h1>
            <p className='hero_subtitle'>
                    stearmline your car Rental experience with 
            our effortless booking process
            </p>
              <CustomButton title='explore cars' containerStyles="bg-primary-blue texte-white rounded-full mt-10"
      // handleClick={handleScroll}
      />
         <div className='hero__image-container'>
          <div className='hero__image'>
              <Image src="/hero.png" fill className='object-contain'   alt='car'/>
              <div className='hero__image-overlay'></div>
                        </div>
        </div>
        </div>
     
    </div>
  );
}

export default Hero;
