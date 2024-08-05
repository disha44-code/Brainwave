"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ imageSrc, title, description, link, bgColor }) => {
  return (
    <Card className='service-card' style={{ backgroundColor: {bgColor}, color: 'white', textAlign: 'center', borderRadius: '10px', padding:'24px' }}>
      <Card.Body>
        <div className="image-container" style={{ marginBottom: '15px' }}>
          <Image
            src={imageSrc}
            alt="Graphic Design Illustration"
            className='img'
            width={100}
            height={100}
          />
        </div>
        <h4 className='card-title'>{title}</h4>
        <p className='card-para'>{description}</p>
        <Link href="/" className='link'>Learn more &rarr;</Link>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
