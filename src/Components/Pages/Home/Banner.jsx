import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <div className=' rounded-md '>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <section className="p-6 bg-gray-50 rounded-md">
                        <div className=" grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                <h1 className="text-4xl font-extrabold">Jute and Wooden Jewelry</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Adorn yourself with the earthy elegance of our jute and wooden jewelry, perfect for adding a bohemian touch to any ensemble.</span>
                                </p>
                               <button className='btn btn-outline'>View Details</button>
                            </div>
                            <img  src="https://i.ibb.co/gPP7XsH/high-angle-woman-posing-with-old-phone.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 bg-red-100 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                
                                <h1 className="text-4xl font-extrabold">Jute Kitchenware & Utensils</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Embrace sustainability in the kitchen with our jute kitchenware, providing eco-conscious solutions without sacrificing style.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                               
                            </div>
                            <img src="https://i.ibb.co/gmPYBxm/front-view-ecological-zero-waster-concept-1.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 bg-amber-100 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                
                                <h1 className="text-4xl font-extrabold">Jute Home Decor</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Discover eco-friendly sophistication with our jute home decor collection, offering sustainable style for your living spaces.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                               
                            </div>
                            <img src="https://i.ibb.co/dMHL6kd/knitting-concept-with-yarns-knitters.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 bg-green-100 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                <h1 className="text-4xl font-extrabold">Wooden Utensils and Kitchenware</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Cook in style with our elegant wooden utensils and kitchenware, combining functionality with timeless design.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                            </div>
                            <img src="https://i.ibb.co/mykbDPJ/cooking-equipment-kitchen-counter.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 bg-blue-100 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                
                                <h1 className="text-4xl font-extrabold">Wooden Home Decor</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Infuse warmth and style into your home with our wooden decor accents, adding natural beauty to every corner.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                               
                            </div>
                            <img src="https://i.ibb.co/PCb2tmq/handcrafted-wooden-decorative-vase.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 bg-fuchsia-100 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                
                                <h1 className="text-4xl font-extrabold">Wooden Furniture & Sculptures</h1>
                                <p className="my-8">
                                    <span className="font-medium ">Elevate your space with our timeless wooden furniture and sculptures, blending rustic charm with artisanal craftsmanship.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                               
                            </div>
                            <img src="https://i.ibb.co/Wsqn2VJ/interior-decoration-inspired-by-mexican-folklore.jpg" alt="" className="object-coverw-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                
            </Swiper>




        </div>
    )
}
