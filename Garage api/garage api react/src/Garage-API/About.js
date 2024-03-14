import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";



const About = () => {
    return (
        <div>

            {/* Main Img */}
            <Container fluid className='mt-5  '>
                <Row>
                    <div className='p-0'>
                        <img height="" className='w-100 p-0 ' src="https://assets.architecturaldigest.in/photos/600825b81363405bf8eb5086/16:9/w_2560%2Cc_limit/Garage-Rend_03_A-1366x768.jpg" alt="" />
                    </div>
                    <div className='pos-ab '>
                        <div className="black-box p-5 ms-4 text-white">
                            <h6 className='fw-bold'>WELCOME TO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                            <h1>Care<span className='icon-color'>x</span> Car <br></br> Service & Repair</h1>
                        </div>
                    </div>
                </Row>
            </Container>

            {/* ABout US */}
            <Container fluid className='ptb bg-lite text-white'>
                <Container className=''>
                    <Row>
                        <div className="col-6 position-relative ">
                            <div className=''>
                                <img className='w-100 position-relative' src="https://duruthemes.com/demo/html/carex/img/about.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6 ps-5">
                            <h6 className=' ps-2 fs-14'>ABOUT US <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                            <h1 className='fs-40'>Care<span className='icon-color'>x</span> Car <br /> Service & Repair</h1>
                            <p className='line-word text-color'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
                            <div>
                                <ul className=' mb-0 ps-0 '>
                                    <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> We offer multiple services</Link></li>
                                    <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Multiple car repair locations</Link></li>
                                    <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Original products</Link></li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <a href="/" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>

            {/*   HOW WE WORK */}
            <Container fluid className='ptb bg-lite'>
                <Container>
                    <Row>
                        <div className='text-white text-center pb-5'>
                            <h6 className='fs-14'>HOW WE WORK <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                            <h1 className='fs-50'>Our Process</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-3">
                            <div className="red-card ">
                                <h1 className='mb-3'><BiSolidCarMechanic /></h1>
                                <h2 className='mb-3 '>Book appointment</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box-card">
                                <h1 className='mb-3'><FaCarSide className='icon-color' /></h1>
                                <h2 className='mb-3 '>Bring your Vehicle</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box-card">
                                <h1 className='mb-3'><MdCarCrash className='icon-color' /></h1>
                                <h2 className='mb-3 '>Get the Vehicle Repaired</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box-card">
                                <h1 className='mb-3'><PiCertificate className='icon-color' /></h1>
                                <h2 className='mb-3 '>Ready for Deliver</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className='mt-5 pt-3 text-center' >
                            <a href="/" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
                        </div>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default About