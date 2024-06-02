import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { portnyor } from '../data/data';
import Container from '../home/Container';
export default function Partnyor() {
    return (
        <section id='portnyor'>
            <Container>
                <div className="top-title">
                    <h4>
                        PARTNYORLAR
                        <span>
                            Partnyorlar
                        </span>
                    </h4>
                </div>
                <Swiper style={{ marginTop: "53px", paddingBottom: "55px", marginBottom: "50px" }}
                    pagination={true}
                    modules={[Pagination]}
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    slidesPerView={5}
                    className="mySwiper6">

                    {
                        portnyor.map((el, idx) => {
                            return (
                                <SwiperSlide key={idx} >
                                    <div style={{ display: "flex", justifyContent: "center" }} className="swiper-item">
                                        <img src={el.images} alt="" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </section>
    )
}
