"use client"

import React from 'react';
import Image from '@/node_modules/next/image';
import { CustomButtonProps } from '@/types/index';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button
            className={`custom-btn ${containerStyles}`}
            type={btnType || "button"}
            disabled={false}
            onClick={handleClick}
        >
            <span className={`flex-1 ${ textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                    fill
                    src={rightIcon}
                    alt="rightIcon"
                    className='object-contain'
                    />
                </div>
            ) }
        </button>
    )
}

export default CustomButton;

