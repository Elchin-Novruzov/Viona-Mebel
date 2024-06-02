import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import Container from './Container';
export default function Ppportunity() {
    return (
        <section id='opportunity'>
            <Container>
                <div className="top-title">
                    <h4>
                        BU FÜRSƏT QAÇMAZ!
                        <span>
                            Bu fürsət qaçmaz
                        </span>
                    </h4>
                </div>
                <div className="row">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper4">
                        <SwiperSlide className='slide'>
                            <div className="slide-item">
                                <div className="left">
                                    <div className="product-about">
                                        <div className="product-left">
                                            <span className='product-top'>
                                                <i className="fa-regular fa-bell"></i>   Noyabr fürsəti
                                            </span>
                                            <h6> Stul </h6>
                                            <span className='code'>v2ghjkl345</span>
                                            <div className="price-area">
                                                <span className='price'>
                                                    900₼
                                                </span>
                                                <span className='current-price'>
                                                    790₼
                                                </span>
                                            </div>
                                        </div>
                                        <div className="product-time">
                                            <div className="time">
                                                <div>
                                                    <p>gün</p>
                                                    <span className='days'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saat </p>
                                                    <span className='hours'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>dəqiqə</p>
                                                    <span className='minute'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saniyə</p>
                                                    <span className='seconds'>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                                                <a href="#"> Ətraflı bax </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src="../images/las.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="slide-item">
                                <div className="left">
                                    <div className="product-about">
                                        <div className="product-left">
                                            <span className='product-top'>
                                                <i className="fa-regular fa-bell"></i>   Noyabr fürsəti
                                            </span>
                                            <h6> Stul </h6>
                                            <span className='code'>v2ghjkl345</span>
                                            <div className="price-area">
                                                <span className='price'>
                                                    900₼
                                                </span>
                                                <span className='current-price'>
                                                    790₼
                                                </span>
                                            </div>
                                        </div>
                                        <div className="product-time">
                                            <div className="time">
                                                <div>
                                                    <p>gün</p>
                                                    <span className='days'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saat </p>
                                                    <span className='hours'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>dəqiqə</p>
                                                    <span className='minute'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saniyə</p>
                                                    <span className='seconds'>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                                                <a href="#"> Ətraflı bax </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src="https://woodpecker.com.az/upload/resize_cache/iblock/50e/700_700_0/v23d372mjf19w2qqwjo2257j8arrwwj3.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="slide-item">
                                <div className="left">
                                    <div className="product-about">
                                        <div className="product-left">
                                            <span className='product-top'>
                                                <i className="fa-regular fa-bell"></i>   Noyabr fürsəti
                                            </span>
                                            <h6> Stul </h6>
                                            <span className='code'>v2ghjkl345</span>
                                            <div className="price-area">
                                                <span className='price'>
                                                    900₼
                                                </span>
                                                <span className='current-price'>
                                                    790₼
                                                </span>
                                            </div>
                                        </div>
                                        <div className="product-time">
                                            <div className="time">
                                                <div>
                                                    <p>gün</p>
                                                    <span className='days'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saat </p>
                                                    <span className='hours'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>dəqiqə</p>
                                                    <span className='minute'>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p>saniyə</p>
                                                    <span className='seconds'>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                                                <a href="#"> Ətraflı bax </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src="https://woodpecker.com.az/upload/resize_cache/iblock/1bf/700_700_0/hp1uba5i3m3gli66312rf6r8kjcvc62k.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
