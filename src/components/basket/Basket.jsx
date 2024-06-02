import React from 'react'
import { Link } from 'react-router-dom';
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'

export default function Basket() {
    window.scrollTo(0, 0)
    return (
        <main>
            <BannerGlobal />
            <Container>
                <section id='basket'>
                    <div className="top-title">
                        <h4>
                            SƏBƏT
                            <span>
                                Səbət
                            </span>
                        </h4>
                    </div>
                    <div className="row">
                        <form action="">
                            <div>
                                <span className='first'>
                                    Ad, soyad*
                                </span>
                                <input placeholder='Adınız və Soyadınız' type="text" />
                            </div>
                            <div>
                                <span>
                                    Telefon*
                                </span>
                                <input placeholder='+994 50 999 99 99' type="text" />
                            </div>
                            <div>
                                <span>
                                    E-mail*
                                </span>
                                <input placeholder='E-mail ünvanınızı daxil edin' type="text" />
                            </div>
                            <div className="order">
                                <div>
                                    <div>
                                        <button type='button' className='order-btn'>Mağazadan götür</button>
                                    </div>
                                    <div>
                                        <button type='button' className='order-btn active'>Ünvana çatdırılma</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>
                                    Şəhər*
                                </span>
                                <input placeholder='Bakı, Sumqayıt…' type="text" />
                            </div>
                            <div>
                                <span>
                                    Ünvan*
                                </span>
                                <input placeholder='Küçə adı və ev ünvanı' type="text" />
                            </div>
                            <div>
                                <span>
                                    Ünvan*
                                </span>
                                <textarea placeholder='Əlavə qeydləri daxil edin' rows="10"></textarea>
                            </div>
                            <div>
                                <a href="#">
                                    Çatdırılma şərtləri
                                </a>

                            </div>
                            <div className="cash">
                                <div>
                                    <div>
                                        <button type='button' className='order-btn'>Qapıda ödəniş</button>
                                    </div>
                                    <div>
                                        <button type='button' className='order-btn active'>Kartla ödəniş    </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Kart məlumatlarını daxil edin:
                                </p>
                                <img src="../images/bank.png" alt="" />
                            </div>
                            <div>
                                <span>
                                    Kartın nömrəsi
                                </span>
                                <input style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.1)" }} type="text" placeholder='____ ____ ____ ____' />
                            </div>
                            <div className='bottom'>
                                <div>
                                    <span>
                                        Tarix
                                    </span>
                                    <input type="text" placeholder='MM/YY' />
                                </div>
                                <div>
                                    <span>
                                        CVV
                                    </span>
                                    <input
                                        placeholder='CVV 2'
                                        type="text"
                                    />

                                </div>
                            </div>
                        </form>
                        <div className='right-item'>
                            <div className="links">
                                <span>
                                    Məlumatlar
                                </span>
                                <Link to="/sebet-total"> Edit </Link>
                            </div>
                            <div className="basket-item">
                                <div className='basket-flex'>
                                    <div className='name'>
                                        <img src="../images/pop1.png" alt="" />
                                        <div className="dec">
                                            <span className='title'>
                                                Divan
                                            </span>
                                            <span className='code'>
                                                v2ghjkl345
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='price'>
                                            2.190₼
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="basket-bottom">
                                <ul>
                                    <li>
                                        Məhsul:
                                    </li>
                                    <li>
                                        2190 ₼
                                    </li>

                                    <li>
                                        Çatdırılma:
                                    </li>
                                    <li>
                                        7.00 ₼
                                    </li>

                                    <li>
                                        Endirim:
                                    </li>
                                    <li>
                                        0 ₼
                                    </li>
                                    <li className='current'>
                                        <span className='cari'>
                                            Cəmi qiymət:
                                        </span>
                                    </li>
                                    <li>
                                        <span className="price">
                                            2190 ₼
                                        </span>
                                    </li>
                                </ul>
                                <div className="imp">
                                    <input type="checkbox" />
                                    <p>
                                        Sifarişi təsdiqləməklə mən istifadə şərtlərini qəbul edirəm.
                                    </p>
                                </div>
                                <a className='basket-btn' href="#"> Sifarişi təsdiqlə </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    )
}
