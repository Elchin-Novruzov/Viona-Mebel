import React, { useState, useRef } from 'react'
import Container from '../home/Container'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SimilarProduct from './SimilarProduct';
import TogetherProduct from './TogetherProduct';
import Client from './Client';

export default function Detail() {

    window.scrollTo(0, 0);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const overImg = document.querySelectorAll('.over-img')
    overImg.forEach((el) => {
        el.addEventListener('click', () => {
            document.querySelector('.over-img.active').classList.remove('active')
            el.classList.add('active')
        })
    })

    const decTxt = useRef()
    const icon = useRef()

    const openModal = () => {
        decTxt.current.classList.toggle('active')
        icon.current.classList.toggle('active')
    }

    return (
        <main id='detail'>
            <section className='detail'>
                <Container>
                    <div className="top-title">
                        <h4>
                            MƏHSULLAR
                            <span>
                                Məhsullar
                            </span>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="left">
                            <nav>
                                <ul>
                                    <li><a href="#"> Ana səhifə <i class="fa-solid fa-chevron-right"></i> </a></li>
                                    <li><a href="#"> Məhsullar  <i class="fa-solid fa-chevron-right"></i></a></li>
                                    <li><a href="#"> Kreslo </a></li>
                                </ul>
                            </nav>
                            <div className="slide-area">
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="../images/detail.png" />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={5}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper5"
                                    breakpoints={{
                                        340: {
                                            slidesPerView: 3,
                                            spaceBetween: 0,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 0,
                                        }
                                    }}
                                >
                                    <SwiperSlide>
                                        <img className='slide-bottom' src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='slide-bottom' src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='slide-bottom' src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='slide-bottom' src="../images/detail.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='slide-bottom' src="../images/detail.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="right">
                            <span className="name">
                                Kreslo
                            </span>
                            <p className='code'>
                                Məhsulun kodu: <span>v2ghjkl345</span>
                            </p>
                            <div className="price">
                                <span className="old-price">1.400₼</span>
                                <span className='current-price'>1.190₼</span>
                            </div>
                            <span className="color">
                                Rəng seçimləri:
                            </span>
                            <div className="overwlov">
                                <div className="img">
                                    <img className='over-img active' src="../images/c1.png" alt="" />
                                    <span>
                                        Mavi
                                    </span>
                                </div>
                                <div className="img">
                                    <img className='over-img' src="../images/c2.png" alt="" />
                                    <span>
                                        Bej
                                    </span>
                                </div>
                                <div className="img">
                                    <img className='over-img' src="../images/c3.png" alt="" />
                                    <span>
                                        Çəhrayı
                                    </span>
                                </div>
                                <div className="img">
                                    <img className='over-img' src="../images/c1.png" alt="" />
                                    <span>
                                        Mavi
                                    </span>
                                </div>
                                <div className="img">
                                    <img className='over-img' src="../images/c2.png" alt="" />
                                    <span>
                                        Bej
                                    </span>
                                </div>
                                <div className="img">
                                    <img className='over-img' src="../images/c3.png" alt="" />
                                    <span>
                                        Çəhrayı
                                    </span>
                                </div>
                            </div>
                            <div className='detail-txt'>
                                <div className="btn-detail">
                                    <div className="left">
                                        <div>
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <button>
                                            Səbətə at
                                        </button>
                                    </div>
                                </div>
                                <div className="Specialties">
                                    <p className="top">
                                        Xüsusiyyətləri
                                    </p>
                                    <div className="Specialties-row">
                                        <div>
                                            <span>
                                                Hündürlük:
                                            </span>
                                            <p>
                                                5 sm
                                            </p>
                                        </div>
                                        <div>
                                            <span>
                                                Dərinlik:
                                            </span>
                                            <p>
                                                5 sm
                                            </p>
                                        </div>
                                        <div>
                                            <span>
                                                En:
                                            </span>
                                            <p>
                                                180 sm
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                2 oturacaqlı
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dec">
                                    <div onClick={openModal} className="dec-top">
                                        <span>
                                            Təsviri
                                        </span>
                                        <i ref={icon} class="fa-solid fa-chevron-up"></i>
                                    </div>
                                    <p ref={decTxt} className='dec-txt'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SimilarProduct />
                    <TogetherProduct />
                    <Client />
                </Container>
            </section>
        </main>
    )
}
