import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
    <div className='agency-banner'>
    <Container>
        <Row className='align-items-center'>
            <Col md={6} >
                <div className='left-part'>
                    <h6 className='subtitle'>Let’s shift your business</h6>
                    <h1 className='main-title'>Shift your business fast with Shade Pro.</h1>
                    <p className='text'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                    <Button variant="primary" className='btn-custom btn-blue-cust-banner'>Get started a project</Button>
                </div>
            </Col>
            <Col md={6} className='text-end'>
                <div  className='banner-img'>
                <Image
                src="/banner-vector-1.png"
                width={107}
                height={109}
                alt="banner"
               className='banner-vector'
                />
                <Image
                src="/banner-image.png"
                width={463}
                height={463}
                alt="banner"
               
                />
                </div>
            </Col>
        </Row>
        </Container>
    </div>
    </>
  )
}

export default Banner