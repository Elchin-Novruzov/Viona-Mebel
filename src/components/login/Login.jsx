import React, { useEffect } from 'react'
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
export default function Login() {
    window.scrollTo(0, 0) 
    var countDate = new Date("Mar 28, 2023 00:00:00").getTime();

    function newYear2() {
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
            newYear2();
        }, 1000);
    }, [])

    return (
        <main>
            <section className='global-slide' id='login'>
                <BannerGlobal />
                <Container>
                    <div className="top-title">
                        <h4>
                            GİRİŞ
                            <span>
                                Giriş
                            </span>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="login-left">
                            <div className="login-area">
                                <ul>
                                    <li>
                                        <Link to='/giris' className='form-link active'>Giriş</Link>
                                    </li>
                                    <li>
                                        <Link className='form-link ' to="/qeydiyyat">Qeydiyyat </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inputs">
                                <form action="">
                                    <div>
                                        <input placeholder='E-mail və ya nömrə' type="text" />
                                        <input placeholder='Şifrə' type="text" />
                                    </div>
                                    <div className="form-btn">
                                        <button type='submit'> Giriş </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="right-item">
                            <Swiper style={{ paddingLeft: '20px', paddingRight: '20px' }}
                                cssMode={true}
                                navigation={true}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                spaceBetween={30}
                                modules={[Navigation, Mousewheel, Keyboard]}
                                className="mySwiper">

                                <SwiperSlide className='slide-dif'>
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
                                    <img src="../images/sl1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className='slide-dif'>
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
                                    <img src="../images/sl1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className='slide'>
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
            </section>
        </main>
    )
}
