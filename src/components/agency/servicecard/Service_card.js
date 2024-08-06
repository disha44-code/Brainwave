"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ imageSrc, title, description, link, bgColor }) => {
  return (
    <Card className='service-card' style={{ backgroundColor: bgColor, color: 'white', textAlign: 'center', borderRadius: '10px', border:'none', height:'100%' }}>
      <Card.Body style={{padding:0}}>
        <div className="image-container">
          <Image
            src={imageSrc}
            alt="Graphic Design Illustration"
            className='img'
            width={146}
            height={135}
          />
        </div>
        <h4 className='card-title'>{title}</h4>
        <p className='card-para'>{description}</p>
        <Link href="/" className='link'>Learn more 
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.40039 2L13.0004 7.2L7.40039 12.4" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"/>
<path d="M1 6.98571H12.2" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"/>
</svg>

        </Link>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
