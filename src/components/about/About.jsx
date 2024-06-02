import React from 'react'
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'
import Info from './Info'
import WhyUs from '../home/WhyUs';
import Skills from '../home/Skills';
import Partnyor from './Partnyor';

export default function About() {
    window.scrollTo(0, 0);
    return (
        <main>
            <BannerGlobal />
            <section id='about'>
                <Container>
                    <div className="top-title">
                        <h4>
                            HAQQIMIZDA
                            <span>
                                Haqqımızda
                            </span>
                        </h4>
                    </div>

                    <div className="about-row">
                        <div className="left-item">
                            <img src="../images/h1.png" alt="" />
                            <div className="img-abs">
                                <img src="../images/h2.png" alt="" />
                            </div>
                        </div>
                        <div className="right-item">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <Info />
            <WhyUs />
            <Skills />
            <Partnyor />
        </main>
    )
}
