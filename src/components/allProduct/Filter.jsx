import React, { useEffect, useRef } from 'react'

function changeColor() {
    const color = document.querySelectorAll('.color')
    color.forEach((el) => {
        el.addEventListener('click', () => {
            document.querySelector('.color.active').classList.remove('active')
            el.classList.add('active')
        })
    })
}

function changeSelect() {
    const itemTop = document.querySelectorAll(".item-top");
    const checkbox = document.querySelectorAll('.checkbox')
    const iconArrows = document.querySelectorAll('.icon-arrow')
    itemTop.forEach((el, item) => {
        el.addEventListener('click', () => {
            checkbox[item].classList.toggle('active')
            iconArrows[item].classList.toggle('active')
        })
    })
}

export default function Filter() {

    const openItem = useRef()

    const openFilter = () => {
        openItem.current.classList.toggle('active')
    }
    useEffect(() => {
        changeColor()
    }, [])

    useEffect(() => {
        changeSelect()
    }, [])
    
    return (
        <div className='filters'>
            <div onClick={openFilter} className="filter-button-top">
                <button> Filtrelə <i class="fa-solid fa-filter"></i> </button>
            </div>
            <div ref={openItem} className="left-item">
                <div className="item-row">

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Otaq
                            </span>
                            <i className="fa-solid fa-chevron-down icon-arrow"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m1' type="checkbox" />
                                <label htmlFor="m1">Mətbəx</label>
                            </div>
                            <div>
                                <input id='m2' type="checkbox" />
                                <label htmlFor="m2">Qonaq otağı</label>
                            </div>
                            <div>
                                <input id='m3' type="checkbox" />
                                <label htmlFor="m3">Uşaq otağı</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Kateqoriya
                            </span>
                            <i className="fa-solid fa-chevron-down icon-arrow"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m4' type="checkbox" />
                                <label htmlFor="m4">Kateqoriya 1</label>
                            </div>
                            <div>
                                <input id='m5' type="checkbox" />
                                <label htmlFor="m5">Kateqoriya 2</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Qiymət
                            </span>
                            <i className="fa-solid fa-chevron-down icon-arrow"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input type="text" placeholder='Min.₼' className='txt' />
                            </div>
                            <div>
                                <input type="text" placeholder='Max.₼' className='txt' />
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Ölçü
                            </span>
                            <i className="fa-solid fa-chevron-down icon-arrow"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m6' type="checkbox" />
                                <label htmlFor="m6">12x12</label>
                            </div>
                            <div>
                                <input id='m10' type="checkbox" />
                                <label htmlFor="m10">12x15</label>
                            </div>
                            <div>
                                <input id='m11' type="checkbox" />
                                <label htmlFor="m11">12x24</label>
                            </div>
                            <div>
                                <input id='m7' type="checkbox" />
                                <label htmlFor="m7">13x13</label>
                            </div>
                            <div>
                                <input id='m8' type="checkbox" />
                                <label htmlFor="m8">18x18</label>
                            </div>
                            <div>
                                <input id='m9' type="checkbox" />
                                <label htmlFor="m9">24x24</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Qiymət
                            </span>
                            <i className="fa-solid fa-chevron-down icon-arrow"></i>
                        </div>
                        <div className="checkbox">
                            <div className='check-flex'>
                                <div className="color-red color active">
                                </div>
                                <p>
                                    Qırmızı
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-white color">
                                </div>
                                <p>
                                    Ağ
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-blue color">
                                </div>
                                <p>
                                    Mavi
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-yellow color">
                                </div>
                                <p>
                                    Sarı
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-black color">
                                </div>
                                <p>
                                    Qara
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-top form-bottom">
                        <form action="">
                            <div>
                                <select>
                                    <option value="q">Qiymətinə görə</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="p">Populyarlığına görə</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="y">Yeni Kolleksiya</option>
                                </select>
                            </div>
                        </form>
                        {window.scrollTo(0, 0)}
                    </div>
                </div>

                <div className="filter-button">
                    <button className='delete'>Sil</button>
                    <button className='accept'>Təsdiqlə</button>
                </div>
            </div>
        </div>
    )
}
