import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
export default function Modal({ modal, hide, images, title, code, currentPrice }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const decTxt = useRef()
  const icon = useRef()

  const openModal = () => {
    decTxt.current.classList.toggle('active')
    icon.current.classList.toggle('active')
  }

  return (
    <div style={modal} className="modalArea">
      <div className='modalFilter'>
        <div className="modal-row">
          <div className="modal-left">
            <div onClick={hide} className="close">
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="modal-top">
              <div>
                <span>
                  {title}
                </span>
                <p>
                  {code}
                </p>
              </div>
              <div>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
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
                  <img src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images} />
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
                className="mySwiper"
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
                  <img className='slide-bottom' s src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='slide-bottom' s src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='slide-bottom' s src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='slide-bottom' s src={images} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='slide-bottom' src={images} />
                </SwiperSlide>
              </Swiper>

            </div>
            <a href="#">
              Ətraflı
            </a>
          </div>
          <div className="modal-right">
            <span className="price">
              {currentPrice}
            </span>
            <div className='detail-txt'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
