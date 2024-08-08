import React from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image';

const WhySecBox = ({title,disription,bgcolor,boximg}) => {
  return (
    <div className='why-choose-box'>
      <div className='img-box' style={{ background: `rgba(${hexToRgb(bgcolor)}, 0.1)`, width:79, height:79 , borderRadius:10 , flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }} >
        <Image 
          src={boximg}
          alt='img'
          className='imgbox'
          width={36}
          height={36}
          style={{ maxWidth: '100%' , objectFit:'contain' }} 
        />
      </div>
      <div className='inner-cnt'>
        <div className='title-text'>{title}</div>
        <h6 className='discription-text'>{disription}</h6>
      </div>
    </div>
  )
}

// Function to convert HEX to RGB
function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  }

WhySecBox.propTypes = {
    title: PropTypes.number.isRequired,
    disription: PropTypes.string.isRequired,
  };

export default WhySecBox

