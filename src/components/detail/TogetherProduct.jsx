import React, { useState } from 'react'
import { allProduct } from '../data/data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Container from '../home/Container';
import Modal from './Modal';

export default function SimilarProduct() {
    const [modal, setModal] = useState(false)
    const [tempdata, setTempdata] = useState([])
    const getData = (images, title, code, oldPrice, currentPrice) => {
        let tempData = [title, images, code, oldPrice, currentPrice]
        setTempdata(el => [1, ...tempData])
        return setModal(true)
    }
    return (
        <section id='together' className='swiperSLideGlobal'>
            <Container>
                <div className="top-title">
                    <h4>
                        Birlikdə alınanlar
                        <span>
                            Birlikdə anlınanlar
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
                    className="mySwiper2 swip"
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
                                el.category === 'TogetherProducts' ?
                                    <SwiperSlide style={{ height: "520px" }} key={idx} className='swiper-slider'>
                                        <div style={{ paddingBottom: "40px" }} onClick={() => getData(el.images, el.title, el.code, el.oldPrice, el.currentPrice)} className="slide-item">
                                            <img className='slide-mobile' src={el.images} alt="" />
                                            <div style={{ paddingLeft: "0px", paddingTop: "20px" }} className="slide-content">
                                                <h5 className='title'>{el.title}</h5>
                                                <span className="code">{el.code}</span>
                                                <div className="price">
                                                    {
                                                        el.oldPrice ? <span className='old-price'> {el.oldPrice} </span> : null
                                                    }
                                                    <span className='current-price'>{el.currentPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide> : null
                            )
                        })
                    }
                </Swiper>
            </Container>
            {
                modal === true ? <Modal hide={() => setModal(false)} oldPrice={tempdata[4]} currentPrice={tempdata[5]} code={tempdata[3]} title={tempdata[1]} images={tempdata[2]} /> : null
            }
        </section>
    )
}
