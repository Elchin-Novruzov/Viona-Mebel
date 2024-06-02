import React from 'react'
import Container from '../home/Container'
import { Link } from 'react-router-dom';
import BannerGlobal from '../BannerGlobal';

export default function Register() {
    return (
        <main>
            <BannerGlobal />
            <Container>
                <section id='register'>
                    <div className="top-title">
                        <h4>
                            QEYDİYYAT
                            <span>
                                Qeydiyyat
                            </span>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="left">
                            <div className="login-area">
                                <ul>
                                    <li>
                                        <Link className='form-link' to="/giris">Giriş</Link>
                                    </li>
                                    <li>
                                        <Link className='form-link active ' to="/qeydiyyat">Qeydiyyat </Link>
                                    </li>
                                </ul>
                            </div>
                            <form action="">
                                <div>
                                    <span>
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
                                <div className='check'>
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <div>
                                        <p>
                                            Qeydiyyatı təsdiqləməklə mən istifadə şərtlərini qəbul edirəm
                                        </p>
                                    </div>
                                </div>
                                <div className='btn-form'>
                                    <button type='submit'>Qeydiyyat</button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="right">
                            <img src="../images/logo-viona 3.png" alt="" />
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    )
}
