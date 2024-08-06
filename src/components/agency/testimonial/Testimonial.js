"use client";
import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

const Testimonial = ({ imageSrc, rating, quote, name, title }) => {
  return (
    <Card className="d-flex flex-row align-items-center testimonial-card border-0" >
      <Image
        src={imageSrc}
        alt={name}
        width={164}
        height={164}
        className="rounded-circle"
      />
      <div >
        <div className="d-flex align-items-center testi-start">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="orange"
              width="24px"
              height="24px"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <Card.Text className="testi-header">{quote}</Card.Text>
        <Card.Text className="testi-name">
          {name} <span className="fw-normal">{title}</span>
        </Card.Text>
      </div>
    </Card>
  );
};

export default Testimonial;
