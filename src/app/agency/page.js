import Banner from '@/components/agency/banner/banner'
import ServiceCard from '@/components/agency/servicecard/Service_card'
import Header from '@/components/header/header'
import React from 'react'
// import Script from 'next/script'; 



const Agency = () => {
  return (
    <>
    <div className='bg-banner'>
      <div className='bg-inne-banner'>
      <Header/>
      <Banner/>
      </div>
      <ServiceCard
        imageSrc="/banner-vector-1.png" // Replace with the path to your image
        title="Graphic Design"
        description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        link="#"
        sx={{ margin: '20px', padding: '30px' }} // Example sx props
      />
    </div>
    </>
  )
}

export default Agency


