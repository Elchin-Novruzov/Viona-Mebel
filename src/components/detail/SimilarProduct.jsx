import React, { useState } from 'react'
import { allProduct } from '../data/data'
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
        <section style={{ padding: "0" }} className='popular popular2'>
            <Container>
                <div className="top-title">
                    <h4>
                        OXŞAR MƏHSULLAR
                        <span>
                            Oxşar məhsullar
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
                    className="mySwiper2"
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
                                el.category === 'similarProduct' ?
                                    <SwiperSlide key={idx} className='swiper-slider'>
                                        <div onClick={() => getData(el.images, el.title, el.code, el.oldPrice, el.currentPrice)} className="slide-item" style={{ paddingBottom: '40px' }}>
                                            <img src={el.images} alt="" />
                                            <div className="img-bottom">
                                                <ul>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                    <li><img src={el.images_bottom} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="slide-content">
                                                <h5 className='title'>{el.title}</h5>
                                                <span className="code">{el.code}</span>
                                                <div className="price">
                                                    <span className='old-price'> {el.oldPrice}</span>
                                                    <span className='current-price'>{el.currentPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide> : null
                            )
                        }
                        )
                    }

                </Swiper>
            </Container>
            {
                modal === true ? <Modal hide={() => setModal(false)} oldPrice={tempdata[4]} currentPrice={tempdata[5]} code={tempdata[3]} title={tempdata[1]} images={tempdata[2]} /> : null
            }
        </section>
    )
}
