"use client";
import Banner from '@/components/agency/banner/banner'
import ServiceCard from '@/components/agency/servicecard/Service_card'
import OurStorySec from '@/components/agency/story/our-story-sec';
import StoryBox from '@/components/agency/story/story-box';
import Testimonial from '@/components/agency/testimonial/Testimonial'
import TestimonialSlider from '@/components/agency/testimonial/testimonial-slider';
import WhySecBox from '@/components/agency/why/WhySecBox';
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
        <div className='story-section-main'>
          <Container>
              <div className='story-sec-title'>
                    <h6 className='subtitle'>Our Story</h6>
                    <h2 className='section-title'>We know how everything works and why your business is failing over and over again.</h2>
              </div>
              <OurStorySec
                imgleft ='/storyimg-one.png'
                imgrightone ='/storyimg-two.png'
                imgrightsec ='/storyimg-three.png'
                imgcntbtm ='We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
              />
              <div className='story-box-main'>
                <Row>
                  <Col lg={4}>
                    <StoryBox
                      number='1M+'
                      disription='Customers visit Omega every month to get their service done.'
                    />
                  </Col>
                  <Col lg={4}>
                  <StoryBox
                      number='92%'
                      disription='Satisfaction rate comes from our awesome customers.'
                    />
                  </Col>
                  <Col lg={4}>
                  <StoryBox
                      number='4.9/5.0'
                      disription='Average customer ratings we have got all over internet.'
                    />
                  </Col>
                </Row>
              </div>
          </Container>
        </div>
        <div className='why-choose'>
          <Container>
            <div className='why-choose-title'>
              <h6 className='subtitle text-center'>Why choose us  </h6>
              <h2 className='section-title'>People choose us because we serve the best for everyone</h2>
            </div>
            <div className='why-box-inner'>
              <div className='why-box-main'>
                  <Row>
                    <Col lg={6} className='why-col'>
                      <WhySecBox
                        bgcolor = '#473BF0'
                        boximg = '/whychooseimg-1.png'
                        title='Dedicated project manager'
                        disription='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                      />
                    </Col>
                    <Col lg={6}  className='why-col'>
                      <WhySecBox
                        bgcolor = '#F64B4B'
                        boximg = '/whychooseimg-2.png'
                        title='Organized tasks'
                        disription='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                      />
                    </Col>
                    <Col lg={6}  className='why-col'>
                      <WhySecBox
                        bgcolor = '#68D585'
                        boximg = '/whychooseimg-3.png'
                        title='Easy feedback sharing'
                        disription='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                      />
                    </Col>
                    <Col lg={6}  className='why-col'>
                      <WhySecBox
                        bgcolor = '#161C2D'
                        boximg = '/whychooseimg-4.png'
                        title='Never miss deadline'
                        disription='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                      />
                    </Col>
                  </Row>
              </div>
            </div>
          </Container>
        </div>
    </div>
    </>
  )
}

export default Agency


