import React from 'react'

export default function Info() {
    return (
        <section id='info'>
            <div className="info-row">
                <div className="info-item">
                    <div className="left">
                        <p className='left1'>
                            Keyfiyyətin ünvanı
                        </p>
                        <img src="../images/sofa1.png" alt="" />
                    </div>
                    <p className='info-txt'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>

                <div className="info-item-2">
                    <p className='info-txt'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="left">
                        <img src="../images/sofa2.png" alt="" />
                        <p className='left1'>
                            Münasib qiymət
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
