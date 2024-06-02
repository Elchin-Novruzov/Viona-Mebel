import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../home/Container';
export default function Footer() {
    return (
        <footer id='footer'>
            <Container>
                <ul>
                    <li className='logo'>
                        <img src="../images/logof.png" alt="" />
                    </li>
                    <li className='top'>
                        <li><Link to="/haqqımızda"> Haqqımızda </Link></li>
                        <li><Link to="/mehsullar"> Məhsullar </Link></li>
                        <li><Link to="/magazalar"> Mağazalarımız </Link></li>
                        <li><Link to="/elaqe"> Əlaqə </Link></li>
                    </li>
                    <li className='top'>
                        <li><a href="#"> Şikayət və təkliflər </a></li>
                        <li><a href="#"> Vakansiyalar </a></li>
                        <li><a href="#"> FAQ </a></li>
                    </li>
                    <li className='right'>
                        *1001
                        <span>055 225 67 89</span>
                        <ul>
                            <li>
                                <i className="fa-brands fa-twitter"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-facebook-f"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-youtube"></i>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Container>
            <article className="footer-bottom">
                <a href="#"> Proton.az </a>
            </article>
        </footer>
    )
}
