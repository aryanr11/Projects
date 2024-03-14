import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { GrTechnology } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";


import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";




const Header = () => {
  return (
    <div>
      <Container fluid className=' ps-sticky'>
        <Container className='pt-2  pos-sticky'>
          <Row className='align-items-center'>
            <div className='col-3 p-0'>
              <a href="/"><img src="https://duruthemes.com/demo/html/carex/img/logo-dark.png" className='w-75' alt="" /></a>
            </div>
            <div className='col-5 p-0'>
              <ul className='d-flex mb-0  justify-content-center'>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/" className="hov text-dark ">Home</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/about-us" className="hov text-dark ">About</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/service" className="hov text-dark ">Service</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/technician-login" className="hov text-dark">Technician</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/customer-login" className="hov text-dark">Customer</Link></li>
              </ul>
            </div>
            <div className='col-4 p-0'>
              <ul className='d-flex mb-0 justify-content-end'>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaInstagram /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaFacebookF /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaTwitter /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaGooglePlusG /></Link></li>
              </ul>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Header