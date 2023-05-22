import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';
import "../styles/BannerComponent.css";

const BannerComponent = () => {
    return (
        <>
            <div className="p-5 lg:pl-20 lg:pr-20">
                <div className="mt-10 relative">
                    <div className="swiper-button-banner image-swiper-button-prev-banner absolute mt-5">
                        <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg"
                            alt="prev" />
                    </div>
                    <div className="swiper-button-banner image-swiper-button-next-banner absolute mt-5">
                        <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg"
                            alt="next" />
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".image-swiper-button-next-banner",
                            prevEl: ".image-swiper-button-prev-banner",
                            disabledClass: "swiper-button-disabled",
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        mousewheel={true}>

                        <SwiperSlide>
                            <div className="w-full rounded-lg shadow-sm p-4 bg-[#EDD15B] relative cursor-pointer">
                                <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                                    <div>
                                        <img
                                            className="absolute left-0"
                                            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/3_2_9509ea1720.png"
                                            width={100}
                                            alt="paris" />
                                    </div>
                                    <div className='z-50'>
                                        <p className="mt-2 text-[#00000de]">Attention Starbucks Fans!</p>
                                        <p className="mt-2 font-semibold text-xl text-[#00000de]">Signature Milkshakes</p>
                                        <p className="mt-2 text-[#00000de]">
                                            Satisfy your sweet tooth with out signature milkshakes. Indulge today in these coffee-free versions.
                                        </p>
                                        <div className="mt-5 flex justify-between">
                                        <div className="flex flex-col">
                                            <span className="mt-5 text-[#00000de]">Starting From</span>
                                            <span className="mb-2 text-[#00000de] font-bold">₹ 330<span className="font-normal">.00</span></span>
                                        </div>
                                        <div className="btn">
                                            <button className="mt-5 bg-[#00754A] text-[#00000de] w-52 rounded-full h-12 text-lg">Order Now</button>
                                        </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="w-full rounded-lg shadow-sm p-4 bg-[#DFC49D] relative cursor-pointer">
                                <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                                    <div>
                                        <img
                                            className="absolute left-0"
                                            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7_1_793a1d6e49.png"
                                            width={100}
                                            alt="paris" />
                                    </div>
                                    <div className='z-50'>
                                        <p className="mt-2 text-[#00000de]">Indulge Today!</p>
                                        <p className="mt-2 font-semibold text-xl text-[#00000de]">Love At First Bite</p>
                                        <p className="mt-2 text-[#00000de]">
                                        Embark on a delectable journey of bite-sized delights.
                                        </p>
                                        <div className="mt-5 flex justify-between">
                                        <div className="flex flex-col">
                                            <span className="mt-5 text-[#00000de]">Starting From</span>
                                            <span className="mb-2 text-[#00000de] font-bold">₹ 160<span className="font-normal">.00</span></span>
                                        </div>
                                        <div className="btn">
                                            <button className="mt-5 bg-[#00754A] text-[#00000de] w-52 rounded-full h-12 text-lg">Order Now</button>
                                        </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full rounded-lg shadow-sm p-4 bg-[#006241] relative cursor-pointer">
                                <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                                    <div>
                                        <img
                                            className="absolute left-0"
                                            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Image_35_ff2c5f9905.png"
                                            width={100}
                                            alt="paris" />
                                    </div>
                                    <div className='z-50'>
                                        <p className="mt-2 text-[#fff]">Go Desi With!</p>
                                        <p className="mt-2 font-semibold text-xl text-[#fff]">Masala Chai</p>
                                        <p className="mt-2 text-[#fff]">
                                            Enjoy traditional masala chai with abundance of strong Indian spices and flavourful handpicked tea.
                                        </p>
                                        <div className="mt-5 flex justify-between">
                                        <div className="flex flex-col">
                                            <span className="mt-5 text-[#fff]">For</span>
                                            <span className="mb-2 text-[#fff] font-bold">₹ 283<span className="font-normal">.00</span></span>
                                        </div>
                                        <div className="btn">
                                            <button className="mt-5 bg-[#fff] text-[#00000de] w-52 rounded-full h-12 text-lg">Order Now</button>
                                        </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="w-full rounded-lg shadow-sm p-4 bg-[#FC774D] relative cursor-pointer">
                                <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                                    <div>
                                        <img
                                            className="absolute left-0"
                                            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/freshly_baked_cropped_c365e34a66.png"
                                            width={100}
                                            alt="paris" />
                                    </div>
                                    <div className='z-50'>
                                        <p className="mt-2 text-[#00000de]">Presenting</p>
                                        <p className="mt-2 font-semibold text-xl text-[#00000de]">Freshly Assembled</p>
                                        <p className="mt-2 text-[#00000de]">
                                            Savor the taste of our new handcrafted sandwiches. Freshness never tasted so good.
                                        </p>
                                        <div className="mt-5 flex justify-between">
                                        <div className="flex flex-col">
                                            <span className="mt-5 text-[#00000de]">Starting From</span>
                                            <span className="mb-2 text-[#00000de] font-bold">₹ 350<span className="font-normal">.00</span></span>
                                        </div>
                                        <div className="btn">
                                            <button className="mt-5 bg-[#00754A] text-[#00000de] w-52 rounded-full h-12 text-lg">Know More</button>
                                        </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BannerComponent;