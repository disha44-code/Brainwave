"use client";
import Banner from '@/components/agency/banner/banner'
import ServiceCard from '@/components/agency/servicecard/Service_card'
import Testimonial from '@/components/agency/testimonial/Testimonial'
import TestimonialSlider from '@/components/agency/testimonial/testimonial-slider';
import Header from '@/components/header/header'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Script from 'next/script'; 



const Agency = () => {
  return (
    <>
    <div className='bg-banner'>
      <div className='bg-inne-banner'>
      <Header/>
      <Banner/>
      </div>
        <div className='service-card-section'>
          <Container>
            <div className='service-card-title'>
              <h6 className='subtitle text-center'>Our services</h6>
              <h2 className='section-title'>We provide great services for our customers based on needs</h2>
            </div>
            <Row className='service-vector'>
                <Col lg={4} >
                <ServiceCard
                  bgColor ="#68D585"
                  imageSrc="/Designer-rafiki.png" // Replace with the path to your image
                  title="Graphic Design"
                  description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                  link="#"
                  sx={{ margin: '20px', padding: '30px' }} // Example sx props
                />
                </Col>
                <Col lg={4} >
                <ServiceCard
                  bgColor ="#473BF0"
                  imageSrc="/Programming-rafiki.png" // Replace with the path to your image
                  title="Web Development"
                  description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                  link="#"
                  sx={{ margin: '20px', padding: '30px' }} // Example sx props
                />
                </Col>
                <Col lg={4} >
                <ServiceCard
                  bgColor ="#F64B4B"
                  imageSrc="/Notes-rafiki.png" // Replace with the path to your image
                  title="Content Writing"
                  description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                  link="#"
                  sx={{ margin: '20px', padding: '30px' }} // Example sx props
                />
                </Col>
            </Row>
            <div className="testimonial-sec">
              <TestimonialSlider/>
            </div>
          </Container>
        </div>

    </div>
    </>
  )
}

export default Agency


