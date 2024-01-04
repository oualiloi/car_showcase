'use client'
import { CostumButtonProps } from '@/types';
import React from 'react';

const CustomButton = ({title,containerStyles,handleClick}:CostumButtonProps) => {
  return (
   <button disabled={false}
   type={"button"} 
   className={`custom-btn ${containerStyles}`}
     
    onClick={handleClick}
      >
    <span>
    {title} 
    </span>
   </button>

  );
}

export default CustomButton;
