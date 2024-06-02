import React from 'react'
import { allProduct } from '../data/data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Container from './Container';
export default function PopularProduct() {

    return (
        <section className='popular' id='popular'>
            <Container>
                <div className="top-title">
                    <h4>
                        MƏHSULLAR
                        <span>
                            Məhsullar
                        </span>
                    </h4>
                </div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={4}
                    spaceBetween={0}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    className="mySwiper2 myswip"
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        725: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {
                        allProduct.map((el, idx) => {
                            return (
                                el.category === 'products' ?
                                    <SwiperSlide key={idx} className='swiper-slider'>
                                        <div className="slide-item">
                                            <img src={el.images} alt="" />
                                            <div className="img-bottom">
                                                <ul>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="slide-content">
                                                <h5 className='title'>
                                                    {el.title}
                                                </h5>
                                                <span className="code">{el.code}</span>
                                                <div className="price">
                                                    <span className='old-price'> {el.oldPrice} </span>
                                                    <span className='current-price'>{el.currentPrice}</span>
                                                </div>
                                            </div>
                                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                                            <div className="like">
                                                <i className="fa-regular fa-heart"></i>
                                            </div>
                                        </div>
                                    </SwiperSlide> : null
                            )
                        })
                    }
                </Swiper>
            </Container>
        </section>
    )
}
