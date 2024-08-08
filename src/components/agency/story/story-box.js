import React from 'react'
import PropTypes from 'prop-types';

const StoryBox = ({number,disription}) => {
  return (
    <div className='stroy-box'>
        <div className='number-text'>{number}</div>
        <h6 className='discription-text'>{disription}</h6>
    </div>
  )
}

StoryBox.propTypes = {
    number: PropTypes.number.isRequired,
    disription: PropTypes.string.isRequired,
  };

export default StoryBox