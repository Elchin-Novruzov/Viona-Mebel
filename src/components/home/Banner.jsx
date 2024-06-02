import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import Container from './Container';

export default function Banner() {

    var countDate = new Date("Mar 28, 2023 00:00:00").getTime();

    function newYear1() {
        var now = new Date().getTime();
        var gap = countDate - now;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / day);
        var h = Math.floor((gap % day) / hour);
        var m = Math.floor((gap % hour) / minute);
        var s = Math.floor((gap % minute) / second);

        const days = document.querySelectorAll('.days')
        const hours = document.querySelectorAll('.hours')
        const minutes = document.querySelectorAll('.minute')
        const seconds = document.querySelectorAll('.seconds')

        for (let i = 0; i < days.length && hours.length && minutes.length && seconds.length; i++) {
            days[i].innerHTML = d
            hours[i].innerHTML = h
            minutes[i].innerHTML = m
            seconds[i].innerHTML = s
        }
    }

    useEffect(() => {
        setInterval(function () {
            newYear1();
        }, 1000);
    }, [])

    return (
        <section className='global-sl' id='banner'>
            <Container>
                <div className="row">
                    <div className="left-item">
                        <img src="../images/left.png" alt="" />
                    </div>
                    <div className="right-item">
                        <Swiper style={{ paddingLeft: '20px', paddingRight: '20px' }}
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            spaceBetween={10}
                            modules={[Navigation, Mousewheel, Keyboard]}
                            className="mySwiper">
                            <SwiperSlide>
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
                                <img style={{ width: '100%', marginTop: '20px' }} src="https://bellissa.az/wp-content/uploads/2021/09/Webp.net-compress-image-6.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
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
                                <img style={{ width: '100%', marginTop: '20px' }} src="https://gardashlar.com/resources/assets/images/product_images/1573217942.ROMA-yumsaq-mebel-compressor.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
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
                                <img style={{ width: '100%', marginTop: '20px' }} src="../images/slide.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section >
    )
}
