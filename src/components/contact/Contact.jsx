import React, { useEffect } from 'react'
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'

export default function Contact() {
    window.scrollTo(0, 0)
    const change = () => {
        const filial = document.querySelector('.filial');
        const icon = document.querySelector('.icon')
        filial.classList.toggle('active')
        icon.classList.toggle('active')
    }

    return (
        <main>
            <BannerGlobal />
            <section id='contact'>
                <Container>
                    <div className="top-title">
                        <h4>
                            ƏLAQƏ
                            <span>
                                Əlaqə
                            </span>
                        </h4>
                    </div>

                    <div className="row">
                        <div onClick={change} className="contact-top">
                            <span>
                                Filial seçin
                            </span>
                            <i class="fa-solid fa-chevron-down icon"></i>
                        </div>
                        <div className="filial">
                            <div className="left">
                                <span className='title'>
                                    XALQLAR FİLİALI
                                </span>
                                <a href="#">
                                    Babək prospekti, 64d
                                </a>

                                <div className='f-flex'>
                                    <div>
                                        <span>Tel:</span>
                                    </div>
                                    <div>
                                        <p>(055)444 70 07</p>
                                        <p>(012)444 70 07</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5890868134775!2d49.949516815319996!3d40.395798914836334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630e150b9241%3A0xde46dce80b8fd0f4!2sKhalglar%20Dostlughu!5e0!3m2!1sen!2saz!4v1677100869444!5m2!1sen!2saz" width="100%" height="360px"></iframe>
                            </div>
                        </div>
                        <div className="form">
                            <div className="top-title">
                                <h4>
                                    Müraciət formu
                                </h4>
                            </div>
                            <form action="">
                                <div className='form-flex'>
                                    <div>
                                        <span>
                                            Ad*
                                        </span>
                                        <input type="text" placeholder='Adınız' />
                                    </div>
                                    <div>
                                        <span>
                                            Soyad*
                                        </span>
                                        <input type="text" placeholder='Soyadınız' />
                                    </div>
                                    <div>
                                        <span>
                                            Telefon nömrəniz*
                                        </span>
                                        <input type="text" placeholder='+994 50 999 99 99' />
                                    </div>
                                    <div>
                                        <span>
                                            E-mail*
                                        </span>
                                        <input type="text" placeholder='E-mail ünvanınızı daxil edin' />
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        Müraciətiniz
                                    </span>
                                    <textarea placeholder='Mesajınız...' cols="30" rows="10"></textarea>
                                </div>
                                <div className="contact-btn">
                                    <button type='submit'>Göndər</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
