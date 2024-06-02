import React from 'react'
import Container from '../home/Container'
import { shoppingCentre } from '../data/data'
import BannerGlobal from '../BannerGlobal';

export default function ShoppingCentre() {
    window.scrollTo(0, 0);
    return (
        <main>
            <BannerGlobal />
            <Container>
                <div className="top-title">
                    <h4>
                        MAĞAZALARIMIZ
                        <span>
                            Mağazalarımız
                        </span>
                    </h4>
                </div>
                <section className='shooping'>
                    <div className="row">
                        {
                            shoppingCentre.map((el, idx) => {
                                return (
                                    <div key={idx} className="shopping-item">
                                        <img src={el.images} alt="" />
                                        <span>
                                            {el.shoppingName}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </Container>
        </main>
    )
}
