import Header from '@/components/header/header'
import React from 'react'
import Script from 'next/script'; 

const Agency = () => {
  return (
    <>
     <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive" // Ensure script is loaded before the page is interactive
        crossOrigin="anonymous" // CORS setting for the script
      />
    <Header/>
    </>
  )
}

export default Agency


