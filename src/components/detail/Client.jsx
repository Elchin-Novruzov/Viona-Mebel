import React from 'react'
import { allProduct } from '../data/data';

export default function Client() {
    return (
        <section id='client'>
            <div className="top-title">
                <h4>
                    Müştəri rəyləri
                    <span>
                        Müştəri rəyləri
                    </span>
                </h4>
            </div>
            <div className="row">
                {
                    allProduct.map((el, idx) => {
                        return (
                            el.category === 'client' ?
                                <div key={idx} className="client-item">
                                    <div className="left">
                                        <img src={el.clientPhoto} alt="" />
                                        <ul>
                                            <li>
                                                {el.star1}
                                            </li>
                                            <li>
                                                {el.star2}
                                            </li>
                                            <li>
                                                {el.star3}
                                            </li>
                                            <li>
                                                {el.star4}
                                            </li>
                                            <li>
                                                {el.star5}
                                            </li>
                                            <li>
                                                {el.starI}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right-item">
                                        <p>
                                            {el.clientTxt}
                                        </p>
                                    </div>
                                </div> : null
                        )
                    })
                }
            </div>
        </section>
    )
}
