import React from 'react'

export default function Modal({ images, hide, title, code, oldPrice, currentPrice }) {
  return (
    <aside>
      <div className="aside-content">
        <img className='slide-mobile' src={images} alt="" />
        <div className="slide-content">
          <h5 className='title'> {title} </h5>
          <span className="code">{code}</span>
          <div className="price">
            {
              oldPrice ? <span className='old-price'> {oldPrice} </span> : null
            }
            <span className='current-price'>{currentPrice}</span>
          </div>
        </div>
        <div className="aside-item">
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
        </div>
        <a href="#"> Ətraflı baxış  </a>
        <div onClick={hide} className="close">
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
    </aside>
  )
}
