
import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap'

const OurStorySec = ({imgleft,imgrightone,imgrightsec,imgcntbtm}) => {
  return (
    <div>
            <Row>
                <Col lg={5}>
                <div className="image-left-part">
                    <Image
                        src={imgleft}
                        alt="left-img"
                        className='imgleft'
                        width={445}
                        height={565}
                        style={{ maxWidth: '100%', height: '100%' }} 
                    />
                </div>
                </Col>
                <Col lg={7}>
                    <div className='image-right-part'>
                        <div className="top-images">
                            <div className='right-img-one'>
                            <Image
                                src={imgrightone}
                                alt="right-img-one"
                                className='right-img'
                                width={318}
                                height={332}
                                style={{ maxWidth: '100%', height: '100%' }} 
                            />
                            </div>
                             <Image
                                src={imgrightsec}
                                alt="left-img"
                                className='img'
                                width={160}
                                height={167}
                                style={{ maxWidth: '100%', height: '100%', marginBottom:52 }} 
                            />
                        </div>
                        <div className='cnt'><p>{imgcntbtm}</p></div>
                    </div>
                </Col>
            </Row>
    </div>
  )
}

OurStorySec.propTypes = {
    imgleft: PropTypes.string.isRequired,
    imgrightone: PropTypes.string.isRequired,
    imgrightsec: PropTypes.string.isRequired,
    imgCntBtm: PropTypes.string.isRequired,
  };

export default OurStorySec