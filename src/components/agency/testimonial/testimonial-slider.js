import React from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';

const testimonials = [
  {
    imageSrc: "/user1.png",
    rating: 5,
    quote: 'OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.',
    name: 'Franklin Hicks',
    title: 'Web Developer',
  },
  {
    imageSrc: "/user1.png",
    rating: 5,
    quote: 'OMG! I cannot believe that I have got a brand new landing page after getting Albino. ',
    name: 'Franklin Hicks',
    title: 'Web Designer',
  },
  {
    imageSrc: "/user1.png",
    rating: 5,
    quote: 'OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.',
    name: 'Franklin Hicks',
    title: 'Web Developer',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Testimonial {...testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
