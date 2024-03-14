import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { RiServiceFill } from "react-icons/ri";
import { Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";


const Home = () => {

  const [service, setService] = useState([])

  const history = useHistory()

  const getService = () => {
    axios.get('http://localhost:3001/service/find')
      .then((res) => {
        console.log(res.data.data);
        setService(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getService()
  }, [])

  const card = () => {
    history.push('/customer-login')
  }

  return (
    <div>

      {/* Main Img */}
      <Container fluid className='mt-4  '>
        <Row>
          <div className='p-0'>
            <img height="" className='w-100 p-0 position-relative' src="https://assets.architecturaldigest.in/photos/600825b81363405bf8eb5086/16:9/w_2560%2Cc_limit/Garage-Rend_03_A-1366x768.jpg" alt="" />
          </div>
          <div className='pos-ab '>
            <div className="black-box p-5 ms-4 text-white">
              <h6 className='fw-bold'>WHAT WE DO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1>Our Services</h1>
              <div className='mt-4'>
                <a href="/" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
              </div>
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
                <a href="/about-us" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
              </div>
            </div>
          </Row>
        </Container>
      </Container>


      {/* Serive CARD  WITH Loop DATA MAP */}
      <Container fluid className='text-white mt-5'>
        <Container className="">
          <Row className=" py-5 gap-4">
            {
              service.map((el, index) => {
                return <Card style={{ width: '363px' }} key={index} onClick={card} className='p-0  box pos-rel'>
                  <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                  <div className="img-box"><Card.Img variant="top" className='p-0' src={'http://localhost:3001/images/' + el.image} /></div>
                  <Card.Body>
                    <div className='icon-color'><Card.Title className='pt-1 mb-2 fw-bold  text-uppercase' >{el.serviceName}</Card.Title></div>
                    <p className='pt-1  mb-2 fs-18'>{el.decription}</p>
                    <Card.Text className='pt-1 f-color'>${el.cost}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                  <a href="/" className="text-dark hov details fw-bold p-3">More Details..!</a>
                </Card>
              })
            }
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

      {/* What Customers Say */}
      <Container fluid className='ptb bg-lite text-white'>
        <Container className=''>
          <Row>
            <div className='text-white text-center pb-5'>
              <h6 className='fs-14'>TESTIMONIALS <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1 className='fs-50'>What<span className='icon-color'> Customers</span> Say </h1>
            </div>
          </Row>
          <Row>
            <div className="col-6 position-relative ">
              <div className=''>
                <img className='w-100 position-relative' src="https://duruthemes.com/demo/html/carex/img/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-6 p-5">
              {/* <h6 className=' ps-2 fs-14'>TESTIMONIALS <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6> */}
              <h1 className='fs-40'><span className='icon-color'> Terrific</span> auto repair shop!</h1>
              <p className='line-word text-color'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
              <div className='mt-4'>
                <a href="/" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
              </div>
              <div className='d-flex mt-4 align-items-center '>
                <img height="55px" width="10%" className='rounded-circle ' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <div className='ms-3'>
                  <h6 className='mb-0 mt-3 icon-color'>Customer Name</h6>
                  <p className='text-color'>Customer</p>
                </div>

              </div>
            </div>
          </Row>
        </Container>
      </Container>

      {/* Appointment */}
      {/* <Container fluid className='mt-5  '>
        <Row>
          <div className='p-0'>
            <img height="" className='w-100 p-0 ' src="https://assets.architecturaldigest.in/photos/600825b81363405bf8eb5086/16:9/w_2560%2Cc_limit/Garage-Rend_03_A-1366x768.jpg" alt="" />
          </div>
          <div className='pos-ab'>
            <div className="black-box p-5 ms-4 text-white">
              <h6 className='fw-bold'>WHAT WE DO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1>Our Services</h1>
              <div className='mt-4'>
                <a href="/" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </Row>
      </Container> */}



    </div>
  )
}

export default Home


{/* <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5">
            {
              service.map((el, index) => {
                return <div className="col-4 box p-0 bg-white m-3 bor" key={index} onClick={card}>

                  <div className=" text-dark pos-rel">
                    <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                    <div className="img-box"><img className='w-100' src={'http://localhost:3001/images/' + el.image} alt="" /></div>
                    <div className='p-3'>
                      <h4 className='pt-1 fs-6 mb-0 fw-bold icon-color' >{el.serviceName}</h4>
                      <p className='pt-1  mb-0 fs-18'>{el.decription}</p>
                      <h6 className='pt-1 f-color'>${el.cost}</h6>
                      <div>
                        <a href="/" className="text-dark hov details fw-bold">More Details..!</a>
                      </div>
                    </div>
                  </div>

                </div>

              })
            }
          </div>
        </div>
</div> */}