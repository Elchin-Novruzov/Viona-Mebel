import React from 'react'
import Banner from '../home/Banner'
import PopularProduct from './PopularProduct'
import Ppportunity from './Ppportunity'
import Product from './Product'
import Skills from './Skills'
import Slider from './Slider'
import WhyUs from './WhyUs'

export default function Home() {
    window.scrollTo(0, 0)
    return (
        <>
            <main>
                <Banner />
                <PopularProduct />
                <Slider />
                <Product />
                <Ppportunity />
                <WhyUs />
                <Skills />
            </main>
        </>
    )
}
