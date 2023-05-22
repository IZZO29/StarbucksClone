import React from 'react';
import "../styles/LearnMoreComponent.css";

const LearnMoreComponent = () => {
    return (
        <>
            <div className="bg-white h-20"></div>
            <div className="p-5 lg:pl-20 lg:pr-20 bg-[#edebe9] pb-20">
                <div className="flex justify-between items-center">

                    <span className="text-[#1e3932] font-bold text-2xl">Learn more about the world of coffee! </span>
                    <span className="font-semibold text-sm text-[#00754a]">Discover More</span>

                </div>

                <div className='mt-10 rounded-lg cursor-pointer'>
                    <div className='flex flex-col justify-between rounded-lg cursor-pointer image pl-10 pt-5 pb-10'>
                        <span
                            className='text-[#096] bg-[#E6EDEB] p-1 rounded-md w-4'
                            styles={{ fontSize: 10 }}
                        ></span>
                        <div className='text-white'>
                        <p className='text-2xl font-semibold'>Behind Every Starbucks Cup</p>
                        <p className='mt-2 font-light'>Ever Wondered how Starbucks ensures the quality of your daily cup of coffee? Learn how we bring the best coffee experience possible.</p>
                        <button className='bg-white text-xs font-semibold text-[#1e3932] mt-14 pl-16 pr-16 p-2 rounded-full'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default LearnMoreComponent;